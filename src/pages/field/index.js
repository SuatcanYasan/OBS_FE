import React, { useEffect, useState } from "react"
import "devextreme/dist/css/dx.light.css"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { withTranslation } from "react-i18next"
import { connect } from "react-redux"
import {
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Row
} from "reactstrap"
import { getAreaDetailService } from "../../services/area/areaService"
import ProgressBarForArea from "./components/progress_bar/progress_bar"
import ProgressBar from "../dashboard/components/progress_bar"
import Inverters from "./components/inverters"
import CustomBreadcrumbs from "../../components/breadcrumbs"
import classnames from "classnames"
import MapsGoogle from "./components/field_detail/google_maps"
import { GoogleApiWrapper } from "google-maps-react"
import CurrentWeather from "./components/field_detail/current_weather"
import Pie from "./components/piechart"
import DashedLine from "./components/dashedLine"

const LoadingContainer = () => <div>Loading...</div>

const AreaPage = (props) => {
  const [areaDetail, setAreaDetail] = useState({})
  const [progressbarFilter, setProgressbarFilter] = useState({
    isMain: true, isGenerate: false, general_sum: true, voltage: false, flow: false,
    others: false, isFiltered: false
  })
  const [selectedNavItem, setSelectedNavItem] = useState("All")
  const [dropdownOpen, setDropdownOpen] = useState(false)
  let params = new URLSearchParams(location.search)
  const toggle = () => setDropdownOpen((prevState) => !prevState)
  const handleProgressbarFilter = (group) => {
    setProgressbarFilter({
      ...progressbarFilter,
      isFiltered: true,
      [group]: !progressbarFilter[group]
    })

  }

  useEffect(() => {
    getAreaDetailService(params.get("id")).then((response) => {
      setAreaDetail(response)
      document.title = `Beykent | ${props.t("Field")}-${response.name}`
    })
  }, [params.get("id")])


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid className="dash">
          <div id="area-breadcrumbs">
            <CustomBreadcrumbs breadcrumbItems={[{ title: areaDetail?.name, url: "/field" }]} />
          </div>
          <Navbar expand="md" id="area-headder" className="nav-tabs-custom border-0 mt-2">
            <Nav role="tablist" className="nav nav-tabs border-0">
              <NavItem>
                <NavLink to="#"
                         className={classnames({ active: progressbarFilter.isMain === true }) + " font-size-14 p-3"}
                         onClick={() => {
                           if (progressbarFilter.isMain === false) {
                             setSelectedNavItem("All")
                             setProgressbarFilter({
                               ...progressbarFilter,
                               isMain: true,
                               general_sum: true
                             })
                           }
                         }}
                >
                  {props.t("All")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#" className={
                  classnames({ active: (progressbarFilter.isGenerate === true && progressbarFilter.isMain === false) }) + " font-size-14 p-3"}
                         onClick={() => {
                           setSelectedNavItem("Production")
                           setProgressbarFilter({
                             ...progressbarFilter,
                             isMain: false,
                             general_sum: true,
                             isGenerate: true

                           })
                         }}>
                  {props.t("Production")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#" className={
                  classnames({ active: (progressbarFilter.isGenerate === false && progressbarFilter.isMain === false) }) + " font-size-14 p-3"}
                         onClick={() => {
                           setSelectedNavItem("Consumption")
                           setProgressbarFilter({
                             ...progressbarFilter,
                             isMain: false,
                             general_sum: true,
                             isGenerate: false
                           })
                         }}>
                  {props.t("Consumption")}
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>

          <div id="area-info" className="p-3 d-flex align-items-center text-uppercase mt-2"
               style={{ backgroundColor: "#02203e", borderRadius: "6px 6px 0 0" }}>
            <div className="font-size-18 fw-500 text-white">
          
              <i className="mdi mdi-chart-bar me-3 text-white"></i>
              {areaDetail?.name} {props.t("Field Info")}
            </div>
          </div>
          <div className="bg-white">
            <Row>
              <Col lg={8}>
                {areaDetail.lat && areaDetail.lng && (<MapsGoogle areaDetail={areaDetail} />)}
              </Col>
              <Col lg={4} className="ps-4 pe-4">
                {areaDetail.lat && areaDetail.lng && ( <CurrentWeather areaDetail={areaDetail}/>)}
              </Col>
            </Row>
          </div>

          <div id="area-detail" className="d-flex p-3 align-items-center text-uppercase mt-2"
               style={{ backgroundColor: "#02203e", borderRadius: "6px 6px 0 0" }}>
            <div className="font-size-18 fw-500 text-white">
              <i className="mdi mdi-chart-bar me-3 text-white"></i>
              {areaDetail?.name} {props.t("Field Detail")} - {props.t(selectedNavItem)}
            </div>
            <div className="ms-auto">
              <Dropdown isOpen={dropdownOpen} toggle={toggle} className="bg-white rounded-3">
                <DropdownToggle caret color="white" className="rounded-2">{props.t("Filter")}</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>{props.t("Filters")}</DropdownItem>
                  <DropdownItem onClick={() => handleProgressbarFilter("general_sum")}>
                    {progressbarFilter.general_sum ? props.t("Hide General Summary") : props.t("Show General Summary")}
                  </DropdownItem>
                  <DropdownItem disabled={progressbarFilter.isMain} onClick={() => handleProgressbarFilter("voltage")}>
                    {progressbarFilter.voltage ? props.t("Hide Voltage") : props.t("Show Voltage")}
                  </DropdownItem>
                  <DropdownItem disabled={progressbarFilter.isMain} onClick={() => handleProgressbarFilter("flow")}>
                    {progressbarFilter.flow ? props.t("Hide Flow") : props.t("Show Flow")}
                  </DropdownItem>
                  <DropdownItem disabled={progressbarFilter.isMain} onClick={() => handleProgressbarFilter("others")}>
                    {progressbarFilter.others ? props.t("Hide Other Information") : props.t("Show Other Information")}
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem disabled={!progressbarFilter.isFiltered} onClick={() => setProgressbarFilter({
                    ...progressbarFilter,
                    general_sum: true,
                    voltage: false,
                    flow: false,
                    others: false,
                    isFiltered: false
                  })}>{props.t("Reset Filter")}</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          {(progressbarFilter.isMain && progressbarFilter.general_sum) && <ProgressBar detail={areaDetail.total_data} />}
          {!progressbarFilter.isMain && <ProgressBarForArea progressbarFilter={progressbarFilter} areaDetail={areaDetail} />}

          <div id="area-graph" className="mt-2">
              <div className="d-flex p-3 align-items-center text-uppercase"
                   style={{ backgroundColor: "#02203e", borderRadius: "6px 6px 0 0" }}>
                <div className="font-size-18 fw-400 text-white">
                  <i className="bx bx-dollar me-2 text-white"></i>
                  {areaDetail?.name} {props.t("Saha Grafiği")}
                </div>
              </div>
              <div className="bg-white">
                <Row>
                  <Col xl={6}>
                    <DashedLine progressbarFilter={progressbarFilter}  />
                  </Col>
                  <Col xl={6}>
                    <Pie dataColors='["--bs-primary","--bs-warning", "--bs-danger","--bs-info", "--bs-success"]'/>
                  </Col>
                </Row>
              </div>
          </div>
          <div className="mt-3" id="area-inverters">
            <div>
              <Inverters areaDetail={areaDetail} />
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

AreaPage.propTypes = {
  location: PropTypes.any,
  google: PropTypes.object,
  t:
  PropTypes.any
}

export default withRouter(withTranslation()(connect(
  null,
  {}
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyDJoLS2ks9mQZrR2tCG7emKVA9sJmYvzxw",
    LoadingContainer: LoadingContainer,
    v: "3"
  })(AreaPage)
)))