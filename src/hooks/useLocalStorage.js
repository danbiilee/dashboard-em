import { useState } from "react";

export const useLocalStorage = (key, defaultState) => {
  const [storedStorage, setStoredStorage] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultState;
    } catch (e) {
      console.error(`Can't get [${key}]'s item. \n ${e}`);
      return defaultState;
    }
  });

  const setStorage = (state) => {
    setStoredStorage(state);
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (e) {
      console.error(`Can't set [${key}]'s item. \n ${e}`);
    }
  };

  return { storedStorage, setStorage };
};
