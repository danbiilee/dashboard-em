export const LINE_COLORS = {
  utilization: "#2988e6",
  light: {
    chart_title: "#1B2E68", //FILE SYSTEM TOP5 타이틀
    xAxis_line: "#6B7389", // x축 라인 색상
    value: "#1B2E68", // 장비명, % 값 색상
  },
  dark: {
    chart_title: "#B3B4B5",
    xAxis_line: "#414142",
    value: "#9A9B9B",
  },
};

export const defaultSeriesOptions = {
  name: "",
  color: "",
  data: [],
};

export const defaultOptions = {
  chart: {
    type: "column",
    backgroundColor: "transparent",
  },
  title: {
    text: "",
    align: "",
  },
  rules: [
    {
      condition: {
        maxWidth: "100%",
      },
    },
  ],
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
    categories: [],
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    series: {
      color: "#2988E6",
      pointWidth: 15,
      dataLabels: {
        enabled: true,
        format: "<b>{point.y}%</b>",
        crop: false,
        overflow: "none",
        style: {
          textShadow: false,
          textOutline: 0,
        },
      },
    },
  },
  series: [],
};
