import React from "react";
import PropTypes from "prop-types";
import styles from "./CheckboxTree.module.scss";
import CheckboxTreeItem from "./CheckboxTreeItem";

const CheckboxTree = ({ dir, list, handleClick, handleChange }) => {
  return (
    <ul className={`${styles.list} ${dir ? "" : styles.root}`}>
      {Object.keys(list).map((childKey) => (
        <CheckboxTreeItem
          key={list[childKey].id}
          treeItem={list[childKey]}
          itemKey={dir ? `${dir}/${childKey}` : childKey}
          handleClick={handleClick}
          handleChange={handleChange}
        />
      ))}
    </ul>
  );
};

CheckboxTree.propTypes = {
  dir: PropTypes.string,
  list: PropTypes.object,
  handleClick: PropTypes.func,
  handleChange: PropTypes.func,
};

export default CheckboxTree;
