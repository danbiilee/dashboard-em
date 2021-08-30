import { useState, useCallback } from "react";
import { produce } from "immer"; // current

export const useResourceTree = (initialState) => {
  const [state, setState] = useState(initialState);

  const handleChangeChecked = ({ target }) => {
    const { name } = target;

    setState(
      produce((draft) => {
        const dirs = name.split("/");
        let drafted = draft["ROOT"];

        for (let dir of dirs) {
          drafted = drafted["children"][dir];
        }
        drafted.checked = !drafted.checked;
      })
    );
  };

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
        let drafted = draft["ROOT"];

        for (let dir of dirs) {
          drafted = drafted["children"][dir];
        }
        drafted.expanded = !drafted.expanded;
      })
    );

    const treeItem = span.closest(".tree__item");
    treeItem.classList.toggle("tree__item--expanded");
  }, []);

  return [state, handleClickExpander, handleChangeChecked];
};
