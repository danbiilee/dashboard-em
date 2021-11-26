export const defaultSeriesOptions = {
  name: "",
  color: "",
  data: [],
};

export const defaultOptions = {
  chart: {
    type: "column",
    backgroundColor: "transparent",
    margin: [53, 8, 23, 13],
    style: {
      fontFamily: "KoPub Dotum",
    },
  },
  title: {
    text: "",
    align: "center",
    style: {
      fontSize: "1.4rem",
    },
  },
  credits: {
    enabled: false,
  },
  yAxis: {
    title: {
      text: undefined,
    },
    labels: {
      enabled: false,
    },
    min: 0,
    max: 100,
    gridLineColor: "transparent",
  },
  xAxis: {
    labels: {
      y: 15,
      style: {
        color: "",
      },
    },
    categories: [],
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    series: {
      pointWidth: 15,
      dataLabels: {
        enabled: true,
        format: "<b>{point.y}%</b>",
        crop: false,
        overflow: "none",
        y: 3,
        style: {
          textShadow: false,
          textOutline: 0,
        },
      },
    },
  },
  series: [],
};
