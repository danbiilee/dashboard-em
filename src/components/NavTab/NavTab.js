import React from "react";
import styles from "./NavTab.module.scss";
import { NavLink } from "react-router-dom";

const NavTab = () => (
  <div className={styles.nav}>
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
);

export default NavTab;
