import React from "react";
import PropTypes from "prop-types";
import styles from "../../Main.module.scss";

const Side = ({ children }) => {
  return <div className={styles.top__side}>{children}</div>;
};

Side.propTypes = {
  children: PropTypes.node,
};

export default Side;
