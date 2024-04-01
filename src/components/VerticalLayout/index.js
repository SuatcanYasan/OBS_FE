import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import {
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarThemeImage,
  changeSidebarType,
  changeTopbarTheme,
} from "../../store/actions"

// Layout Related Components
import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

//redux
import { useDispatch, useSelector } from "react-redux"
import { createSelector } from "reselect"
import { withRouter } from "react-router-dom"
import documentTitle from 'helpers/page_documnet_title';
import getUser from "../../helpers/get_user"

const Layout = props => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(true);
  const { pathname } = props.location;

  const selectLayoutState = (state) => state.Layout;

  const selectLayoutProperties = createSelector(
      selectLayoutState,
      (layout) => ({
    layoutModeType: layout.layoutModeType,
    leftSideBarThemeImage: layout.leftSideBarThemeImage,
    leftSideBarType: layout.leftSideBarType,
    layoutWidth: layout.layoutWidth,
    topbarTheme: layout.topbarTheme,
    leftSideBarTheme: layout.leftSideBarTheme,
  }));

  const {
    leftSideBarThemeImage,
    layoutWidth,
    leftSideBarType,
    topbarTheme,
    leftSideBarTheme,
    layoutModeType
} = useSelector(selectLayoutProperties);    

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);


  const toggleMenuCallback = () => {
    if (leftSideBarType === "default") {
      dispatch(changeSidebarType("condensed", isMobile));
    } else if (leftSideBarType === "condensed") {
      dispatch(changeSidebarType("default", isMobile));
    }
  };

  //hides right sidebar on body click
  const hideRightbar = (event) => {
    var rightbar = document.getElementById("right-bar");
    //if clicked in inside right bar, then do nothing
    if (rightbar && rightbar.contains(event.target)) {
      return;
    } else {
      //if clicked in outside of rightbar then fire action for hide rightbar
    }
  };

  /*
  layout  settings
  */
  useEffect(() => {
    const _user = getUser();
    if (_user) {
      const searchParams = new URLSearchParams(props.location.search);
      const currentPageTitle = documentTitle(pathname, searchParams);
      document.title = "Beykent | " + currentPageTitle;
    }
  }, [pathname, props]);


  useEffect(() => {
    //init body click event fot toggle rightbar
    document.body.addEventListener("click", hideRightbar, true);


  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(changeLayout("vertical"));
  }, [dispatch]);

  useEffect(() => {
    if (leftSideBarTheme) {
      dispatch(changeSidebarTheme(leftSideBarTheme));
    }
  }, [leftSideBarTheme, dispatch]);

  useEffect(() => {
    if (layoutModeType) {
      dispatch(changeLayoutMode(layoutModeType));
    }
  }, [layoutModeType, dispatch]);

  useEffect(() => {
    if (leftSideBarThemeImage) {
      dispatch(changeSidebarThemeImage(leftSideBarThemeImage));
    }
  }, [leftSideBarThemeImage, dispatch]);

  useEffect(() => {
    if (layoutWidth) {
      dispatch(changeLayoutWidth(layoutWidth));
    }
  }, [layoutWidth, dispatch]);

  useEffect(() => {
    if (leftSideBarType) {
      dispatch(changeSidebarType(leftSideBarType));
    }
  }, [leftSideBarType, dispatch]);

  useEffect(() => {
    if (topbarTheme) {
      dispatch(changeTopbarTheme(topbarTheme));
    }
  }, [topbarTheme, dispatch]);

  return (
    <React.Fragment>
      <div id="layout-wrapper">
        <Header toggleMenuCallback={toggleMenuCallback} isVisibleSelect={(e)=> {
          setIsVisible(e)
        }} />
        <Sidebar
          theme={leftSideBarTheme}
          type={leftSideBarType}
          isMobile={isMobile}
          isVisible={isVisible}
        />
        <div className="main-content">{props.children}</div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

Layout.propTypes = {
  changeLayoutWidth: PropTypes.func,
  changeSidebarTheme: PropTypes.func,
  changeSidebarThemeImage: PropTypes.func,
  changeSidebarType: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  children: PropTypes.any,
  isPreloader: PropTypes.any,
  layoutWidth: PropTypes.any,
  leftSideBarTheme: PropTypes.any,
  leftSideBarThemeImage: PropTypes.any,
  leftSideBarType: PropTypes.any,
  location: PropTypes.object,
  topbarTheme: PropTypes.any,
};

export default withRouter(Layout);
