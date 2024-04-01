import React from "react"
import { Col } from "reactstrap"
import PropTypes from "prop-types"
import { withTranslation } from "react-i18next"
import { withRouter } from "react-router-dom"
import YellowElectro from "assets/images/yellow-electro.svg"

const formatNumber = (number) => {
  if (number === null || isNaN(number)) return '';

  return Number(number).toLocaleString('en-US', { maximumFractionDigits: 3 });
};
const Others = props => {
  const { areaDetail } = props
  return (
    <React.Fragment>
      <Col xl={3}>
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
                  {formatNumber(areaDetail.FREKANS)} Hz.
                </div>
                <div className="font-size-14 text-muted "
                     style={{ position: "relative", bottom: "0.3rem" }}>
                  {props.t("Frekans")}
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
                  {formatNumber(areaDetail.GUC_FAKTORU)} {areaDetail.GUC_FAKTORU_UNIT}
                </div>
                <div className="font-size-14 text-muted "
                     style={{ position: "relative", bottom: "0.3rem" }}>
                  {props.t("PF")}
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
              <div className="d-flex align-items-center">
                <div className="avatar-xs me-2">
                  <span className="avatar-title rounded-1 bg-soft font-size-14"
                        style={{ backgroundColor: "#EEB4568E" }}>
                  <img src={YellowElectro} alt="battery" height={32} /></span>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center w-100"
                 style={{ gap: "1rem" }}>
              <div className="d-flex flex-column text-center" style={{ gap: "1px" }}>
                <div
                  className="d-flex flex-column overflow-visible fw-600 font-size-22 mt-1 monserrat text-center">
                  {formatNumber(areaDetail.REAKTIF_GUC)} {areaDetail.REAKTIF_GUC_UNIT}
                </div>
                <div className="font-size-14 text-muted "
                     style={{ position: "relative", bottom: "0.3rem" }}>
                  {props.t("Anlık Reaktif Güç")}
                </div>
              </div>
              <div className="d-flex flex-column text-center" style={{ gap: "1px" }}>
                <div
                  className="d-flex flex-column overflow-visible fw-600 font-size-22 mt-1 monserrat text-center">
                  {formatNumber(areaDetail.GORUNUR_GUC)} {areaDetail.GORUNUR_GUC_UNIT}
                </div>
                <div className="font-size-14 text-muted"
                     style={{ position: "relative", bottom: "0.3rem" }}>
                  {props.t("Görünür Güç")}
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
              <div className="d-flex align-items-center">
                <div className="avatar-xs me-2">
                  <span className="avatar-title rounded-1 bg-soft font-size-14"
                        style={{ backgroundColor: "#EEB4568E" }}>
                  <img src={YellowElectro} alt="battery" height={32} /></span>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center w-100"
                 style={{ gap: "1rem" }}>
              <div className="d-flex flex-column text-center" style={{ gap: "1px" }}>
                <div
                  className="d-flex flex-column overflow-visible fw-600 font-size-22 mt-1 monserrat text-center">
                  {formatNumber(areaDetail.REAKTIF_TUKETILEN_GUC)} {areaDetail.REAKTIF_TUKETILEN_GUC_UNIT}
                </div>
                <div className="font-size-14 text-muted "
                     style={{ position: "relative", bottom: "0.3rem" }}>
                  {props.t("Tüketilen Reaktif Güç")}
                </div>
              </div>
              <div className="d-flex flex-column text-center" style={{ gap: "1px" }}>
                <div
                  className="d-flex flex-column overflow-visible fw-600 font-size-22 mt-1 monserrat text-center">
                  {formatNumber(areaDetail.REAKTIF_URETILEN_GUC)} {areaDetail.REAKTIF_URETILEN_GUC_UNIT}

                </div>
                <div className="font-size-14 text-muted"
                     style={{ position: "relative", bottom: "0.3rem" }}>
                  {props.t("Üretilen Reaktif Güç")}
                </div>
              </div>
            </div>
          </div>

        </div>
      </Col>
    </React.Fragment>
  )
}

Others.propTypes = {
  location: PropTypes.any,
  t: PropTypes.any
}

export default withRouter(
  withTranslation()(Others)
)
