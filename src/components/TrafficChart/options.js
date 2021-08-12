export const LINE_COLORS = {
  rx: "#02bcd5",
  tx: "#506cf6",
  light: {
    xAxis_line: "#ccd6eb",
    yAxis_grinLine: "#e6e6e6",
  },
  dark: {
    xAxis_line: "#4c4c4c",
    yAxis_grinLine: "#4c4c4c",
  },
};

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
    height: "28.3%",
    margin: [10, 8, 20, 35],
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
      style: {
        color: "#575b5d",
        fontWeight: "normal",
        fontSize: "7px",
      },
      formatter: function () {
        return this.value + "MB";
      },
    },
  },
  //🌜
  xAxis: {
    type: "datetime",
    categories: [], // 끝에서부터 시작 안함: min + max
    min: 0.5,
    max: 7.5, // categories.length - 1.5
    labels: {
      enabled: true,
      y: 12,
      style: {
        color: "#575B5D",
        fontWeight: "normal",
        fontSize: "7px",
      },
      format: "{value:%H:%M}",
      // categories 옵션 안쓸 경우
      // formatter: function () {
      //   return Highcharts.dateFormat("%H:%M", categories[this.value]);
      // },
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
  //🌜
  series: [],
};

// 참고 -> 나중에 지울 것!
// const categories = [
//   Date.parse("2021-08-11 09:00:00 GMT"),
//   Date.parse("2021-08-11 10:00:00 GMT"),
//   Date.parse("2021-08-11 11:00:00 GMT"),
//   Date.parse("2021-08-11 12:00:00 GMT"),
//   Date.parse("2021-08-11 13:00:00 GMT"),
//   Date.parse("2021-08-11 14:00:00 GMT"),
//   Date.parse("2021-08-11 15:00:00 GMT"),
//   Date.parse("2021-08-11 16:00:00 GMT"),
//   Date.parse("2021-08-11 17:00:00 GMT"),
// ];
//
// const series = [
//   {
//     ...defaultSeriesOptions,
//     name: "RX",
//     color: "#02bcd5",
//     marker: { ...defaultSeriesOptions.marker, lineColor: "#02bcd5" },
//     data: [400, 500, 300, 510, 630, 590, 650, 620, 550],
//   },
//   {
//     ...defaultSeriesOptions,
//     name: "TX",
//     color: "#506cf6",
//     marker: { ...defaultSeriesOptions.marker, lineColor: "#506cf6" },
//     data: [200, 300, 100, 310, 330, 290, 350, 320, 250],
//   },
// ];
