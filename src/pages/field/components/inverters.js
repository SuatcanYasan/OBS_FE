import React, { useEffect, useState } from "react"
import "devextreme/dist/css/dx.light.css"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { withTranslation } from "react-i18next"
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row
} from "reactstrap"
import { getDeviceService } from "../../../services/device/deviceService"
import { errorToast } from "../../../components/toastify"
import InverterDataModal from "./modals/inverter_data"
import InverterInfoModal from "./modals/inverter_information"

const Inverters = (props) => {
  const { areaDetail } = props
  const [inverter, setInverter] = useState([])
  const [menuStates, setMenuStates] = useState([])
  const [informationModal, setInformationModal] = useState(false)
  const [veriableModal, setVeriableModal] = useState(false)
  const [selectedInverter, setSelectedInverter] = useState([])
  let params = new URLSearchParams(location.search)
  const [progressValue, setProgressValue] = useState(0)
  const [open, setOpen] = useState("1")
  const toggle = (id) => {
    if (open === id) {
      setOpen()
    } else {
      setOpen(id)
    }
  }

  useEffect(() => {
    getDeviceService(params.get("id")).then((response) => {
      if (!response.status) {
        errorToast(response.message)
      }
      setInverter(response.data)
      setMenuStates(new Array(response.data?.length).fill(false))
    })
    setProgressValue(Math.floor(Math.random() * (100 - 20 + 1)) + 20)
  }, [params.get("id")])
  const toggleMenu = (index) => {
    const newMenuStates = [...menuStates]
    newMenuStates[index] = !newMenuStates[index]
    setMenuStates(newMenuStates)
  }


  return (
    <React.Fragment>
      <Accordion open={open} toggle={toggle} style={{ borderRadius: "6px 6px 0 0" }} className="mt-2 border-0">
        <AccordionItem style={{ borderRadius: "6px 6px 0 0" }} className="border-0">
          <AccordionHeader targetId="1" className="border-0 d-flex p-2 align-items-center text-uppercase"
                           style={{ backgroundColor: "#02203e", borderRadius: "6px 6px 0 0" }}>
            <div className="font-size-18 fw-400 text-white">
              <i className="bx bx-bar-chart me-2 text-white"></i>
              {areaDetail?.name} {props.t("Inverters")}
            </div>
          </AccordionHeader>
          <AccordionBody accordionId="1" className="bg-white">
            <div className="bg-white">
              <Row>
                {inverter?.map((item, index) => (
                  <Col xl={3} key={index} className="p-4">
                    <div className="inverter-item h-100">
                      <div className="inverter-header bg-green rounded-2  pe-2 ps-2 pt-1 pb-1"
                           style={{ color: "#02203E" }}>
                        <div className="font-size-14">{`${areaDetail.name} (${item.name})`}</div>
                        <Dropdown isOpen={menuStates[index]} toggle={() => toggleMenu(index)} size="sm"
                                  direction="start">
                          <DropdownToggle caret color="white">
                            <i className="fas fa-align-justify"></i>
                          </DropdownToggle>
                          <DropdownMenu className="rounded-2">
                            <DropdownItem onClick={() => {
                              setVeriableModal(true)
                              setSelectedInverter(item)
                            }}>{props.t("Inverter Data")}</DropdownItem>
                            <DropdownItem onClick={() => {
                              setInformationModal(true)
                              setSelectedInverter(item)
                            }}>{props.t("Inverter Info")}</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                      <div className="inverter-content p-3 text-center">
                        <div>
                          <img height={32}
                               src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Huawei_Standard_logo.svg/640px-Huawei_Standard_logo.svg.png" />
                        </div>
                        <div className="font-size-12 text-muted mt-2">
                          {item.seri_no}
                        </div>
                        <div className="blink font-size-20">
                          {Math.floor(Math.random() * 80)}kW
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                          <div className="border-green w-75 p-1">
                            <Progress
                              value={progressValue}
                              className="progress-xl inverter-progress bg-white rounded-5"
                              color=""
                              animated
                            >
                              <span className="font-size-12 text-white">{progressValue}%</span>
                            </Progress>
                          </div>

                        </div>
                        <div className="d-flex justify-content-around mt-3">
                          <div className="font-size-16 text-muted">
                            <i className="bx bx-bar-chart me-2" />
                            {Math.floor(Math.random() * (400 - 300 + 1)) + 300}kW
                          </div>
                          <div className="font-size-16 text-muted">
                            <i className="bx bx-sun me-2" />
                            {Math.floor(Math.random() * (40 - 20 + 1)) + 20}°C
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>

      {selectedInverter && (
        <React.Fragment>
          <InverterDataModal show={veriableModal} toggle={() => setVeriableModal(false)}
                             inverterData={selectedInverter.data} />
          <InverterInfoModal show={informationModal} toggle={() => setInformationModal(false)}
                             inverterData={selectedInverter} />
        </React.Fragment>
        )}
    </React.Fragment>
  )
}

Inverters.propTypes = {
  location: PropTypes.any,
  t:
  PropTypes.any
}

export default withRouter(withTranslation()(Inverters))
