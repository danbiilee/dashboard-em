import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.tab}>tab tab2</div>
      <h1 className={styles.logo}>SMS DASHBOARD</h1>
      <div className={styles.clock}>CLOCK</div>
      <div className={styles.mode}>MODE</div>
    </header>
  );
};

export default Header;
