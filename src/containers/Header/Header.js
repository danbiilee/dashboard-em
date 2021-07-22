import React, { useState } from "react";
import { useTheme } from "../../context/Theme";
import { NavLink, useLocation } from "react-router-dom";
import Clock from "../../components/Clock/Clock";
import { Switch } from "@progress/kendo-react-inputs";
import "@progress/kendo-theme-bootstrap/dist/all.scss";
import styles from "./Header.module.scss";
import "Styles/lib/kendoSwitch.scss";

const Header = () => {
  const { pathname } = useLocation();
  const [themeMode, setThemeMode] = useTheme();
  const [checked, setChecked] = useState(themeMode === "light" ? false : true);

  const handleChangeThemeMode = (e) => {
    setChecked(e.target.value);
    setThemeMode();
  };

  return (
    <header className={styles.header}>
      <div className={styles.tab}>
        <NavLink
          exact
          to="/"
          className={styles.link}
          activeClassName={styles.selected}
        >
          SMS
        </NavLink>
        <NavLink
          to="/nms"
          className={styles.link}
          activeClassName={styles.selected}
        >
          NMS
        </NavLink>
      </div>
      <h1 className={styles.logo}>
        {pathname === "/" ? "SMS" : "NMS"} DASHBOARD
      </h1>
      <div className={styles.utils}>
        <div className={styles.clock}>
          <Clock />
        </div>
        <div className={styles.mode}>
          <Switch
            className={styles.switch}
            onChange={handleChangeThemeMode}
            checked={checked}
          />
          <span className={styles.mode__text}>Dark Mode</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
