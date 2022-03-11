import {
  RESOURCE_KEY_ID,
  RESOURCE_KEY_NM,
  RESOURCE_KEY_LIST,
} from "./constants";

export const getCSSValue = (prop) => {
  const value = getComputedStyle(document.documentElement).getPropertyValue(
    prop
  );
  return value.replaceAll(" ", "");
};

export const convertArrayToTreeObject = (selectedIds, payload) => {
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
      if (selectedIds.includes(v[RESOURCE_KEY_ID])) {
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

      // 체크된 자식들을 기준으로 부모의 cnt, checked 값 설정
      const curr = tmp[depth][v[RESOURCE_KEY_NM]];
      curr.children = tmp[depth + 1];
      curr.childrenCnt = tmpCnt[depth + 1];
      curr.checkedChildrenCnt = tmpCheckedCnt[depth + 1];
      curr.checked = curr.childrenCnt === curr.checkedChildrenCnt;

      // 누적 & 초기화
      tmpCnt[depth] += tmpCnt[depth + 1];
      if (depth === 0) {
        // 최상단 부모
        curr.childrenCnt = tmpCnt[depth];
        curr.checkedChildrenCnt = tmpCheckedCnt[depth + 1];
        result.ROOT.children = tmp[depth];
        result.ROOT.totalDepth = tmp.length;
      } else {
        // 자식들
        tmpCheckedCnt[depth] += tmpCheckedCnt[depth + 1];
        tmp[depth + 1] = {}; // init
        tmpCnt[depth + 1] = 0;
        tmpCheckedCnt[depth + 1] = 0;
      }
    }
  }

  makeObject(0, payload[0]);

  return result;
};
