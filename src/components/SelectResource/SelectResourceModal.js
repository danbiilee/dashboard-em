import React, { useRef, useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./SelectResource.module.scss";
import { Button } from "@progress/kendo-react-buttons";
import { SvgIcon } from "@progress/kendo-react-common";
import {
  homeIcon,
  inheritedIcon,
  rowsIcon,
  chevronDownIcon,
  chevronRightIcon,
} from "@progress/kendo-svg-icons";
import Checkbox from "../Checkbox/Checkbox";
import { processedTreeData } from "./TestData";
import { useResourceTree } from "../../hooks";

const RenderTreeItem = ({ treeItem, itemKey, handleClick, handleChange }) => {
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
        <ul>
          {Object.keys(treeItem["children"]).map((childKey) => (
            <RenderTreeItem
              key={treeItem["children"][childKey].id}
              treeItem={treeItem["children"][childKey]}
              itemKey={`${itemKey}/${childKey}`}
              handleClick={handleClick}
              handleChange={handleChange}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const SelectResourceModal = ({ onToggleSelectModal }) => {
  const [treeData, handleClickExpander, handleChangeChecked] =
    useResourceTree(processedTreeData);
  const treeRoot = treeData["ROOT"]["children"];
  const [selectedResources, setSelectedResources] = useState([]);

  useEffect(() => {
    if (!treeData) {
      return;
    }

    const selectedData = [];
    const root = treeData.ROOT.children;

    const DFS = (v, title) => {
      if (!v.checked) {
        return;
      }

      if (!v.expandable && v.checked) {
        selectedData.push(title);
        return;
      } else {
        const { children } = v;
        const childrenKeys = Object.keys(children);

        for (let key of childrenKeys) {
          DFS(children[key], `${title} > ${key}`);
        }
      }
    };

    Object.keys(root).forEach((key) => {
      DFS(root[key], key);
    });

    setSelectedResources(selectedData);
  }, [treeData]);

  const backdropRef = useRef();
  const handleClickBackdrop = ({ target }) => {
    const isBackground = target === backdropRef.current;
    const button =
      target.closest("button.cancel") || target.closest("button.close");

    if (!isBackground && !button) {
      return;
    }

    onToggleSelectModal();
  };

  return (
    <div
      className={styles.backdrop}
      onClick={handleClickBackdrop}
      ref={backdropRef}
    >
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3 className={styles.title}>리소스 선택</h3>
          <Button
            icon="close"
            primary={true}
            look="flat"
            className="k-modal-header close"
          />
        </div>
        <div className={styles.tree}>
          <ul className={styles.list}>
            {Object.keys(treeRoot).map((rootKey) => (
              <RenderTreeItem
                key={treeRoot[rootKey].id}
                treeItem={treeRoot[rootKey]}
                itemKey={rootKey}
                handleClick={handleClickExpander}
                handleChange={handleChangeChecked}
              />
            ))}
          </ul>
        </div>
        <div className={styles.footer}>
          <h4 className={styles.selected__title}>선택된 리소스</h4>
          <div className={styles.selected__box}>
            <span className={styles.selected__text}>
              {selectedResources[0]}
            </span>
            (외{selectedResources.length}건)
          </div>
          <div className={styles.buttons}>
            <Button
              primary={true}
              look="outline"
              className="k-modal-footer cancel"
            >
              취소
            </Button>
            <Button
              primary={true}
              look="outline"
              className="k-modal-footer select"
            >
              선택
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

RenderTreeItem.propTypes = {
  treeItem: PropTypes.object,
  itemKey: PropTypes.string,
  handleClick: PropTypes.func,
  handleChange: PropTypes.func,
};

SelectResourceModal.propTypes = {
  onToggleSelectModal: PropTypes.func,
};

export default SelectResourceModal;
