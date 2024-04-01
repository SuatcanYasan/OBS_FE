import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {BrowserRouter} from "react-router-dom";
import "./i18n";
import {Provider} from "react-redux";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css'
import "flatpickr/dist/themes/material_blue.css";

import store from "./store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.Fragment>
      <BrowserRouter>
        <App />
          <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
          />
      </BrowserRouter>
    </React.Fragment>
  </Provider>
);
serviceWorker.unregister()
