import { useState, useEffect } from "react";

export const useSelectedResources = (resources) => {
  const [selectedResources, setSelectedResources] = useState([]);

  useEffect(() => {
    const list = [];

    const search = (v, key) => {
      if (!v.expandable) {
        v.checked && list.push({ ...v, title: key });
        return;
      } else {
        if (!v.checkedChildrenCnt) {
          return;
        }

        const { children } = v;
        const childrenKeys = Object.keys(children);

        for (let childKey of childrenKeys) {
          search(children[childKey], `${key} > ${childKey}`);
        }
      }
    };

    Object.keys(resources).forEach((key) => {
      search(resources[key], key);
    });

    setSelectedResources(list);
  }, [resources]);

  return { selectedResources };
};
