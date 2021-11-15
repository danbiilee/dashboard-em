import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import HighCharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import styles from "./ColumnChart.module.scss";
import "./ColumnChart.scss";
import { useTheme } from "../../context/Theme";
import { LINE_COLORS, defaultSeriesOptions, defaultOptions } from "./options";

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
        color: LINE_COLORS.utilization,
        data: formatData.utilization,
      },
    ]);
  }, [LIST, data]);

  useEffect(() => {
    if (!categories.length || !series.length) {
      return;
    }
    setOptions((prevState) => ({
      ...prevState,
      title: {
        text: title,
        align: "center",
      },
      xAxis: {
        categories,
      },
      series,
    }));
  }, [categories, series, title]);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      xAxis: {
        ...prevState.xAxis,
        lineColor: LINE_COLORS[themeMode].xAxis_line,
      },
      title: {
        ...prevState.title,
        style: {
          color: LINE_COLORS[themeMode].chart_title,
        },
      },
      plotOptions: {
        series: {
          dataLabels: {
            ...prevState.plotOptions.series.dataLabels,
            color: LINE_COLORS[themeMode].value,
          },
        },
      },
    }));
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
