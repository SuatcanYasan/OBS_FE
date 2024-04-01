import React, { useEffect, useRef, useState } from "react"
import ReactEcharts from "echarts-for-react"
import { Button, ButtonGroup } from "reactstrap"
import { getLineChartDailyDataService } from "../../../services/area/areaService"

const DashedLine = (props) => {
  const { progressbarFilter } = props
  const chartRef = useRef(null)
  const [period, setPeriod] = useState("dailydata")
  const [selectedType, setSelectedType] = useState("active_p")
  const [data, setData] = useState([])
  let params = new URLSearchParams(location.search)
  useEffect(() => {
    getLineChartDailyDataService(params.get("id"), progressbarFilter, period).then((response) => {
      chartRef.current?.getEchartsInstance().setOption({
        title: {
          text: ""
        },
        tooltip: {
          trigger: "axis"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: response.period
        },
        yAxis: {
          type: "value"
        },
        series: response.data[selectedType],
        legend: {
          data: response.data[selectedType]?.map((item) => item.name)
        }
      }, true)
    })
  }, [selectedType, progressbarFilter, period])
  const options = {}

  return (
    <React.Fragment>
      <div className="pe-2 ps-2 pt-1 pb-1 w-100">
        <ButtonGroup>
          <Button color="warning" onClick={() => setPeriod("dailydata")} disabled={period == "dailydata"}>Günlük</Button>
          <Button color="warning" onClick={() => setPeriod("weeklydata")} disabled={period == "weeklydata"}>Haftalık</Button>
          <Button color="warning" onClick={() => setPeriod("monthlydata")} disabled={period == "monthlydata"}>Aylık</Button>
          <Button color="warning" onClick={() => setPeriod("yearlydata")} disabled={period == "yearlydata"}>Yıllık</Button>
        </ButtonGroup>
        <br />
        <ButtonGroup className="mt-1">
          <Button onClick={() => setSelectedType("active_p")} disabled={selectedType == "active_p"}>Active P</Button>
          <Button onClick={() => setSelectedType("reactive_p")} disabled={selectedType == "reactive_p"}>Reactive P</Button>
          {!progressbarFilter.isMain && (
            <React.Fragment>
              <Button onClick={() => setSelectedType("max_v")} disabled={selectedType == "max_v"}>Max_V</Button>
              <Button onClick={() => setSelectedType("min_v")} disabled={selectedType == "min_v"}>Min_V</Button>
              <Button onClick={() => setSelectedType("max_i")} disabled={selectedType == "max_i"}>Max_I</Button>
              <Button onClick={() => setSelectedType("min_i")} disabled={selectedType == "min_i"}>Min_I</Button>
              <Button onClick={() => setSelectedType("avg_v")} disabled={selectedType == "avg_v"}>AVG_V</Button>
              <Button onClick={() => setSelectedType("avg_i")} disabled={selectedType == "avg_i"}>AVG_I</Button>
            </React.Fragment>
          )}
        </ButtonGroup>
      </div>
      <ReactEcharts ref={chartRef} className="mt-2" style={{ height: "350px" }} option={options} />
    </React.Fragment>
  )
}
export default DashedLine
