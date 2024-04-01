import React from "react"
import ReactEcharts from "echarts-for-react"
import getChartColorsArray from "./ChartsDynamicColor"

const Pie = ({dataColors}) => {
  const PieEChartColors = getChartColorsArray(dataColors);
  const options = {
    toolbox: {
      show: false,
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "left",
      top: "center",
      data: ["Inv1", "Inv2", "Inv3", "Inv4", "Inv5"],
      textStyle: {
        color: ["#8791af"],
      },
    },
    color: PieEChartColors,
    series: [
      {
        name: "Üretilen Güç",
        type: "pie",
        radius: "55%",
        center: ["50%", "50%"],
        data: [
          { value: 335, name: "Inv1" },
          { value: 310, name: "Inv2" },
          { value: 234, name: "Inv3" },
          { value: 135, name: "Inv4" },
          { value: 1548, name: "Inv5" },
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <ReactEcharts className="mt-2" style={{ height: "350px" }} option={options} />
    </React.Fragment>
  );
};
export default Pie;
