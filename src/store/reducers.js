import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// auth
import Login from "./auth/login/reducer"
import Profile from "./auth/profile/reducer"

//Projects
import Dashboard from "./dashboard/reducer"

const rootReducer = combineReducers({
  // public
  Dashboard,
  Layout,
  Login,
  Profile,
})

export default rootReducer
