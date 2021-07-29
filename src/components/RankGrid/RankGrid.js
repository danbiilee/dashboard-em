import React, { useState } from "react";
import PropTypes from "prop-types";
import { orderBy } from "@progress/kendo-data-query";
import { ProgressBar } from "@progress/kendo-react-progressbars";
// import "@progress/kendo-theme-default/dist/all.scss";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import styles from "./RankGrid.module.scss";
import "./RankGrid.scss";

const RankGrid = (props) => {
  const responseData = props;
  const [sort, setSort] = useState([{ field: "ProductName", dir: "asc" }]);
  const progressbar = ({ dataItem }) => {
    return (
      <td className={styles.progress_wrapper}>
        <div className={styles.utilization}>
          <ProgressBar
            className={styles.progressbar}
            value={dataItem.UTILIZATION}
            labelVisible={false}
          />
        </div>
        <div className={styles.val}>{dataItem.UTILIZATION}</div>
      </td>
    );
  };

  return (
    <div id="rankGrid" className={styles.grid_wrapper}>
      <Grid
        className={styles.grid}
        data={orderBy(responseData.data, sort)}
        sortable
        sort={sort}
        onSortChange={(e) => {
          setSort(e.sort);
        }}
        reorderable
        resizable
      >
        {responseData.columns.map((d, i) => {
          return (
            <Column
              key={{ i }}
              field={d.field}
              title={d.title}
              width={d.width}
              cell={d.title === "사용률(%)" ? progressbar : ""}
              className={d.className}
            />
          );
        })}
      </Grid>
    </div>
  );
};

RankGrid.propTypes = {
  dataItem: PropTypes.object,
};
export default RankGrid;
