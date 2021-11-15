export const getCSSValue = (prop) => {
  const value = getComputedStyle(document.documentElement).getPropertyValue(
    prop
  );
  return value.replaceAll(" ", "");
};
