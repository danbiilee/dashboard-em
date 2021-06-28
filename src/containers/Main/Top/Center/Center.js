import React from "react";
import PropTypes from "prop-types";
import styles from "../../Main.module.scss";

const Center = ({ children }) => {
  return <div className={styles.top__center}>{children}</div>;
};

Center.propTypes = {
  children: PropTypes.node,
};

export default Center;
