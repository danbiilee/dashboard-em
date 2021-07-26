import React, { useState } from "react";
import { useTheme } from "../../context/Theme";
import { Switch } from "@progress/kendo-react-inputs";
import "@progress/kendo-theme-bootstrap/dist/all.scss";
import "Styles/lib/kendoSwitch.scss";

const ThemeButton = () => {
  const [themeMode, setThemeMode] = useTheme();
  const [checked, setChecked] = useState(themeMode === "light" ? false : true);

  const handleChangeThemeMode = (e) => {
    setChecked(e.target.value);
    setThemeMode();
  };

  return <Switch onChange={handleChangeThemeMode} checked={checked} />;
};

export default ThemeButton;
