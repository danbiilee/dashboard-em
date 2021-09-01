import React from "react";
import { useLocation } from "react-router-dom";
import Clock from "../../components/Clock/Clock";
import ThemeButton from "../../components/ThemeButton/ThemeButton";
import styles from "./Header.module.scss";
import { useTheme } from "../../context/Theme";
import NavTab from "../../components/NavTab";

const Header = () => {
  const { pathname } = useLocation();
  const themeMode = useTheme();

  return (
    <header className={styles.header}>
      <NavTab />
      <h1 className={styles.logo}>
        {pathname === "/" ? "SMS" : "NMS"} DASHBOARD
      </h1>
      <div className={styles.utils}>
        <Clock />
        <div className={styles.mode}>
          <ThemeButton />
          <span className={styles.mode__text}>
            {themeMode[0].toUpperCase() + themeMode.slice(1)} Mode
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
