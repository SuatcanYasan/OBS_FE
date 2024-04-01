import React, { useEffect, useState } from "react";
import "devextreme/dist/css/dx.light.css";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { getAreaWeatherDetail, getAreaDetailService } from "../../../../services/area/areaService";

const CurrentWeather = (props) => {
  const [weatherDetail, setWeatherDetail] = useState({});
  const {areaDetail} = props;
  const params = new URLSearchParams(props.location.search);

  useEffect(() => {
    const fetchWeatherDetail = async () => {
      try {
        const response = await getAreaWeatherDetail(`${areaDetail.lat},${areaDetail.lng}`);
        setWeatherDetail(response);
      } catch (error) {
        console.error("Error fetching weather detail:", error);
      }
    };

    if (params.get("id")) {
      fetchWeatherDetail();
    }
  }, [params.get("id")]);

  return (
    <React.Fragment>
      <div className="weather">
        <div className="top">
          <div>
            <p className="city">{weatherDetail.location?.name}</p>
            <p className="weather-description">{weatherDetail.current?.condition?.text}</p>
          </div>
          <img
            alt="weather"
            className="weather-icon"
            src={weatherDetail.current?.condition?.icon}
          />
                    <p className="temperature">{weatherDetail.current?.temp_c}°C</p>

        </div>
        <div className="bottom">
          <div className="details">
            <div className="parameter-row">
              <span className="parameter-label">{props.t("Wind")}:</span>
              <span className="parameter-value">{weatherDetail.current?.wind_mph} m/h</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">{props.t("Humidity")}:</span>
              <span className="parameter-value">{weatherDetail.current?.humidity}%</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">{props.t("production_estimate")}:</span>
              <span className="parameter-value">{areaDetail.production_estimate}</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">{props.t("quantity_of_panels")}:</span>
              <span className="parameter-value">{areaDetail.panel_count}</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">{props.t("quantity_of_inverter")}:</span>
              <span className="parameter-value">{areaDetail.inverter_count}</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">{props.t("commissioning_date")}:</span>
              <span className="parameter-value">
                {new Date(areaDetail.started_date).toLocaleDateString(props.t('en-EN'), { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

CurrentWeather.propTypes = {
  location: PropTypes.object,
  t: PropTypes.func
};

export default withRouter(withTranslation()(CurrentWeather));
