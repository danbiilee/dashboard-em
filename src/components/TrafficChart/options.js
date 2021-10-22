export const defaultSeriesOptions = {
  name: "",
  color: "",
  marker: {
    enabled: false,
    symbol: "circle",
    states: {
      hover: {
        radius: 3,
      },
    },
  },
  data: [],
};

export const defaultOptions = {
  chart: {
    type: "area",
    margin: [10, 8, 23, 35],
    backgroundColor: "transparent",
  },
  credits: {
    enabled: false,
  },
  title: {
    text: undefined,
  },
  yAxis: {
    title: {
      text: undefined,
    },
    labels: {
      x: -5,
      y: -1,
      style: {
        color: "",
        fontWeight: "normal",
        fontSize: "0.7rem",
      },
      formatter: function () {
        return this.value + "MB";
      },
    },
  },
  xAxis: {
    type: "datetime",
    categories: [],
    min: 0.5,
    max: 7.5,
    labels: {
      enabled: true,
      y: 11,
      style: {
        color: "",
        fontWeight: "normal",
        fontSize: "0.7rem",
      },
      format: "{value:%H:%M}",
    },
    tickLength: 0,
    tickInterval: 1,
  },
  tooltip: {
    shared: true,
    style: {
      fontWeight: "normal",
    },
    xDateFormat: "%Y.%m.%d %H:%M",
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    series: {
      fillOpacity: 0.3,
    },
  },
  series: [],
};
