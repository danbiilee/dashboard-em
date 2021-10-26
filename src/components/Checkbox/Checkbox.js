import React from "react";
import PropTypes from "prop-types";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ name, data, onChange, children }) => {
  const { expandable, childrenCnt, checkedChildrenCnt } = data;
  let checkboxClass = styles.checkbox;
  if (
    expandable &&
    checkedChildrenCnt > 0 &&
    childrenCnt !== checkedChildrenCnt
  ) {
    checkboxClass += ` ${styles.checkedSome}`;
  }

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
        <span className={checkboxClass}></span>
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
