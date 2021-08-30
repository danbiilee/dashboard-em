import React from "react";
import PropTypes from "prop-types";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ name, data, onChange, children }) => {
  return (
    <>
      <input
        id={data.id}
        className={styles.input}
        type="checkbox"
        name={name}
        checked={data.checked}
        onChange={onChange}
      />
      <label htmlFor={data.id} className={styles.label}>
        <span className={styles.checkbox}></span>
        {children}
      </label>
    </>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  data: PropTypes.object,
  onChange: PropTypes.func,
  children: PropTypes.element,
};

export default Checkbox;
