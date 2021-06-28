import React from "react";
import PropTypes from "prop-types";
import styles from "../Main.module.scss";

const Bottom = ({ children }) => {
  return <div className={styles.bottom}>{children}</div>;
};

Bottom.propTypes = {
  children: PropTypes.node,
};

export default Bottom;
