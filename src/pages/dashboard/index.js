import React from "react"
import "devextreme/dist/css/dx.light.css"
import PropTypes from "prop-types"
import {withRouter} from "react-router-dom"
import {withTranslation} from "react-i18next"
import {Container} from "reactstrap"
import ProgressBar from "./components/progress_bar"
import CustomBreadcrumbs from "../../components/breadcrumbs"
import EducationGrid from "./components/education_grid";

const Dashboard = (props) => {

    return (
      <React.Fragment>
        <div className="page-content">
            <Container fluid className="dash">
                <div>
                    <CustomBreadcrumbs/>
                </div>
                <div className="mt-3">
                    <div className="d-flex p-3 align-items-center mb-2"
                         style={{backgroundColor: "#02203e", borderRadius: "6px 6px 0 0"}}>
                        <div className="font-size-18 fw-500">
                            <i className="mdi mdi-chart-bar me-3 text-white"></i>
                            <span className="text-white">{props.t("Genel Özet")}</span>
                            <a>
                                <i className="bx bx-info-circle font-size-20 pointer ms-1 text-white"
                                   style={{verticalAlign: "middle"}}/>
                            </a>
                        </div>

                    </div>
                    <ProgressBar/>
                    <div className="d-flex p-3 align-items-center mb-2 mt-2"
                         style={{backgroundColor: "#02203e", borderRadius: "6px 6px 0 0"}}>
                        <div className="font-size-18 fw-500">
                            <i className="mdi mdi-chart-bar me-3 text-white"></i>
                            <span className="text-white">{props.t("Ders Listesi")}</span>
                            <a>
                                <i className="bx bx-info-circle font-size-20 pointer ms-1 text-white"
                                   style={{verticalAlign: "middle"}}/>
                            </a>
                        </div>

                    </div>
                    <EducationGrid/>
                    <div className="p-5">

                    </div>
                </div>
            </Container>
        </div>
      </React.Fragment>)
}

Dashboard.propTypes = {
    location: PropTypes.any,
    t: PropTypes.any,
}

export default withRouter(
    withTranslation()(Dashboard)
)