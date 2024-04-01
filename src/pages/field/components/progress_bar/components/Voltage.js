import React, { useEffect, useState } from "react"
import { Col } from "reactstrap"
import PropTypes from "prop-types"
import { withTranslation } from "react-i18next"
import { withRouter } from "react-router-dom"
import YellowElectro from "assets/images/yellow-electro.svg"


const Voltage = props => {
  const { areaDetail } = props
  return (
    <React.Fragment>
      <Col xl={4}>
        <div className="d-flex h-100 shadow p-4 rounded-2 power"
             style={{ backgroundColor: "#ffffff" }}>
          <div className="d-flex gap-3 w-100">
            <div className="d-flex align-items-center">
              <div className="avatar-xs me-2">
                  <span className="avatar-title rounded-1 bg-soft font-size-14"
                        style={{ backgroundColor: "#EEB4568E" }}>
                  <img src={YellowElectro} alt="battery" height={32} /></span>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center w-100"
                 style={{ gap: "1rem" }}>
              <div className="d-flex flex-column text-center" style={{ gap: "1px" }}>
                <div
                  className="d-flex flex-column overflow-visible fw-600 font-size-22 mt-1 monserrat text-center">
                  {areaDetail.L1_FAZ_GERILIMI} V
                </div>
                <div className="font-size-14 text-muted "
                     style={{ position: "relative", bottom: "0.3rem" }}>
                  {props.t("L1 Faz Gerilimi")}
                </div>
              </div>
              <div className="d-flex flex-column text-center" style={{ gap: "1px" }}>
                <div
                  className="d-flex flex-column overflow-visible fw-600 font-size-22 mt-1 monserrat text-center">
                  {areaDetail.L1_L2_FAZ_GERILIMI} V
                </div>
                <div className="font-size-14 text-muted"
                     style={{ position: "relative", bottom: "0.3rem" }}>
                  {props.t("L1-L2 Faz Gerilimi")}
                </div>
              </div>
            </div>
          </div>

        </div>
      </Col>
      <Col xl={4}>
        <div className="d-flex h-100 shadow p-4 rounded-2 power"
             style={{ backgroundColor: "#ffffff" }}>
          <div className="d-flex gap-3 w-100">
            <div className="d-flex align-items-center">
              <div className="avatar-xs me-2">
                  <span className="avatar-title rounded-1 bg-soft font-size-14"
                        style={{ backgroundColor: "#EEB4568E" }}>
                  <img src={YellowElectro} alt="battery" height={32} /></span>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center w-100"
                 style={{ gap: "1rem" }}>
              <div className="d-flex flex-column text-center" style={{ gap: "1px" }}>
                <div
                  className="d-flex flex-column overflow-visible fw-600 font-size-22 mt-1 monserrat text-center">
                  {areaDetail.L2_FAZ_GERILIMI} V
                </div>
                <div className="font-size-14 text-muted "
                     style={{ position: "relative", bottom: "0.3rem" }}>
                  {props.t("L2 Faz Gerilimi")}
                </div>
              </div>
              <div className="d-flex flex-column text-center" style={{ gap: "1px" }}>
                <div
                  className="d-flex flex-column overflow-visible fw-600 font-size-22 mt-1 monserrat text-center">
                  {areaDetail.L2_L3_FAZ_GERILIMI} V
                </div>
                <div className="font-size-14 text-muted"
                     style={{ position: "relative", bottom: "0.3rem" }}>
                  {props.t("L2-L3 Faz Gerilimi")}
                </div>
              </div>
            </div>
          </div>

        </div>
      </Col>
      <Col xl={4}>
        <div className="d-flex h-100 shadow p-4 rounded-2 power"
             style={{ backgroundColor: "#ffffff" }}>
          <div className="d-flex gap-3 w-100">
            <div className="d-flex align-items-center">
              <div className="avatar-xs me-2">
                  <span className="avatar-title rounded-1 bg-soft font-size-14"
                        style={{ backgroundColor: "#EEB4568E" }}>
                  <img src={YellowElectro} alt="battery" height={32} /></span>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center w-100"
                 style={{ gap: "1rem" }}>
              <div className="d-flex flex-column text-center" style={{ gap: "1px" }}>
                <div
                  className="d-flex flex-column overflow-visible fw-600 font-size-22 mt-1 monserrat text-center">
                  {areaDetail.L3_FAZ_GERILIMI} V
                </div>
                <div className="font-size-14 text-muted "
                     style={{ position: "relative", bottom: "0.3rem" }}>
                  {props.t("L3 Faz Gerilimi")}
                </div>
              </div>
              <div className="d-flex flex-column text-center" style={{ gap: "1px" }}>
                <div
                  className="d-flex flex-column overflow-visible fw-600 font-size-22 mt-1 monserrat text-center">
                  {areaDetail.L3_L1_FAZ_GERILIMI} V
                </div>
                <div className="font-size-14 text-muted"
                     style={{ position: "relative", bottom: "0.3rem" }}>
                  {props.t("L3-L1 Faz Gerilimi")}
                </div>
              </div>
            </div>
          </div>

        </div>
      </Col>
    </React.Fragment>
  )
}

Voltage.propTypes = {
  location: PropTypes.any,
  t: PropTypes.any
}

export default withRouter(
  withTranslation()(Voltage)
)
