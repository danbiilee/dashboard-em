import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts";
import highchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";
import solidGauge from "highcharts/modules/solid-gauge";
import styles from "./GaugeChart.module.scss";
import "./GaugeChart.scss";
import { useTheme } from "../../context/Theme";
import { borderOptions, defaultOptions } from "./options";
import { produce } from "immer";
import { getCSSValue } from "../../utils";

highchartsMore(Highcharts);
solidGauge(Highcharts);

const GaugeChart = (props) => {
  // const [value, setValue] = useState(0);
  const [options, setOptions] = useState(defaultOptions);
  const [border_options, setBorderOptions] = useState(borderOptions);
  const themeMode = useTheme();

  // useEffect(() => {
  //   setInterval(() => {
  //     setValue(Math.ceil(Math.random() * 100));
  //   }, 1000);
  // }, []);
  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      series: [
        {
          ...prevState.series[0],
          data: [props.data],
          // data: [value],
        },
      ],
    }));
  }, [props.data]);

  useEffect(() => {
    setBorderOptions(
      produce((draft) => {
        draft.yAxis.plotBands.color = getCSSValue("--gauge-yAxis");
      })
    );

    setOptions((prevState) => ({
      ...prevState,
      plotOptions: {
        gauge: {
          dial: {
            ...prevState.plotOptions.gauge.dial,
            backgroundColor: getCSSValue("--gauge-dial-pointer"),
            borderColor: getCSSValue("--gauge-dial-pointer-border"),
          },
        },
      },
      yAxis: {
        ...prevState.yAxis,
        minorTickColor: getCSSValue("--gauge-yAxis-tick"),
        tickColor: getCSSValue("--gauge-yAxis-tick"),
      },
    }));
  }, [themeMode]);

  return (
    <div id="gaugeChart" className={styles.wrapper}>
      <HighchartsReact
        containerProps={{
          style: {
            width: "100%",
            height: "100%",
          },
        }}
        highcharts={Highcharts}
        options={options}
      />
      <HighchartsReact
        containerProps={{
          style: {
            position: "absolute",
            width: "63%",
            height: "63%",
            left: "19%",
            top: "21%",
          },
        }}
        highcharts={Highcharts}
        options={border_options}
      />
    </div>
  );
};

GaugeChart.propTypes = {
  data: PropTypes.number,
};

export default GaugeChart;
