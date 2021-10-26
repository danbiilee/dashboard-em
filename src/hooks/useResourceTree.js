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
      const acc = Array.from({ length: totalDepth + 1 }, () => 0); // checkedChildrenCnt 누적
      const nests = Array.from({ length: totalDepth + 1 }, () => null); // 진행중 노드
      const keys = Array.from({ length: totalDepth }, () => null); // children 키들
      let isBreak = false; // 목적지 도달 여부 -> 반복 중단
      let isAcc = false;

      const search = (depth, key, v) => {
        // 같은 뎁스의 다른 키는 패스(전체 선택 제외)
        if (dest.depth !== 0 && depth === dest.depth && key !== dest.key) {
          return;
        }

        if (isAcc) {
          nests[depth - 1].checked = checked; // 체크
          acc[depth - 1] += checked ? 1 : -1; // 누적

          if (key === dest.key) {
            isBreak = true;
          }
          return;
        } else {
          nests[depth] = v;

          if (!v.expandable) {
            isAcc = true;
            search(depth + 1, key, v);
            isAcc = false;
            return;
          }

          keys[depth] = Object.keys(v.children);
          while (keys[depth].length) {
            if (isBreak) {
              break;
            }
            const childKey = keys[depth].shift();
            search(depth + 1, childKey, v.children[childKey]);
          }

          // 체크된 자식들을 기준으로 부모의 cnt, checked 값 설정
          const childrenDepth = depth + 1;
          if (!acc[childrenDepth]) {
            return;
          }

          if (v.checkedChildrenCnt + acc[childrenDepth] > v.childrenCnt) {
            acc[childrenDepth] -= v.checkedChildrenCnt;
          }
          let checkedSum = acc[childrenDepth];
          v.checkedChildrenCnt += checkedSum;
          v.checked = v.childrenCnt === v.checkedChildrenCnt; // 체크

          // 누적 & 초기화
          if (checked && (dest.depth === 0 || depth > dest.depth)) {
            acc[depth] += v.checkedChildrenCnt;
          } else {
            acc[depth] += checkedSum;
          }
          acc[childrenDepth] = 0;
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
