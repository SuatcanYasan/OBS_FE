import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import Logo from "../../assets/images/logo-buyuk.png";
import LogoMini from "../../assets/images/logo-kucuk.png";

//i18n
import { withTranslation } from "react-i18next";
import SidebarContent from "./SidebarContent";

import {Link, withRouter} from "react-router-dom";

const Sidebar = props => {

  return (
    <React.Fragment>
      <div className="vertical-menu">
        <div className="navbar-brand-box bg-white">
          <Link to="/" className="logo logo-dark">
            <span className="logo-sm">
              <img src={LogoMini} alt="" height="40" />
            </span>
            <span className="logo-lg">
              <img src={Logo} alt="" height="40" />
            </span>
          </Link>

          <Link to="/" className="logo logo-light">
            <span className="logo-sm">
              <img src={LogoMini} alt="" height="40" />
            </span>
            <span className="logo-lg">
              <img src={Logo} alt="" height="40" />
            </span>
          </Link>
        </div>
        <div data-simplebar className="h-100">
          {props.type !== "condensed" ? <SidebarContent isVisible={props.isVisible} /> : <SidebarContent isVisible={props.isVisible}/>}
        </div>
        <div className="sidebar-background"></div>
      </div>
    </React.Fragment>
  );
};

Sidebar.propTypes = {
  type: PropTypes.string,
};

const mapStatetoProps = state => {
  return {
    layout: state.Layout,
  };
};
export default connect(
  mapStatetoProps,
  {}
)(withRouter(withTranslation()(Sidebar)));
