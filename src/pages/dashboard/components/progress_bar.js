import React, { useEffect } from "react"
import {Col, Row} from "reactstrap";
import PropTypes from "prop-types";
import {withTranslation} from "react-i18next"
import {withRouter} from "react-router-dom";
import Battery from "../../../assets/images/battery.svg"
import YellowElectro from "../../../assets/images/yellow-electro.svg"
import GreenElectro from "../../../assets/images/green-electro.svg"
import RedElectro from "../../../assets/images/red-electro.svg"

const formatNumber = (number) => {
    if (number === null || isNaN(number)) return '';

    return Number(number).toLocaleString('en-US', { maximumFractionDigits: 3 });
  };
const ProgressBar = props => {
    const { detail } = props
    return (
        <React.Fragment>
            <Row>
                <Col xl={3}>
                    <div className="d-flex h-100 shadow p-4 rounded-2 capasity"
                         style={{ backgroundColor: "#ffffff" }}>
                        <div className="d-flex gap-3 w-100">
                            <div className="d-flex align-items-center">
                                <div className="avatar-xs me-2">
                                    <span
                                      className="avatar-title rounded-1 bg-soft font-size-14"
                                      style={{ backgroundColor: "rgba(83,166,237,0.56)" }}>
                                        <img src={Battery} alt="battery" height={32} />
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center w-100" style={{ gap: "1rem"}}>
                                <div className="d-flex flex-column text-center" style={{ gap: "1px" }}>
                                    <div
                                      className="d-flex flex-column overflow-visible fw-600 font-size-22 mt-1 monserrat text-center">
                                        {formatNumber(detail?.daily_earnings)} {detail?.production_revenue_currency}
                                    </div>
                                    <div className="font-size-14 text-muted "
                                         style={{ position: "relative", bottom: "0.3rem" }}>
                                        {props.t("Daily Earnings")}
                                    </div>
                                </div>
                                <div className="d-flex flex-column text-center" style={{ gap: "1px" }}>
                                    <div
                                      className="d-flex flex-column overflow-visible fw-600 font-size-22 mt-1 monserrat text-center">
                                        {formatNumber(detail?.total_earnings)} {detail?.production_revenue_currency}
                                    </div>
                                    <div className="font-size-14 text-muted"
                                         style={{ position: "relative", bottom: "0.3rem" }}>
                                        {props.t("Total Earnings")}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Col>
                <Col xl={3}>
                    <div className="d-flex h-100 shadow p-4 rounded-2 power"
                         style={{ backgroundColor: "#ffffff" }}>
                        <div className="d-flex gap-3 w-100">
                            <div className="d-flex align-items-center">
                                <div className="avatar-xs me-2">
                                    <span
                                      className="avatar-title rounded-1 bg-soft font-size-14"
                                      style={{ backgroundColor: "rgba(238,180,86,0.56)"}}>
                                        <img src={YellowElectro} alt="battery" height={32} />
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center w-100"
                                 style={{ gap: "1rem" }}>
                                <div className="d-flex flex-column text-center" style={{ gap: "1px" }}>
                                    <div
                                      className="d-flex flex-column overflow-visible fw-600 font-size-22 mt-1 monserrat text-center">
                                        {formatNumber(detail?.ANLIK_GUC_URETIMI)} {detail?.ANLIK_GUC_URETIMI_UNIT}
                                    </div>
                                    <div className="font-size-14 text-muted"
                                         style={{ position: "relative", bottom: "0.3rem" }}>
                                        {props.t("Instantaneous Power Generation")}
                                    </div>
                                </div>
                                <div className="d-flex flex-column text-center" style={{ gap: "1px" }}>
                                    <div
                                      className="d-flex flex-column overflow-visible fw-600 font-size-22 mt-1 monserrat text-center">
                                        {formatNumber(detail?.TOPLAM_GUC_URETIMI)} {detail?.TOPLAM_GUC_URETIMI_UNIT}
                                    </div>
                                    <div className="font-size-14 text-muted"
                                         style={{ position: "relative", bottom: "0.3rem" }}>
                                        {props.t("Total Power Generation")}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Col>
                <Col xl={3}>
                <div className="d-flex h-100 shadow p-4 rounded-2 powerComp"
                         style={{ backgroundColor: "#ffffff" }}>
                        <div className="d-flex gap-3 w-100">
                            <div className="d-flex align-items-center">
                                <div className="avatar-xs me-2">
                                    <span
                                      className="avatar-title rounded-1 bg-soft font-size-14"
                                      style={{ backgroundColor: "#ff7070"}}>
                                        <img src={RedElectro} alt="battery" height={32} />
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center w-100"
                                 style={{ gap: "1rem" }}>
                                <div className="d-flex flex-column text-center" style={{ gap: "1px" }}>
                                    <div
                                      className="d-flex flex-column overflow-visible fw-600 font-size-22 mt-1 monserrat text-center">
                                        {formatNumber(detail?.ANLIK_GUC_TUKETIMI)} {detail?.ANLIK_GUC_TUKETIMI_UNIT}
                                    </div>
                                    <div className="font-size-14 text-muted"
                                         style={{ position: "relative", bottom: "0.3rem" }}>
                                        {props.t("Instantaneous Power Consumption")}
                                    </div>
                                </div>
                                <div className="d-flex flex-column text-center" style={{ gap: "1px" }}>
                                    <div
                                      className="d-flex flex-column overflow-visible fw-600 font-size-22 mt-1 monserrat text-center">
                                        {formatNumber(detail?.TOPLAM_GUC_TUKETIMI)} {detail?.TOPLAM_GUC_TUKETIMI_UNIT}
                                    </div>
                                    <div className="font-size-14 text-muted"
                                         style={{ position: "relative", bottom: "0.3rem" }}>
                                        {props.t("Total Power Consumption")}
                                    </div>
                                </div>
                            </div>
                        </div>

                </div>
                </Col>
                <Col xl={3}>
                <div className="d-flex h-100 shadow p-4 rounded-2 production"
                         style={{ backgroundColor: "#ffffff" }}>
                        <div className="d-flex gap-3 w-100">
                            <div className="d-flex align-items-center">
                                <div className="avatar-xs me-2">
                                    <span
                                      className="avatar-title rounded-1 bg-soft font-size-14"
                                      style={{ backgroundColor: "rgba(80,209,35,0.56)"}}>
                                        <img src={GreenElectro} alt="battery" height={32} />
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center w-100"
                                 style={{ gap: "1rem" }}>
                                <div className="d-flex flex-column text-center" style={{ gap: "1px" }}>
                                    <div
                                      className="d-flex flex-column overflow-visible fw-600 font-size-22 mt-1 monserrat text-center">
                                        {formatNumber(detail?.daily_production)} {detail?.daily_production_unit}
                                    </div>
                                    <div className="font-size-14 text-muted"
                                         style={{ position: "relative", bottom: "0.3rem" }}>
                                        {props.t("Daily Production")}
                                    </div>
                                </div>
                                <div className="d-flex flex-column text-center" style={{ gap: "1px" }}>
                                    <div
                                      className="d-flex flex-column overflow-visible fw-600 font-size-22 mt-1 monserrat text-center">
                                        {formatNumber(detail?.daily_consumption)} {detail?.daily_consumption_unit}
                                    </div>
                                    <div className="font-size-14 text-muted"
                                         style={{ position: "relative", bottom: "0.3rem" }}>
                                        {props.t("Daily Consumption")}
                                    </div>
                                </div>
                            </div>
                        </div>

                </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}

ProgressBar.propTypes = {
    location: PropTypes.any,
    t: PropTypes.any,
}

export default withRouter(
  withTranslation()(ProgressBar)
)
