import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocalStorage } from "../../hooks";

const LOCAL_STORAGE_THEME = "ems8-dashboard-theme";
const THEME_TOGGLE_CLASS = "theme-dark";
const THEME_LIGHT = "light";
const THEME_DARK = "dark";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

const ThemeProvider = ({ children }) => {
  const { storedStorage, setStorage } = useLocalStorage(
    LOCAL_STORAGE_THEME,
    THEME_LIGHT
  );
  const [themeMode, setThemeMode] = useState(storedStorage);

  useEffect(() => {
    if (themeMode === THEME_DARK) {
      document.documentElement.classList.add(THEME_TOGGLE_CLASS);
    }
    setStorage(themeMode);
  }, [themeMode, setStorage]);

  return (
    <ThemeContext.Provider value={themeMode}>
      <ThemeUpdateContext.Provider value={setThemeMode}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

function useTheme() {
  return useContext(ThemeContext);
}

function useThemeToggle(themeMode) {
  const setThemeMode = useContext(ThemeUpdateContext);

  const toggleTheme = () => {
    if (themeMode === THEME_LIGHT) {
      setThemeMode(THEME_DARK);
    } else {
      setThemeMode(THEME_LIGHT);
    }
    document.documentElement.classList.toggle(THEME_TOGGLE_CLASS);
  };

  return toggleTheme;
}

export { ThemeProvider, useTheme, useThemeToggle };

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
