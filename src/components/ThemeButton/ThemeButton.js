import React, { useState } from "react";
import { useTheme, useThemeToggle } from "../../context/Theme";
import { Switch } from "@progress/kendo-react-inputs";
import "@progress/kendo-theme-bootstrap/dist/all.scss";
import "Styles/lib/kendoSwitch.scss";

const ThemeButton = () => {
  const themeMode = useTheme();
  const toggleTheme = useThemeToggle(themeMode);
  const [checked, setChecked] = useState(themeMode === "light" ? false : true);

  const handleChangeThemeMode = (e) => {
    setChecked(e.target.value);
    toggleTheme();
  };

  return <Switch onChange={handleChangeThemeMode} checked={checked} />;
};

export default ThemeButton;
