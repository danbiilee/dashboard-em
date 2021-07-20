import React, { useState } from "react";
import { useTheme } from "../../context/Theme";
import { Switch } from "@progress/kendo-react-inputs";
import "@progress/kendo-theme-bootstrap/dist/all.scss";
import styles from "./Header.module.scss";
import "Styles/lib/kendoSwitch.scss";

const Header = () => {
  const [themeMode, setThemeMode] = useTheme();
  const [checked, setChecked] = useState(themeMode === "light" ? false : true);

  const handleChangeThemeMode = (e) => {
    setChecked(e.target.value);
    setThemeMode();
  };

  return (
    <header className={styles.header}>
      <div className={styles.tab}>tab tab2</div>
      <h1 className={styles.logo}>SMS DASHBOARD</h1>
      <div className={styles.clock}>CLOCK</div>
      <div className={styles.mode}>
        <Switch onChange={handleChangeThemeMode} checked={checked} />
        Dark Mode
      </div>
    </header>
  );
};

export default Header;
