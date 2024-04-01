import React, { useEffect, useState } from "react";
import { Col } from "reactstrap";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { withRouter } from "react-router-dom";
import Battery from "assets/images/battery.svg";
import GreenElectro from "assets/images/green-electro.svg";
import RedElectro from "assets/images/red-electro.svg";

const GeneralDetails = props => {
  const { progressbarFilter, areaDetail } = props;

  // Yardımcı fonksiyon: Veriyi formatla
  const formatNumber = (number) => {
    if (number === null || isNaN(number)) return '';

    return Number(number).toLocaleString('en-US', { maximumFractionDigits: 3 });
  };

  return (
    <React.Fragment>
      {progressbarFilter.isGenerate && (
        <Col xl={3}>
          <div className="d-flex h-100 shadow p-4 rounded-2 capasity" style={{ backgroundColor: "#ffffff" }}>
            <div className="d-flex gap-3 w-100">
              <div className="d-flex align-items-center">
                <div className="avatar-xs me-2">
                  <span className="avatar-title rounded-1 bg-soft font-size-14" style={{ backgroundColor: "rgba(83,166,237,0.56)" }}>
                    <img src={Battery} alt="battery" height={32} />
                  </span>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center w-100" style={{ gap: "1rem" }}>
                <div className="d-flex flex-column text-center" style={{ gap: "1px" }}>
                  <div className="d-flex flex-column overflow-visible fw-600 font-size-22 mt-1 monserrat text-center">
                    {formatNumber(areaDetail.daily_earnings)} {areaDetail.production_revenue_currency}
                  </div>
                  <div className="font-size-14 text-muted " style={{ position: "relative", bottom: "0.3rem" }}>
                    {props.t("Daily Income")}
                  </div>
                </div>
                <div className="d-flex flex-column text-center" style={{ gap: "1px" }}>
                  <div className="d-flex flex-column overflow-visible fw-600 font-size-22 mt-1 monserrat text-center">
                    {formatNumber(areaDetail.total_earnings)} {areaDetail.production_revenue_currency}
                  </div>
                  <div className="font-size-14 text-muted" style={{ position: "relative", bottom: "0.3rem" }}>
                    {props.t("Total Income")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      )}
      <Col xl={progressbarFilter.isGenerate ? 3 : 4}>
        <div className={`d-flex h-100 shadow p-4 rounded-2 ${progressbarFilter.isGenerate ? "production" : "powerComp"}`} style={{ backgroundColor: "#ffffff" }}>
          <div className="d-flex gap-3 w-100">
            <div className="d-flex align-items-center">
              <div className="avatar-xs me-2">
                <span className="avatar-title rounded-1 bg-soft font-size-14" style={{ backgroundColor: `${progressbarFilter.isGenerate ? "#50D1238E" : "#ff7070"}` }}>
                  <img src={progressbarFilter.isGenerate ? GreenElectro : RedElectro} alt="battery" height={32} />
                </span>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center w-100" style={{ gap: "1rem" }}>
              <div className="d-flex flex-column text-center" style={{ gap: "1px" }}>
                <div className="d-flex flex-column overflow-visible fw-600 font-size-22 mt-1 monserrat text-center">
                  {formatNumber(areaDetail.ANLIK_GUC)} {areaDetail.ANLIK_GUC_UNIT}
                </div>
                <div className="font-size-14 text-muted" style={{ position: "relative", bottom: "0.3rem" }}>
                  {progressbarFilter.isGenerate ? props.t("Instantaneous Power Generation") : props.t("Instantaneous Power Consumption")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col xl={progressbarFilter.isGenerate ? 3 : 4}>
        <div className={`d-flex h-100 shadow p-4 rounded-2 ${progressbarFilter.isGenerate ? "production" : "powerComp"}`} style={{ backgroundColor: "#ffffff" }}>
          <div className="d-flex gap-3 w-100">
            <div className="d-flex align-items-center">
              <div className="avatar-xs me-2">
                <span className="avatar-title rounded-1 bg-soft font-size-14" style={{ backgroundColor: `${progressbarFilter.isGenerate ? "#50D1238E" : "#ff7070"}` }}>
                  <img src={progressbarFilter.isGenerate ? GreenElectro : RedElectro} alt="battery" height={32} />
                </span>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center w-100" style={{ gap: "1rem" }}>
              <div className="d-flex flex-column text-center" style={{ gap: "1px" }}>
                <div className="d-flex flex-column overflow-visible fw-600 font-size-22 mt-1 monserrat text-center">
                  {formatNumber(areaDetail.TOPLAM_GUC_URETIMI)} {areaDetail.TOPLAM_GUC_URETIMI_UNIT}
                </div>
                <div className="font-size-14 text-muted" style={{ position: "relative", bottom: "0.3rem" }}>
                  {progressbarFilter.isGenerate ? props.t("Total Power Generation") : props.t("Total Power Consumption")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col xl={progressbarFilter.isGenerate ? 3 : 4}>
        <div className={`d-flex h-100 shadow p-4 rounded-2 ${progressbarFilter.isGenerate ? "production" : "powerComp"}`} style={{ backgroundColor: "#ffffff" }}>
          <div className="d-flex gap-3 w-100">
            <div className="d-flex align-items-center">
              <div className="avatar-xs me-2">
                <span className="avatar-title rounded-1 bg-soft font-size-14" style={{ backgroundColor: `${progressbarFilter.isGenerate ? "#50D1238E" : "#ff7070"}` }}>
<img src={progressbarFilter.isGenerate ? GreenElectro : RedElectro} alt="battery" height={32} />
</span>
</div>
</div>
<div className="d-flex flex-column justify-content-center align-items-center w-100" style={{ gap: "1rem" }}>
<div className="d-flex flex-column text-center" style={{ gap: "1px" }}>
<div className="d-flex flex-column overflow-visible fw-600 font-size-22 mt-1 monserrat text-center">
{formatNumber(areaDetail.daily_production)} {areaDetail.daily_production_unit}
</div>
<div className="font-size-14 text-muted" style={{ position: "relative", bottom: "0.3rem" }}>
{progressbarFilter.isGenerate ? props.t("Daily Production") : props.t("Daily Consumption")}
</div>
</div>
</div>
</div>
</div>
</Col>
</React.Fragment>
);
};

GeneralDetails.propTypes = {
location: PropTypes.any,
t: PropTypes.any
};

export default withRouter(withTranslation()(GeneralDetails));
