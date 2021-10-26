import React from "react";
import PropTypes from "prop-types";
import styles from "./Item.module.scss";
import GaugeChart from "../../../../../components/GaugeChart";
import ColumnChart from "../../../../../components/ColumnChart";

const Item = ({ data, gauge }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item_header}>SERVER #601</div>
      <div className={styles.item_gauge}>
        <GaugeChart data={gauge} />
      </div>
      <div className={styles.item_column}>
        <ColumnChart title={"FILE SYSTEM TOP5"} data={data} />
      </div>
      <div className={styles.item_subtitle}>MEMORY</div>
      <div className={styles.item_content}>
        <div className={styles.item_total}>
          <div className={styles.memory_title}>총용량</div>
          <div className={styles.memory_data}>64GB</div>
        </div>
        <div className={styles.item_usage}>
          <div className={styles.memory_title}>사용량</div>
          <div className={styles.memory_data}>12GB</div>
        </div>
        <div className={styles.item_utilization}>
          <div className={styles.memory_title}>사용률</div>
          <div className={styles.memory_data}>30%</div>
        </div>
      </div>
    </div>
  );
};
Item.propTypes = {
  data: PropTypes.array,
  gauge: PropTypes.number,
};

export default Item;
