import { useState, useCallback } from "react";

export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const onToggle = useCallback(() => {
    setState((state) => !state);
  }, []);

  return [state, onToggle];
};
