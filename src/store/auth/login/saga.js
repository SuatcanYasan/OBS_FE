import {call, put, takeEvery} from "redux-saga/effects";

// Login Redux States
import {LOGIN_USER, LOGOUT_USER} from "./actionTypes";
import {apiError} from "./actions";

import {removeCookie} from "helpers/cookie_helper";
import {loginUserService} from "services/auth/login_service";
import i18n from "../../../i18n.js";

function* loginUser({ payload: { user, history } }) {
  const t = i18n.t;
  try {
    const loginServiceResponse = yield call(loginUserService, user);
    if (loginServiceResponse.status) {
        history.push("/");
      }
    else {
      yield put(apiError(t("Login Failed, please check your information.")));
    }
  } catch (error) {
    yield put(apiError(error));
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    removeCookie("access_token");
    history.push("/login");
  } catch (error) {
    yield put(apiError(error));
  }
}


function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
  yield takeEvery(LOGOUT_USER, logoutUser);
}

export default authSaga;
