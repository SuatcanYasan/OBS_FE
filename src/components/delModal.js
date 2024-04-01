import React from "react"
import "devextreme/dist/css/dx.light.css"
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import {withTranslation} from "react-i18next";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const DeleteModal = (props) => {
    const {selectedData ,show, toggle, onDelete,body } = props;

    return (<React.Fragment>
        <Modal isOpen={show} toggle={toggle} size="sm" aria-labelledby="contained-modal-title-vcenter"
               centered>
            <ModalHeader toggle={toggle}><span
                className="float-center">{props.t("Are You Sure?")}</span></ModalHeader>
            <ModalBody>
                {body}
            </ModalBody>
            <ModalFooter>
                <Button outline color="success" className="btn me-1" onClick={() => {toggle()}}>{props.t("No")}</Button>
                <Button outline color="danger" className="btn me-1" onClick={()=>{onDelete(selectedData)}}>
                    {props.t("Yes")}
                </Button>
            </ModalFooter>
        </Modal>
    </React.Fragment>)
}

DeleteModal.propTypes = {
    location: PropTypes.any,
    t: PropTypes.any,
}

export default withRouter(
    withTranslation()(DeleteModal)
)