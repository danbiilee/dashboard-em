import React from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../../context/Theme";
import styles from "./ConfigurationStatus.module.scss";

const ConfigurationStatus = () => {
  const { pathname } = useLocation();
  const themeMode = useTheme();
  const page_path = pathname === "/" ? "SERVER" : "NETWORK";
  const classList = {
    SERVER_light: styles.server_light,
    SERVER_dark: styles.server_dark,
    NETWORK_light: styles.network_light,
    NETWORK_dark: styles.network_dark,
  };
  const mode_style = classList[page_path + "_" + themeMode];

  return (
    <div className={styles.wrapper}>
      <div className={styles.left_wrapper}>
        <div className={`${styles.image} ${mode_style}`}></div>
        <div className={styles.title}>{page_path}</div>
      </div>
      <div className={styles.right_wrapper}>
        <div className={styles.total_count_wrapper}>
          <div className={styles.count_title}>총 장비 수 </div>
          <div className={styles.count_number}>289</div>
        </div>
        <div className={styles.updown_count}>
          <div className={styles.updown_title}>UP </div>
          <div className={styles.updown_number}>40</div>
        </div>
        <div className={styles.updown_count}>
          <div className={styles.updown_title}>DOWN </div>
          <div className={styles.updown_number}>249</div>
        </div>
      </div>
    </div>
  );
};

export default ConfigurationStatus;
