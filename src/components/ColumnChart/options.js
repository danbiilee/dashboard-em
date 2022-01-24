export const defaultSeriesOptions = {
  name: "",
  color: "",
  data: [],
};

export const defaultOptions = {
  chart: {
    type: "bar",
    backgroundColor: "transparent",
    margin: [30, -10, 10, 45],
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
    max: 101,
    gridLineColor: "transparent",
  },
  xAxis: {
    labels: {
      enabled: true,
      x: -10,
      y: 2,
      useHTML: true,
      style: {
        marginLeft: "1.3rem",
        fontSize: "1.0rem",
        maxWidth: "3rem",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
      },
    },
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    series: {
      pointWidth: 9,
      dataLabels: {
        enabled: true,
        y: -3,
        format: "<b>{point.y}%</b>",
        crop: false,
        overflow: "none",
        style: {
          textShadow: false,
          textOutline: 0,
          fontSize: "1.1rem",
        },
      },
    },
  },
  series: [],
};
