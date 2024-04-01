import React from "react"
import { Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { withTranslation } from "react-i18next"

const InverterDataModal = props => {
  const { show, toggle, inverterData } = props
  return (
    <Modal isOpen={show} size="lg" centered
           toggle={() => {
             toggle()
           }}>
      <ModalHeader toggle={() => toggle()}> {props.t("Inverter Data")} </ModalHeader>
      <ModalBody>
        <div>
          <Row>
            {
              inverterData?.map((item, index) => {
                return (
                  <Col xl={4} key={index} className="gy-2">
                    <div className="h-100 text-center shadow rounded-2 bg-blue-gradient p-3">
                      <div className="font-size-16 fw-semibold">
                        {item.device_parameter_name}
                      </div>
                      <div className="font-size-14">
                        {item.device_parameter_value}
                      </div>
                    </div>
                  </Col>
                )
              })
            }

          </Row>
        </div>
      </ModalBody>
    </Modal>
  )
}


InverterDataModal.propTypes = {
  location: PropTypes.any,
  t: PropTypes.any
}

export default withRouter(
  withTranslation()(InverterDataModal)
)