export const borderOptions = {
  chart: {
    type: "gauge",
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: null,
    backgroundColor: "rgba(0,0,0,0)",
  },
  title: {
    text: null,
  },
  pane: {
    startAngle: -136,
    endAngle: 136,
    background: {
      backgroundColor: "transparent",
      borderWidth: 0,
    },
    center: ["50%", "55%"],
    size: "100%",
  },
  plotOptions: {
    gauge: {
      dial: {
        radius: "115%",
        borderWidth: 2,
        baseWidth: 20,
        baseLength: "55%",
        rearLength: "-55%",
      },
      pivot: {
        radius: 0,
      },
    },
    borderWidth: 0,
  },
  credits: {
    enabled: false,
  },
  yAxis: {
    labels: {
      enabled: false,
    },
    lineWidth: 0,
    max: 100,
    min: 0,
    minorTickWidth: 0,
    tickWidth: 0,
    title: {
      enabled: false,
    },
    plotBands: {
      from: 0,
      to: 100,
      color: "",
      thickness: 2,
    },
  },
  series: [
    {
      name: "CPU",
      data: 100,
      dataLabels: {
        enabled: true,
      },
    },
  ],
};

export const defaultOptions = {
  chart: {
    type: "gauge",
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: null,
    plotShadow: false,
    shadow: false,
    backgroundColor: "transparent",
    marginLeft: 0,
    marginRight: 0,
    borderWidth: 0,
  },
  title: {
    text: null,
  },
  pane: {
    startAngle: -136,
    endAngle: 136,
    background: {
      backgroundColor: "transparent",
      borderWidth: 0,
      innerRadius: "100%",
      outerRadius: "100%",
      shape: "arc",
    },
    center: ["50%", "55%"],
    size: "100%",
  },
  plotOptions: {
    gauge: {
      dial: {
        radius: "115%",
        borderWidth: 2,
        baseWidth: 20,
        baseLength: "55%",
        rearLength: "-55%",
      },
      pivot: {
        radius: 0,
      },
    },
    borderWidth: 0,
  },
  tooltip: {
    enabled: true,
  },
  credits: {
    enabled: false,
  },
  yAxis: {
    labels: {
      enabled: false,
    },
    lineWidth: 0,
    max: 100,
    min: 0,
    minorTickInterval: "auto",
    minorTickWidth: 1,
    minorTickPosition: "outside",
    tickWidth: 1,
    tickPosition: "outside",
    tickPixelInterval: 40,
    title: {
      enabled: false,
    },
    plotBands: [
      {
        from: 0,
        to: 30,
        thickness: 15,
        outerRadius: "95%",
        color: {
          linearGradient: {
            x1: 0.5,
            x2: 0,
            y1: 1,
            y2: 0,
          },
          stops: [
            [0, "#3493e2"],
            [1, "#3abeb4"],
          ],
        },
      },
      {
        from: 29,
        to: 60,
        thickness: 15,
        outerRadius: "95%",
        color: {
          linearGradient: {
            x1: 0,
            x2: 1,
            y1: 1,
            y2: 0,
          },
          stops: [
            [0, "#3abeb4"],
            [1, "#63c22e"],
          ],
        },
      },
      {
        from: 59,
        to: 90,
        thickness: 15,
        outerRadius: "95%",
        borderRadius: "1%",
        color: {
          linearGradient: {
            x1: 0,
            x2: 1,
            y1: 0,
            y2: 0.9,
          },
          stops: [
            [0, "#63c22e"],
            [1, "#ec8b1c"],
          ],
        },
      },
      {
        from: 89,
        to: 100,
        thickness: 15,
        outerRadius: "95%",
        color: {
          linearGradient: {
            x1: 1,
            x2: 0.5,
            y1: 0,
            y2: 1,
          },
          stops: [
            [0, "#ec8b1c"],
            [1, "#ec8b1c"],
          ],
        },
      },
    ],
  },
  series: [
    {
      name: "CPU",
      data: [],
      dataLabels: {
        style: {
          width: "15rem",
        },
        enabled: true,
        shadow: "none",
        align: "center",
        borderColor: "transparent",
        y: -20,
        formatter: function () {
          const unit = [25, 33, 38];
          const length = String(this.y).length - 1;
          return (
            `<div>` +
            `<div id="cpuValue" x="${unit[length]}">${this.y}%</div><br><br>` +
            `<div id="cpuName" x="${unit[length] - 1}">CPU</div>` +
            `</div>`
          );
        },
      },
      tooltip: {
        enabled: false,
      },
    },
  ],
};
