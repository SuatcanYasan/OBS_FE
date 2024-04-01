import {API_ERROR, LOGIN_SUCCESS, LOGIN_USER, LOGOUT_USER, LOGOUT_USER_SUCCESS, SET_LOGIN_CASES,} from "./actionTypes"

export const loginUser = (user, history,props) => {
  return {
    type: LOGIN_USER,
    payload: { user, history },
    props: props,
  }
}

export const loginSuccess = data => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  }
}

export const logoutUser = history => {
  return {
    type: LOGOUT_USER,
    payload: { history },
  }
}

export const logoutUserSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: {},
  }
}

export const setLoginCases = data => {
  return {
    type: SET_LOGIN_CASES,
    payload: {
      isSubCustomer: data.isSubCustomer,
      isForgotPassoword: data.isForgotPassoword,
      isRegisterUser: data.isRegisterUser
    },
  }
}


export const apiError = error => {
  return {
    type: API_ERROR,
    payload: error,
  }
}