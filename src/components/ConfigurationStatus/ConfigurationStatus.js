import React from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../../context/Theme";
import SERVER_LIGHT from "../../assets/images/server-icon-white.png";
import SERVER_DARK from "../../assets/images/server-icon-dark.png";
import NETWORK_LIGHT from "../../assets/images/network-icon-white.png";
import NETWORK_DARK from "../../assets/images/network-icon-dark.png";
import styles from "./ConfigurationStatus.module.scss";

const ConfigurationStatus = () => {
  const { pathname } = useLocation();
  const [themeMode] = useTheme();
  const page_path = pathname === "/" ? "SERVER" : "NETWORK";
  const image = {
    SERVER_l: SERVER_LIGHT,
    SERVER_d: SERVER_DARK,
    NETWORK_l: NETWORK_LIGHT,
    NETWORK_d: NETWORK_DARK,
  };
  const mode_style = image[page_path + "_" + themeMode];

  return (
    <div className={styles.wrapper}>
      <div className={styles.left_wrapper}>
        <img className={styles.image} src={mode_style} alt="image" />
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
