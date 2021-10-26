import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ children, classToAdd, ...props }) => {
  return (
    <button
      className={`${styles.button} ${classToAdd ? styles[classToAdd] : ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  classToAdd: PropTypes.string,
  props: PropTypes.object,
};

export default React.memo(Button);
