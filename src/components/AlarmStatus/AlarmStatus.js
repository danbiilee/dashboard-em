import React from "react";
import Minor from "../../assets/images/icon-minor.png";
import Major from "../../assets/images/icon-major.png";
import Critical from "../../assets/images/icon-critical.png";
import styles from "./AlarmStatus.module.scss";

const AlarmStatus = () => {
  return (
    <div className={styles.alarmStatus_wrapper}>
      <div className={styles.critical_wrapper}>
        <img className={styles.image} src={Critical} alt="statusCritical" />
        <div className={styles.count}>0</div>
        <div className={styles.subTitle}>심각</div>
      </div>
      <div className={styles.major_wrapper}>
        <img className={styles.image} src={Major} alt="statusMajor" />
        <div className={styles.count}>0</div>
        <div className={styles.subTitle}>경고</div>
      </div>
      <div className={styles.minor_wrapper}>
        <img className={styles.image} src={Minor} alt="statusMinor" />
        <div className={styles.count}>0</div>
        <div className={styles.subTitle}>주의</div>
      </div>
    </div>
  );
};

export default AlarmStatus;
