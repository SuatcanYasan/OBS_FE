import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import PropTypes from 'prop-types';
import './assets/scss/custom.scss'
import React, {useEffect} from "react";

import {BrowserRouter as Router, Switch} from "react-router-dom";
import {connect} from "react-redux";

import {authProtectedRoutes, errorRoutes, publicRoutes} from "./routes";

import AuthMiddleware from "./routes/route";

import HorizontalLayout from "./components/VerticalLayout/";
import NonAuthLayout from "./components/NonAuthLayout";


import "./assets/scss/theme.scss";

const trMessages = require('devextreme/localization/messages/tr.json');
const localization = require('devextreme/localization');


const App = () => {

  useEffect(() => {
    localization.loadMessages(trMessages);
    localization.locale('tr');
    // document.body.style.zoom = "80%";
  }, [])

  return (
    <React.Fragment>
      <Router>
        <Switch>
          {publicRoutes.map((route, idx) => (
            <AuthMiddleware
              path={route.path}
              layout={NonAuthLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
              exact
            />
          ))}
          {authProtectedRoutes.map((route, idx) => (
            <AuthMiddleware
              path={route.path}
              layout={HorizontalLayout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
              exact
            />
          ))}
          {errorRoutes.map((route, idx) => (
              <AuthMiddleware
                  path={route.path}
                  layout={NonAuthLayout}
                  component={route.component}
                  key={idx}
                  isAuthProtected={false}
                  exact
              />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
};

App.propTypes = {
  layout: PropTypes.any
};

const mapStateToProps = state => {
  return {
    layout: state.Layout,
  };
};

export default connect(mapStateToProps, null)(App);
