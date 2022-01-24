import React, { useState } from "react";
import { orderBy } from "@progress/kendo-data-query/dist/npm/array.operators";
import { Grid } from "@progress/kendo-react-grid/dist/npm/Grid";
import { GridColumn as Column } from "@progress/kendo-react-grid/dist/npm/GridColumn";
import styles from "./AlarmGrid.module.scss";
import "./AlarmGrid.scss";
import PropTypes from "prop-types";
import Minor from "../../assets/images/event-minor.png";
import Major from "../../assets/images/event-major.png";
import Critical from "../../assets/images/event-critical.png";

const AlarmGrid = (props) => {
  const responseData = props;
  const [sort, setSort] = useState([{ field: "ProductName", dir: "asc" }]);
  const severity = ({ dataItem, className }) => {
    const value = dataItem.ALARMSEVERITY;
    let stat;
    switch (value) {
      case "주의":
        stat = Minor;
        break;
      case "경고":
        stat = Major;
        break;
      default:
        stat = Critical;
        break;
    }
    return (
      <td className={className}>
        <img className={styles.severity_img} src={stat} alt="alarm" />
      </td>
    );
  };
  const tooltipCall = (props) => {
    const formatData = props;
    return (
      <td
        title={formatData.dataItem[formatData.field]}
        className={formatData.className}
      >
        {formatData.dataItem[formatData.field]}
      </td>
    );
  };
  return (
    <div className={`alarmGrid ${styles.alarmGrid_wrapper}`}>
      <Grid
        className={styles.alarmGrid}
        data={orderBy(responseData.data, sort)}
        sortable
        sort={sort}
        onSortChange={(e) => {
          setSort(e.sort);
        }}
      >
        {responseData.columns.map((d, i) => {
          return (
            <Column
              key={{ i }}
              field={d.field}
              title={d.title}
              cell={d.title === "등급" ? severity : tooltipCall}
              className={d.className}
            />
          );
        })}
      </Grid>
    </div>
  );
};

AlarmGrid.propTypes = {
  dataItem: PropTypes.object,
};
export default AlarmGrid;
