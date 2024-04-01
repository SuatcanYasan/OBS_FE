import React from "react"
import {Redirect} from "react-router-dom"


// auth related pages
import Login from "../pages/auth/Login"
import Logout from "../pages/auth/Logout"

// Panel
import Panel from "../pages/dashboard/index"
import AreaPage from "../pages/field/index"

// Utility
import Pages404 from "../pages/Utility/pages-404";
import AlertPage from "../pages/alarm"
import FieldManagement from "../pages/field_management"
import InverterPage from "../pages/inverters"
import TransformerPage from "../pages/transformer"
import GridValuePage from "../pages/grid_values"
import CompensationPage from "../pages/compensation"
import ReportPage from "../pages/report"



const authProtectedRoutes = [
  { path: "/", component: Panel },
  { path: "/field", component: AreaPage },
  { path: "/alarm", component: AlertPage },
  { path: "/field-management", component: FieldManagement },
  { path: "/inverters", component: InverterPage },
  { path: "/transformer", component: TransformerPage },
  { path: "/grid-values", component: GridValuePage },
  { path: "/compensation", component: CompensationPage },
  { path: "/report", component: ReportPage },
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
