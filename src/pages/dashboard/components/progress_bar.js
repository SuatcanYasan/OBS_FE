import React, {useEffect, useState} from "react"
import {Col, Progress, Row} from "reactstrap";
import PropTypes from "prop-types";
import {withTranslation} from "react-i18next"
import {withRouter} from "react-router-dom";
import Class from "../../../assets/icons/class.svg"
import Folder from "../../../assets/icons/folder.svg"
import Exam from "../../../assets/icons/exam.svg"
import HomeWork from "../../../assets/icons/homework.svg"
import {calculatePercent} from "../../../business/calculate_percent";
import {getClassesStatusService} from "../../../services/dashboard/dashboardService";

const ProgressBar = props => {
    const [classesStatus, setClassesStatus] = useState({})
    useEffect(() => {
        getClassesStatusService().then(response => {
            setClassesStatus(response)
        })
    }, []);
    console.log(classesStatus)
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
                            <div className="justify-content-center align -items-center w-100"
                                 style={{gap: "1rem"}}>
                                <div className="d-flex" style={{gap: "1px"}}>
                                    <div className="font-size-16 text-muted">
                                        {props.t("Sanal Sınıflar")}
                                    </div>
                                    <div className="ms-auto font-size-16 text-muted">
                                        {calculatePercent(classesStatus.completed_classes, classesStatus.total_classes)}%
                                    </div>
                                </div>
                                <div className="d-flex" style={{gap: "1px"}}>
                                    <div className="font-size-14 text-muted fw-semibold"
                                         style={{position: "relative", bottom: "0.2rem"}}>
                                        {props.t("Toplam Ders Sayısı")}: {classesStatus.total_classes}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <Progress
                                value={classesStatus.completed_classes}
                                max={classesStatus.total_classes}
                                barClassName="bg-green"
                                className="progress-lg"
                                color="info"
                            >{classesStatus.completed_classes}</Progress>
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
                                        {props.t("İçerikler")}
                                    </div>
                                    <div className="ms-auto font-size-16 text-muted">
                                        {calculatePercent(classesStatus.completed_contents,classesStatus.total_content)}%
                                    </div>
                                </div>
                                <div className="d-flex" style={{gap: "1px"}}>
                                    <div className="font-size-14 text-muted fw-semibold"
                                         style={{position: "relative", bottom: "0.2rem"}}>
                                        {props.t("Toplam İçerik Sayısı")}: {classesStatus.total_content}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <Progress
                                value={classesStatus.completed_contents}
                                max={classesStatus.total_content}
                                barClassName="bg-green"
                                className="progress-lg"
                                color="warning"
                            >{classesStatus.completed_contents}</Progress>
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
                                        {props.t("Sınavlar")}
                                    </div>
                                    <div className="ms-auto font-size-16 text-muted">
                                        {calculatePercent(classesStatus.completed_exams, classesStatus.total_exam)}%
                                    </div>
                                </div>
                                <div className="d-flex" style={{gap: "1px"}}>
                                    <div className="font-size-14 text-muted fw-semibold"
                                         style={{position: "relative", bottom: "0.2rem"}}>
                                        {props.t("Toplam Sınav Sayısı")}: {classesStatus.total_exam}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <Progress
                                value={classesStatus.completed_exams}
                                max={classesStatus.total_exam}
                                barClassName="bg-green"
                                className="progress-lg"
                                color="danger"
                            >{classesStatus.completed_exams}</Progress>
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
                                        {props.t("Ödevler")}
                                    </div>
                                    <div className="ms-auto font-size-16 text-muted">
                                        {calculatePercent(classesStatus.completed_homework, classesStatus.total_homework)}%
                                    </div>
                                </div>
                                <div className="d-flex" style={{gap: "1px"}}>
                                    <div className="font-size-14 text-muted fw-semibold"
                                         style={{position: "relative", bottom: "0.2rem"}}>
                                        {props.t("Toplam Ödev Sayısı")}: {classesStatus.total_homework}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <Progress
                                value={classesStatus.completed_homework}
                                max={classesStatus.total_homework}
                                barClassName="bg-green"
                                className="progress-lg"
                                color="success"
                            >{classesStatus.completed_homework}</Progress>
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
