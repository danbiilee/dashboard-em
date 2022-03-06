import {
  RESOURCE_KEY_ID,
  RESOURCE_KEY_NM,
  RESOURCE_KEY_LIST,
  RESOURCE_CHECKED_KEYS,
} from "./constants";

export const getCSSValue = (prop) => {
  const value = getComputedStyle(document.documentElement).getPropertyValue(
    prop
  );
  return value.replaceAll(" ", "");
};

export const convertArrayToTreeObject = (payload) => {
  const result = {
    ROOT: {
      totalDepth: 0,
      children: {},
    },
  };

  let bool = false;
  const tmp = [];
  const tmpCnt = Array.from({ length: 10 }, () => 0);
  const tmpCheckedCnt = Array.from({ length: 10 }, () => 0);

  function makeObject(depth, v) {
    if (bool) {
      let checked = false;
      if (RESOURCE_CHECKED_KEYS.includes(v[RESOURCE_KEY_NM])) {
        checked = true;
        tmpCheckedCnt[depth] += 1;
      }

      tmpCnt[depth] += 1;
      tmp[depth][v[RESOURCE_KEY_NM]] = {
        id: v[RESOURCE_KEY_ID],
        depth,
        checked,
        expandable: false,
        expanded: false,
      };
    } else {
      tmp[depth] = {
        ...tmp[depth],
        [v[RESOURCE_KEY_NM]]: {
          id: v[RESOURCE_KEY_ID],
          depth,
          checked: false,
          expandable: true,
          expanded: true,
        },
      };

      if (!v[RESOURCE_KEY_LIST] || !v[RESOURCE_KEY_LIST].length) {
        bool = true;
        makeObject(depth, v);
        bool = false;
        return;
      }

      for (let item of v[RESOURCE_KEY_LIST]) {
        makeObject(depth + 1, item);
      }

      tmp[depth][v[RESOURCE_KEY_NM]].children = tmp[depth + 1];
      tmp[depth][v[RESOURCE_KEY_NM]].childrenCnt = tmpCnt[depth + 1];
      tmp[depth][v[RESOURCE_KEY_NM]].checkedChildrenCnt =
        tmpCheckedCnt[depth + 1];

      tmpCnt[depth] += tmpCnt[depth + 1]; // 누적
      if (depth > 0) {
        tmpCheckedCnt[depth] += tmpCheckedCnt[depth + 1];

        // init
        tmp[depth + 1] = {};
        tmpCnt[depth + 1] = 0;
        tmpCheckedCnt[depth + 1] = 0;
      }

      if (depth === 0) {
        tmp[depth][v[RESOURCE_KEY_NM]].childrenCnt = tmpCnt[depth];
        tmp[depth][v[RESOURCE_KEY_NM]].checkedChildrenCnt =
          tmpCheckedCnt[depth + 1];

        result.ROOT.children = tmp[depth];
        result.ROOT.totalDepth = tmp.length;
      }
    }
  }

  makeObject(0, payload[0]);

  return result;
};
