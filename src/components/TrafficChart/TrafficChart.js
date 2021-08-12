import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./TrafficChart.module.scss";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { LINE_COLORS, defaultSeriesOptions, defaultOptions } from "./options";

const TrafficChart = ({ data }) => {
  const { GROUP_NAME, LIST } = data;
  const [categories, setCategories] = useState([]);
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState(defaultOptions);

  useEffect(() => {
    const categories = [];
    const rx = [];
    const tx = [];

    for (let equip of LIST) {
      categories.push(Date.parse(equip.DATE));
      rx.push(equip.RX);
      tx.push(equip.TX);
    }

    setCategories(categories);
    setSeries([
      {
        ...defaultSeriesOptions,
        name: "RX",
        color: LINE_COLORS.rx,
        marker: {
          ...defaultSeriesOptions.marker,
          lineColor: LINE_COLORS.rx,
        },
        data: rx,
      },
      {
        ...defaultSeriesOptions,
        name: "TX",
        color: LINE_COLORS.tx,
        marker: {
          ...defaultSeriesOptions.marker,
          lineColor: LINE_COLORS.tx,
        },
        data: tx,
      },
    ]);
  }, [LIST]);

  useEffect(() => {
    if (!categories.length || !series.length) {
      return;
    }

    setOptions((prevState) => ({
      ...prevState,
      xAxis: {
        ...prevState.xAxis,
        categories,
      },
      series,
    }));
  }, [categories, series]);

  return (
    <div className={styles.chart_wrapper}>
      <h3 className={styles.title}>{GROUP_NAME}</h3>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

TrafficChart.propTypes = {
  data: PropTypes.object,
};

export default TrafficChart;
