import React, { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./CheckboxTree.module.scss";
import {
  homeIcon,
  inheritedIcon,
  rowsIcon,
  chevronDownIcon,
  chevronRightIcon,
} from "@progress/kendo-svg-icons";
import Checkbox from "../Checkbox/Checkbox";
import CheckboxTree from "./CheckboxTree";
import SvgIcon from "../SvgIcon";

const CheckboxTreeItem = ({ treeItem, itemKey, handleClick, handleChange }) => {
  const keys = itemKey.split("/");

  const getTreeItemClassName = useCallback((item) => {
    let className = `${styles.item} tree__item`;
    const isExpanded = item.expandable && item.expanded; // 오픈 여부

    if (isExpanded) {
      className += ` ${styles.item__expanded} tree__item--expanded`;
    }

    return className;
  }, []);

  return (
    <li>
      <div className={getTreeItemClassName(treeItem)}>
        <span
          className="tree__expander"
          data-dir={itemKey}
          onClick={(e) => handleClick(e, treeItem.expandable)}
        >
          {treeItem.expanded ? (
            <SvgIcon icon={chevronDownIcon} />
          ) : treeItem.expandable ? (
            <SvgIcon icon={chevronRightIcon} />
          ) : (
            <span className="k-svg-icon"></span>
          )}
        </span>
        <Checkbox name={itemKey} data={treeItem} onChange={handleChange}>
          <span className={`${styles.selector} tree__selector`}>
            {treeItem.depth === 0 ? (
              <SvgIcon icon={homeIcon} />
            ) : !treeItem.expandable ? (
              <SvgIcon icon={rowsIcon} />
            ) : (
              <SvgIcon icon={inheritedIcon} />
            )}
            <span className={styles.selector__title}>
              {keys[keys.length - 1]}
            </span>
          </span>
        </Checkbox>
      </div>
      {treeItem.expandable && (
        <CheckboxTree
          dir={itemKey}
          list={treeItem.children}
          handleClick={handleClick}
          handleChange={handleChange}
        />
      )}
    </li>
  );
};

const areEqaul = (prevState, nextState) =>
  prevState.treeItem === nextState.treeItem;

CheckboxTreeItem.propTypes = {
  treeItem: PropTypes.object,
  itemKey: PropTypes.string,
  handleClick: PropTypes.func,
  handleChange: PropTypes.func,
};

export default React.memo(CheckboxTreeItem, areEqaul);
