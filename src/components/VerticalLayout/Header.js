import PropTypes from 'prop-types';
import React, {useEffect, useState} from "react";

import {connect} from "react-redux";
// Reactstrap
import {Link} from "react-router-dom";

// Import menuDropdown

// import images
import Logo from "../../assets/images/logo.webp";
//i18n
import {withTranslation} from "react-i18next";

// Redux Store
import {changeSidebarType, showRightSidebarAction, toggleLeftmenu,} from "../../store/actions";
import LanguageDropdown from "./TopbarDropdown/LanguageDropdown";
import ProfileMenu from "./TopbarDropdown/ProfileMenu";
import getUser from "../../helpers/get_user";
import Select from "react-select";


const Header = props => {
  const {isVisibleSelect} = props;
  const [user, setUser] = useState({ LogoURL: "" });

  useEffect(() => {
    const _user = getUser();
    if (_user) {
      setUser(_user);
    }
  }, [])
  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  function tToggle() {
    let body = document.body;
    if (window.screen.width <= 998) {
      body.classList.toggle("sidebar-enable");
    } else {
      if (body.classList.contains("vertical-collpsed")) {
        isVisibleSelect(true);
      } else {
        isVisibleSelect(false);
      }
      body.classList.toggle("vertical-collpsed");
      body.classList.toggle("sidebar-enable");
    }
  }
  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">

            <div className="navbar-brand-box d-lg-none d-md-block bg-white">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={Logo} alt="" height="22"/>
                </span>
              </Link>

              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  <img src={Logo} alt="" height="22"/>
                </span>
              </Link>
            </div>
            <button
                type="button"
                onClick={() => {
                  tToggle();
                }}
                className="btn btn-sm px-3 font-size-16 header-item "
                id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars"/>
            </button>
          </div>
          <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none ms-2">
            </div>
            <div className="d-flex">
              <LanguageDropdown/>
              <ProfileMenu/>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  changeSidebarType: PropTypes.func,
  leftMenu: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func
};

const mapStatetoProps = state => {
  const {
    layoutType,
    showRightSidebar,
    leftMenu,
    leftSideBarType,
  } = state.Layout;
  return { layoutType, showRightSidebar, leftMenu, leftSideBarType };
};

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
})(withTranslation()(Header));
