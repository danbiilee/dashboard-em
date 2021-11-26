import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import HighCharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import styles from "./ColumnChart.module.scss";
import "./ColumnChart.scss";
import { useTheme } from "../../context/Theme";
import { defaultSeriesOptions, defaultOptions } from "./options";
import { produce } from "immer";
import { getCSSValue } from "../../utils";

const ColumnChart = ({ title, data }) => {
  const { LIST } = data;
  const [categories, setCategories] = useState([]);
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState(defaultOptions);
  const themeMode = useTheme();

  useEffect(() => {
    const formatData = data.reduce(
      (acc, cur) => {
        acc.categories.push(cur.GROUP_NAME);
        acc.utilization.push(cur.DATA);
        return acc;
      },
      { categories: [], utilization: [] }
    );

    setCategories(formatData.categories);
    setSeries([
      // 혹시라도.... 디폴트 100% 필요시
      // {
      //   enableMouseTracking: false,
      //   showInLegend: false,
      //   grouping: false,
      //   enabled: false,
      //   color: "#E2E6ED",
      //   data: [100, 100, 100, 100, 100],
      //   dataLabels: {
      //     enabled: false,
      //   },
      // },
      {
        ...defaultSeriesOptions,
        name: "사용률",
        color: getCSSValue(`--bar-series`),
        data: formatData.utilization,
      },
    ]);
  }, [LIST, data]);

  useEffect(() => {
    if (!categories.length || !series.length) {
      return;
    }
    setOptions(
      produce((draft) => {
        draft.title.text = title;
        draft.xAxis.categories = categories;
        draft.series = series;
      })
    );
  }, [categories, series, title]);

  useEffect(() => {
    setOptions(
      produce((draft) => {
        draft.title.style.color = getCSSValue(`--bar-title`);
        draft.xAxis.lineColor = getCSSValue(`--bar-xAxis`);
        draft.xAxis.labels.style.color = getCSSValue(`--bar-label`);
        draft.plotOptions.series.dataLabels.color = getCSSValue(`--bar-label`);
      })
    );
  }, [themeMode]);

  return (
    <div id="ColumnChart" className={styles.wrapper}>
      <HighchartsReact
        containerProps={{
          style: { height: "100%", width: "100%" },
        }}
        highcharts={HighCharts}
        options={options}
      />
    </div>
  );
};

ColumnChart.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
};

export default ColumnChart;
