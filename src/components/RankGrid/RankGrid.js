import React, { useState } from "react";
import PropTypes from "prop-types";
import { orderBy } from "@progress/kendo-data-query/dist/npm/array.operators";
import { ProgressBar } from "@progress/kendo-react-progressbars/dist/npm/progressbar/ProgressBar";
import { Grid } from "@progress/kendo-react-grid/dist/npm/Grid";
import { GridColumn as Column } from "@progress/kendo-react-grid/dist/npm/GridColumn";
import styles from "./RankGrid.module.scss";
import "./RankGrid.scss";

const RankGrid = (props) => {
  const responseData = props;
  const [sort, setSort] = useState([{ field: "ProductName", dir: "asc" }]);
  const progressbar = ({ dataItem, className }) => {
    return (
      <td className={className}>
        <div className={styles.utilization}>
          <ProgressBar value={dataItem.UTILIZATION} labelVisible={false} />
        </div>
        <div className={styles.val}>{dataItem.UTILIZATION}</div>
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
    <div className={`rankGrid ${responseData.type === "파일시스템" && "fs"}`}>
      <Grid
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
              className={d.className}
              cell={d.title === "사용률(%)" ? progressbar : tooltipCall}
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
