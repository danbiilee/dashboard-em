import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LOCAL_STORAGE_THEME_NAME = "ems8-dashboard-theme";
const THEME_TOGGLE_CLASS_NAME = "theme-dark";
const THEME_LIGHT = "light";
const THEME_DARK = "dark";

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const storedTheme =
    window.localStorage.getItem(LOCAL_STORAGE_THEME_NAME) || THEME_LIGHT;
  const [themeMode, setThemeMode] = useState(storedTheme);

  useEffect(() => {
    if (themeMode === THEME_DARK) {
      document.documentElement.classList.add(THEME_TOGGLE_CLASS_NAME);
    }
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  const { themeMode, setThemeMode } = context;

  const toggleTheme = () => {
    if (themeMode === THEME_LIGHT) {
      setThemeMode(THEME_DARK);
      window.localStorage.setItem(LOCAL_STORAGE_THEME_NAME, THEME_DARK);
    } else {
      setThemeMode(THEME_LIGHT);
      window.localStorage.setItem(LOCAL_STORAGE_THEME_NAME, THEME_LIGHT);
    }
    document.documentElement.classList.toggle(THEME_TOGGLE_CLASS_NAME);
  };

  return [themeMode, toggleTheme];
};

export { ThemeProvider, useTheme };

ThemeProvider.propTypes = {
  children: PropTypes.node,
};