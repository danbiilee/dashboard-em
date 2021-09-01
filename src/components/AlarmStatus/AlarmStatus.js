import React from "react";
import styles from "./AlarmStatus.module.scss";

const AlarmStatus = () => {
  return (
    <div className={styles.alarmStatus_wrapper}>
      <div className={styles.critical_wrapper}>
        <div className={styles.image}></div>
        <div className={styles.count}>0</div>
        <div className={styles.subTitle}>심각</div>
      </div>
      <div className={styles.major_wrapper}>
        <div className={styles.image}></div>
        <div className={styles.count}>0</div>
        <div className={styles.subTitle}>경고</div>
      </div>
      <div className={styles.minor_wrapper}>
        <div className={styles.image}></div>
        <div className={styles.count}>0</div>
        <div className={styles.subTitle}>주의</div>
      </div>
    </div>
  );
};

export default AlarmStatus;
