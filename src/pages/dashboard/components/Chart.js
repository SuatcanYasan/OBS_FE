import React from "react"
import "devextreme/dist/css/dx.light.css"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { withTranslation } from "react-i18next"
import { Label } from "reactstrap"
import { Chart } from "devextreme-react"
import { CommonSeriesSettings, Export, Format, Legend, Series, ValueAxis } from "devextreme-react/chart"

const dataSource = [
    {field: "Haberleşme", success: 3, error: 2,},
    {field: "Şebeke", success: 4, error: 1,},
    {field: "AG", success: 5, error: 0,},
    {field: "Inverter", success: 5, error: 0,},
];

const DashboardChart = (props) => {
    return (
        <React.Fragment>
            <div>
                <Chart id="chart"
                       dataSource={dataSource}
                >
                    <CommonSeriesSettings
                        argumentField="field"
                        type="bar"
                        hoverMode="allArgumentPoints"
                    >
                        <Label visible={true}>
                            <Format type="fixedPoint" precision={0} />
                        </Label>
                    </CommonSeriesSettings>
                    <Series
                        argumentField="field"
                        valueField="success"
                        name={props.t("Successful")}
                        color={"#4FD123"}
                    />
                    <Series
                        valueField="error"
                        name={props.t("Faulty")}
                        color={"#d40028"}
                    />
                    <ValueAxis valueType="numeric" allowDecimals={false} grid={{visible: false}}/>
                    <Legend verticalAlignment="bottom" horizontalAlignment="center"></Legend>
                    <Export enabled={true} />
                </Chart>
            </div>
        </React.Fragment>
    )
}

DashboardChart.propTypes = {
    location: PropTypes.any,
    t: PropTypes.any,
}

export default withRouter(
    withTranslation()(DashboardChart)
)