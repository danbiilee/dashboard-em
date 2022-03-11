import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import styles from "./SelectResource.module.scss";
import {
  exclamationCircleIcon,
  checkOutlineIcon,
  xIcon,
} from "@progress/kendo-svg-icons";
import { useLocalStorage, useResourceTree } from "../../hooks";
import { useSelectedResources } from "../../hooks";
import CheckboxTree from "../CheckboxTree";
import SvgIcon from "../SvgIcon";
import Button from "../Button";
import { useResource, useSetResource } from "../../context/Resource";
import { LOCAL_STORAGE_RESOURCE } from "../../utils/constants";

const SelectResourceModal = ({ onToggleModal }) => {
  const resources = useResource();
  const setResources = useSetResource();
  const { storedStorage, setStorage } = useLocalStorage(LOCAL_STORAGE_RESOURCE);

  const type = useLocation().pathname === "/" ? "sms" : "nms";
  const [root, handleClickExpander, handleChangeChecked] = useResourceTree(
    resources[type].ROOT
  );

  const { selectedResources } = useSelectedResources(root.children);
  const isValid = selectedResources.length > 0 && selectedResources.length < 5;

  // 모달 닫기
  const backdropRef = useRef();
  const handleCloseModal = ({ target }) => {
    const isBackground = target === backdropRef.current;
    const closeButton = target.closest("button[data-close=true]");

    if (!isBackground && !closeButton) {
      return;
    }

    onToggleModal();
  };

  // 선택 버튼 클릭 -> 최종 선택
  const handleSelectResource = () => {
    if (!isValid) {
      return;
    }

    setResources((resources) => ({
      ...resources,
      [type]: { ROOT: root },
    }));

    // Set localstroage
    setStorage({
      ...storedStorage,
      [type]: selectedResources.map((resource) => resource.id),
    });

    onToggleModal();
  };

  return (
    <div
      className={styles.backdrop}
      onClick={handleCloseModal}
      ref={backdropRef}
    >
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3 className={styles.title}>리소스 선택</h3>
          <Button classToAdd="modal__close" data-close="true">
            <SvgIcon icon={xIcon} />
          </Button>
        </div>
        <div className={styles.tree}>
          <CheckboxTree
            list={root.children}
            handleClick={handleClickExpander}
            handleChange={handleChangeChecked}
          />
        </div>
        <div className={styles.footer}>
          <h4 className={styles.selected__header}>
            선택된 리소스
            <span
              className={`${styles.selected__header__noti} ${
                !isValid && styles.visible
              }`}
            >
              {selectedResources.length === 0 && "리소스를 선택해주세요"}
              {selectedResources.length > 4 &&
                "리소스는 최대 4개까지 선택할 수 있습니다"}
            </span>
          </h4>
          <div className={styles.selected__box}>
            <span className={styles.selected__text}>
              {!selectedResources.length ? (
                "0 건"
              ) : (
                <>
                  <span className={styles.selected__text__title}>
                    {selectedResources[0].title}&nbsp;
                  </span>
                  {selectedResources.length > 1 &&
                    `(외 ${selectedResources.length - 1}건)`}
                </>
              )}
            </span>
            <SvgIcon
              icon={isValid ? checkOutlineIcon : exclamationCircleIcon}
            />
          </div>
          <div className={styles.buttons}>
            <Button classToAdd="modal__cancel" data-close="true">
              취소
            </Button>
            <Button classToAdd="modal__select" onClick={handleSelectResource}>
              선택
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

SelectResourceModal.propTypes = {
  onToggleModal: PropTypes.func,
};

export default React.memo(SelectResourceModal);
