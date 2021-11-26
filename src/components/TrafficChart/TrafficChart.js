import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./TrafficChart.module.scss";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { defaultSeriesOptions, defaultOptions } from "./options";
import { useTheme } from "../../context/Theme";
import { produce } from "immer";
import { getCSSValue } from "../../utils";

const TrafficChart = ({ data }) => {
  const { RESOURCE_NAME, LIST } = data;
  const [categories, setCategories] = useState([]);
  const [series, setSeries] = useState([
    { ...defaultSeriesOptions, name: "RX" },
    { ...defaultSeriesOptions, name: "TX" },
  ]);
  const [options, setOptions] = useState(defaultOptions);
  const themeMode = useTheme();

  const makeSeriesColorChanged = useCallback((draft, key) => {
    const series = draft.find((item) => item.name === key.toUpperCase());
    series.color = getCSSValue(`--traffic-area-${key}`);
    series.marker.lineColor = getCSSValue(`--traffic-line-${key}`);
    return series;
  }, []);

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
    setSeries(
      produce((draft) => {
        const rxSeries = makeSeriesColorChanged(draft, "rx");
        const txSeries = makeSeriesColorChanged(draft, "tx");
        rxSeries.data = rx;
        txSeries.data = tx;
      })
    );
    setOptions(
      produce((draft) => {
        const labelColor = getCSSValue("--traffic-label");
        draft.xAxis.labels.style.color = labelColor;
        draft.yAxis.labels.style.color = labelColor;
      })
    );
  }, [LIST, makeSeriesColorChanged]);

  useEffect(() => {
    if (!categories.length || !series.length) {
      return;
    }

    setOptions(
      produce((draft) => {
        draft.xAxis.categories = categories;
        draft.series = series;
      })
    );
  }, [categories, series]);

  useEffect(() => {
    setOptions(
      produce((draft) => {
        draft.xAxis.lineColor = getCSSValue("--traffic-xAxis");
        draft.yAxis.gridLineColor = getCSSValue("--traffic-yAxis-grid");
      })
    );
    setSeries(
      produce((draft) => {
        makeSeriesColorChanged(draft, "rx");
        makeSeriesColorChanged(draft, "tx");
      })
    );
  }, [themeMode, makeSeriesColorChanged]);

  return (
    <div className={styles.chart_wrapper}>
      <h3 className={styles.title}>{RESOURCE_NAME}</h3>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

TrafficChart.propTypes = {
  data: PropTypes.object,
};

export default TrafficChart;
