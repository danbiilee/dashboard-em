import { useState, useCallback } from "react";
import { produce } from "immer";

export const useResourceTree = (initialState) => {
  const [state, setState] = useState(initialState);

  const handleClickExpander = useCallback(({ target }, expandable) => {
    if (!expandable) {
      return;
    }

    const span = target.closest(".tree__expander");
    if (!span) {
      return;
    }

    setState(
      produce((draft) => {
        const { dir } = span.dataset;
        const dirs = dir.split("/");
        let drafted = draft;

        for (let dir of dirs) {
          drafted = drafted.children[dir];
        }
        drafted.expanded = !drafted.expanded;
      })
    );

    const treeItem = span.closest(".tree__item");
    treeItem.classList.toggle("tree__item--expanded");
  }, []);

  const handleChangeChecked = useCallback(
    ({ target }) => {
      const { name, checked } = target;

      const dirs = name.split("/");
      const dest = {
        key: dirs[dirs.length - 1],
        depth: dirs.length - 1,
      };

      const { totalDepth } = state;
      const acc = Array.from({ length: totalDepth }, () => 0); // checkedChildrenCnt 누적 배열
      const nests = Array.from({ length: totalDepth }, () => null);
      const keys = Array.from({ length: totalDepth - 1 }, () => null);
      let bool = false;

      const search = (lv, key, v) => {
        if (dest.depth !== 0 && lv === dest.depth && key !== dest.key) {
          return;
        }

        if (lv === totalDepth) {
          const nextState = checked;
          acc[v.depth] += nextState ? 1 : -1;
          nests[lv - 1].checked = nextState;

          if (key === dest.key) {
            bool = true;
          }

          return;
        } else {
          nests[lv] = v;

          if (!v.expandable) {
            search(lv + 1, key, v);
            return;
          }

          keys[lv] = Object.keys(v.children);

          while (keys[lv].length) {
            const childKey = keys[lv].shift();

            if (bool) {
              break;
            }

            search(lv + 1, childKey, v.children[childKey]);
          }

          // 체크된 자식들을 기준으로 부모의 cnt, checked 값 설정
          const childrenDepth = lv + 1;
          if (lv !== 0 && checked && (key === dest.key || dest.depth === 0)) {
            acc[childrenDepth] -= v.checkedChildrenCnt;
          }
          let checkedSum = acc[childrenDepth];

          v.checkedChildrenCnt += checkedSum;
          v.checked = v.childrenCnt === v.checkedChildrenCnt; // 체크

          acc[lv] += checkedSum; // 누적
          acc[childrenDepth] = 0; // 초기화
        }
      };

      setState(
        produce((draft) => {
          search(0, dirs[0], draft.children[dirs[0]]); // START: depth 0
        })
      );
    },
    [state]
  );

  return [state, handleClickExpander, handleChangeChecked];
};
