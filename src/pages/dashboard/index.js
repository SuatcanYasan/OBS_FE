import React, { useEffect, useState } from "react"
import "devextreme/dist/css/dx.light.css"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { withTranslation } from "react-i18next"
import { Col, Container, Row } from "reactstrap"
import ProgressBar from "./components/progress_bar"
import DashboardChart from "./components/Chart"
import TopProduction from "./components/TopProduction"
import CustomBreadcrumbs from "../../components/breadcrumbs"
import { getProgressBarData } from "../../services/dashboard/dashboardService"

const AdminPanel = (props) => {
    const [progressBarData, setProgressBarData] = useState({})
    useEffect(() => {
        getProgressBarData().then((response) => {
            setProgressBarData(response)
        })
    }, [])
    return (
      <React.Fragment>
        <div className="page-content">
            <Container fluid className="dash">
                <div>
                    <CustomBreadcrumbs/>
                </div>
                <div className="mt-3">
                    <div className="d-flex p-3 align-items-center mb-2"
                         style={{ backgroundColor: "#02203e", borderRadius: "6px 6px 0 0" }}>
                        <div className="font-size-18 fw-500">
                            <i className="mdi mdi-chart-bar me-3 text-white"></i>
                           <span className="text-white">{props.t("Overview of All Fields")}</span>
                            <a>
                                <i className="bx bx-info-circle font-size-20 pointer ms-1 text-white"
                                   style={{ verticalAlign: "middle" }} />
                            </a>
                        </div>

                    </div>
                    <ProgressBar detail={progressBarData}/>

                    <Row className="mt-5">
                        <Col lg={12} className="mt-2">
                            <div className="d-flex p-3 align-items-center"
                                 style={{ backgroundColor: "#02203e", borderRadius: "6px 6px 0 0" }}>
                                <div className="font-size-18 fw-500 text-white">
                                    <i className="mdi mdi-chart-bar me-3 text-white"></i>
                                    {props.t("All Fields Alarm Conditions")}
                                    <a>
                                        <i className="bx bx-info-circle font-size-20 pointer ms-1 text-white"
                                           style={{ verticalAlign: "middle" }} />
                                    </a>
                                </div>
                            </div>
                            <div className="bg-white">
                                <Row>
                                    <Col xl={8}>
                                        <DashboardChart />
                                    </Col>
                                    <Col xl={4}>
                                        <TopProduction/>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <div className="p-5">

                    </div>
                </div>
            </Container>
        </div>
    </React.Fragment>)
}

AdminPanel.propTypes = {
    location: PropTypes.any,
    t: PropTypes.any,
}

export default withRouter(
  withTranslation()(AdminPanel)
)