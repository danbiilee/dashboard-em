import React from "react";
import PropTypes from "prop-types";
import styles from "../Main.module.scss";

const Top = ({ children }) => {
  return <div className={styles.top}>{children}</div>;
};

Top.propTypes = {
  children: PropTypes.node,
};

export default Top;
