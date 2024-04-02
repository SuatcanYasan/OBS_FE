import React from "react"
import {Col, Progress, Row} from "reactstrap";
import PropTypes from "prop-types";
import {withTranslation} from "react-i18next"
import {withRouter} from "react-router-dom";
import Class from "../../../assets/icons/class.svg"
import Folder from "../../../assets/icons/folder.svg"
import Exam from "../../../assets/icons/exam.svg"
import HomeWork from "../../../assets/icons/homework.svg"
import ExampleData from "./example_data.json"

const ProgressBar = props => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={3}>
                    <div className="h-100 shadow p-4 rounded-2 bg-light-blue-gradient"
                         style={{backgroundColor: "#ffffff"}}>
                        <div className="d-flex gap-3 w-100">
                            <div className="d-flex align-items-center">
                                <div className="avatar-xs me-2">
                                    <span
                                        className="avatar-title rounded-1 bg-soft font-size-14"
                                        style={{backgroundColor: "rgba(83,166,237,0.56)"}}>
                                        <img src={Class} alt="ClassIcon" height={24}/>
                                    </span>
                                </div>
                            </div>
                            <div className="justify-content-center align-items-center w-100"
                                 style={{gap: "1rem"}}>
                                <div className="d-flex" style={{gap: "1px"}}>
                                    <div className="font-size-16 text-muted">
                                        {props.t("Sanal Sınıf")}
                                    </div>
                                    <div className="ms-auto font-size-16 text-muted">
                                        %32
                                    </div>
                                </div>
                                <div className="d-flex" style={{gap: "1px"}}>
                                    <div className="font-size-14 text-muted fw-semibold"
                                         style={{position: "relative", bottom: "0.2rem"}}>
                                        {props.t("Toplam Ders Sayısı")}: {ExampleData.total_class}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <Progress
                                value={ExampleData.completed_class}
                                max={ExampleData.total_class}
                                barClassName="bg-green"
                                className="progress-lg"
                                color="info"
                            >{ExampleData.completed_class}</Progress>
                        </div>
                    </div>
                </Col>
                <Col xl={3}>
                    <div className="h-100 shadow p-4 rounded-2 bg-orange-gradient"
                         style={{backgroundColor: "#ffffff"}}>
                        <div className="d-flex gap-3 w-100">
                            <div className="d-flex align-items-center">
                                <div className="avatar-xs me-2">
                                    <span
                                        className="avatar-title rounded-1 bg-soft font-size-14"
                                        style={{backgroundColor: "rgba(238,180,86,0.56)"}}>
                                        <img src={Folder} alt="battery" height={24}/>
                                    </span>
                                </div>
                            </div>
                            <div className="justify-content-center align-items-center w-100"
                                 style={{gap: "1rem"}}>
                                <div className="d-flex" style={{gap: "1px"}}>
                                    <div className="font-size-16 text-muted">
                                        {props.t("Sanal Sınıf")}
                                    </div>
                                    <div className="ms-auto font-size-16 text-muted">
                                        %32
                                    </div>
                                </div>
                                <div className="d-flex" style={{gap: "1px"}}>
                                    <div className="font-size-14 text-muted fw-semibold"
                                         style={{position: "relative", bottom: "0.2rem"}}>
                                        {props.t("Toplam İçerik Sayısı")}: {ExampleData.total_content}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <Progress
                                value={ExampleData.completed_content}
                                max={ExampleData.total_content}
                                barClassName="bg-green"
                                className="progress-lg"
                                color="warning"
                            >{ExampleData.completed_content}</Progress>
                        </div>
                    </div>
                </Col>
                <Col xl={3}>
                    <div className="h-100 shadow p-4 rounded-2 bg-red-gradient"
                         style={{backgroundColor: "#ffffff"}}>
                        <div className="d-flex gap-3 w-100">
                            <div className="d-flex align-items-center">
                                <div className="avatar-xs me-2">
                                    <span
                                        className="avatar-title rounded-1 bg-soft font-size-14"
                                        style={{backgroundColor: "rgba(255,112,112,0.54)"}}>
                                        <img src={Exam} alt="exam" height={24}/>
                                    </span>
                                </div>
                            </div>
                            <div className="justify-content-center align-items-center w-100"
                                 style={{gap: "1rem"}}>
                                <div className="d-flex" style={{gap: "1px"}}>
                                    <div className="font-size-16 text-muted">
                                        {props.t("Sınav")}
                                    </div>
                                    <div className="ms-auto font-size-16 text-muted">
                                        %32
                                    </div>
                                </div>
                                <div className="d-flex" style={{gap: "1px"}}>
                                    <div className="font-size-14 text-muted fw-semibold"
                                         style={{position: "relative", bottom: "0.2rem"}}>
                                        {props.t("Toplam Sınav Sayısı")}: {ExampleData.total_exam}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <Progress
                                value={ExampleData.completed_exam}
                                max={ExampleData.total_exam}
                                barClassName="bg-green"
                                className="progress-lg"
                                color="danger"
                            >{ExampleData.completed_exam}</Progress>
                        </div>
                    </div>
                </Col>
                <Col xl={3}>
                    <div className="h-100 shadow p-4 rounded-2 bg-green-gradient"
                         style={{backgroundColor: "#ffffff"}}>
                        <div className="d-flex gap-3 w-100">
                            <div className="d-flex align-items-center">
                                <div className="avatar-xs me-2">
                                    <span
                                        className="avatar-title rounded-1 bg-soft font-size-14"
                                        style={{backgroundColor: "rgba(80,209,35,0.53)"}}>
                                        <img src={HomeWork} alt="homework" height={24}/>
                                    </span>
                                </div>
                            </div>
                            <div className="justify-content-center align-items-center w-100"
                                 style={{gap: "1rem"}}>
                                <div className="d-flex" style={{gap: "1px"}}>
                                    <div className="font-size-16 text-muted">
                                        {props.t("Ödev Sınıf")}
                                    </div>
                                    <div className="ms-auto font-size-16 text-muted">
                                        %32
                                    </div>
                                </div>
                                <div className="d-flex" style={{gap: "1px"}}>
                                    <div className="font-size-14 text-muted fw-semibold"
                                         style={{position: "relative", bottom: "0.2rem"}}>
                                        {props.t("Toplam Ödev Sayısı")}: {ExampleData.total_home_work}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <Progress
                                value={ExampleData.completed_home_work}
                                max={ExampleData.total_home_work}
                                barClassName="bg-green"
                                className="progress-lg"
                                color="success"
                            >{ExampleData.completed_home_work}</Progress>
                        </div>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}

ProgressBar.propTypes = {
    location: PropTypes.any,
    t: PropTypes.any,
}

export default withRouter(
    withTranslation()(ProgressBar)
)
