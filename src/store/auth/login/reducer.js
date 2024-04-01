import {API_ERROR, LOGIN_SUCCESS, LOGIN_USER, LOGOUT_USER, LOGOUT_USER_SUCCESS, SET_LOGIN_CASES,} from "./actionTypes"

const initialState = {
  error: "",
  loading: false,
  isSubCustomer: false,
  isForgotPassoword: false,
  isRegisterUser: false,
  subCustomerAccounts: []
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      state = {
        ...state,
        loading: true,
      }
      break
    case LOGIN_SUCCESS:
      state = {
        ...state,
        loading: false,
        isSubCustomer: action.payload.isSubCustomer,
        subCustomerAccounts: action.payload.subCustomerAccounts,
      }
      break
    case LOGOUT_USER:
      state = {
        ...state,
        isSubCustomer: action.payload.isSubCustomer,
        subCustomerAccounts: action.payload.subCustomerAccounts,
      }
      break
    case SET_LOGIN_CASES:
      state = {
        ...state,
        isSubCustomer: action.payload.isSubCustomer,
        isForgotPassoword: action.payload.isForgotPassoword,
        isRegisterUser: action.payload.isRegisterUser,
      }
      break
    case LOGOUT_USER_SUCCESS:
      state = { ...state }
      break

    case API_ERROR:
      state = { ...state, error: action.payload, loading: false }
      break
    default:
      state = { ...state }
      break
  }
  return state
}

export default login
