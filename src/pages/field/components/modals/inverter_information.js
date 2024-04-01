import React from "react"
import { Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { withTranslation } from "react-i18next"

const InverterInfoModal = props => {
  const { show, toggle, inverterData } = props
  return (
    <Modal isOpen={show} size="md" centered
           toggle={() => {
             toggle()
           }}>
      <ModalHeader toggle={() => toggle()}> {inverterData?.name} </ModalHeader>
      <ModalBody>
        <div className="text-center w-100 border-bottom pb-2 pt-2">
          <img src={inverterData?.brand_image_url} alt="inverter" height={128} className="bg-transparent border-0" />
        </div>
        <div className="text-center w-100 border-bottom pb-2 pt-2 font-size-16">
          <span className="text-blue fw-semibold">{props.t("IP")}:</span> {inverterData?.ip_address}
        </div>
        <div className="text-center w-100 border-bottom pb-2 pt-2 font-size-16">
          <span className="text-blue fw-semibold">{props.t("Port")}:</span> {inverterData?.port}
        </div>
        <div className="text-center w-100 border-bottom pb-2 pt-2 font-size-16">
          <span className="text-blue fw-semibold">{props.t("Brand")}:</span> {inverterData?.brand}
        </div>
        <div className="text-center w-100 border-bottom pb-2 pt-2 font-size-16">
          <span className="text-blue fw-semibold">{props.t("Seri No")}:</span> {inverterData?.seri_no}
        </div>
        <div className="text-center w-100 border-bottom pb-2 pt-2 font-size-16">
          <span className="text-blue fw-semibold">{props.t("Model")}:</span> {inverterData?.model}
        </div>
      </ModalBody>
    </Modal>
  )
}


InverterInfoModal.propTypes = {
  location: PropTypes.any,
  t: PropTypes.any
}

export default withRouter(
  withTranslation()(InverterInfoModal)
)