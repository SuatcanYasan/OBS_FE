import React from "react"
import {Redirect} from "react-router-dom"


// auth related pages
import Login from "../pages/auth/Login"
import Logout from "../pages/auth/Logout"

// Panel
import Panel from "../pages/dashboard/index"

// Utility
import Pages404 from "../pages/Utility/pages-404";
import AlertPage from "../pages/alarm"


const authProtectedRoutes = [
  { path: "/", component: Panel },
  { path: "/alarm", component: AlertPage },

  //  Main
  { path: "/", exact: true, component: () => <Redirect to="/" /> },

]
const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
]

const errorRoutes = [
  { path: "*", component: Pages404 },
]


export { publicRoutes, authProtectedRoutes,errorRoutes }
