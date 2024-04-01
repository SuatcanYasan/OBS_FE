import React, { useState } from "react"
import { Alert, Card, CardBody, Col, Container, Form, FormFeedback, Input, Label, Row } from "reactstrap"
import { Link, withRouter } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import * as Yup from "yup"
import { useFormik } from "formik"
import { loginUser } from "store/actions"
import PropTypes from "prop-types"
import { withTranslation } from "react-i18next"
import Logo from "../assets/images/renkli logo.png"
import LogoMini from "../assets/images/logo.jpeg"

const LoginCredential = (props) => {

    const dispatch = useDispatch();

    const {error} = useSelector(state => ({
        error: state.Login.error
    }));
    const validation = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: "" || '',
            password: "" || '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required(props.t("Please Enter Your Email Address")),
            password: Yup.string().required(props.t("Please Enter Your Password")),
        }),
        onSubmit: (values) => {
            dispatch(loginUser(values, props.history, props));
        }
    });

    return (
        <React.Fragment>
            <div className="account-pages my-5 pt-sm-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5}>
                            <Card className="overflow-hidden">
                                <div className="bg-green bg-soft">
                                    <Row>
                                        <Col className="col-7">
                                            <div className="p-4" style={{color: "#02203E"}}>
                                                <h5 className="">{props.t("Welcome !")}</h5>
                                                <p>{props.t("Sign in to continue to Beykent.")}</p>
                                            </div>
                                        </Col>
                                        <Col className="col-5 align-self-end">
                                            <img src={Logo} alt="" className="img-fluid"/>
                                        </Col>
                                    </Row>
                                </div>
                                <CardBody className="pt-0">
                                    <div>
                                        <Link to="/" className="logo-light-element">
                                            <div className="avatar-md profile-user-wid mb-4">
                                                 <span className="avatar-title rounded-circle bg-light">
                                                    <img
                                                        src={LogoMini}
                                                        alt=""
                                                        className="rounded-circle"
                                                        height="80"
                                                        style={{borderBottom: "5px solid #94cab1"}}
                                                    />
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="p-2">
                                        <Form
                                            className="form-horizontal"
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                validation.handleSubmit();
                                                return false;
                                            }}
                                        >
                                            {error ? <Alert color="danger">{error}</Alert> : null}

                                            <div className="mb-3">
                                                <Label className="form-label">{props.t("Email")}</Label>
                                                <Input
                                                    name="email"
                                                    className="form-control"
                                                    type="email"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.email || ""}
                                                    invalid={
                                                        validation.touched.email && validation.errors.email ? true : false
                                                    }
                                                />
                                                {validation.touched.email && validation.errors.email ? (
                                                    <FormFeedback
                                                        type="invalid">{validation.errors.email}</FormFeedback>
                                                ) : null}
                                            </div>

                                            <div className="mb-3">
                                                <Label className="form-label">{props.t("Password")}</Label>
                                                <Input
                                                    name="password"
                                                    value={validation.values.password || ""}
                                                    type="password"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    invalid={
                                                        validation.touched.password && validation.errors.password ? true : false
                                                    }
                                                />
                                                {validation.touched.password && validation.errors.password ? (
                                                    <FormFeedback
                                                        type="invalid">{validation.errors.password}</FormFeedback>
                                                ) : null}
                                            </div>
                                            <div className="mt-3 d-grid">
                                                <button
                                                    className="btn btn-ranaliz btn-block"
                                                    type="submit"
                                                >
                                                    {props.t("Login")}
                                                </button>
                                            </div>
                                        </Form>
                                    </div>
                                </CardBody>
                            </Card>
                            <div className="mt-5 text-center">
                                <p>
                                    © {new Date().getFullYear()} Beykent. Crafted with{" "}
                                    <i className="mdi mdi-heart text-danger"/> by Beykent Team
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

LoginCredential.propTypes = {
    location: PropTypes.any,
    t: PropTypes.any,
}

export default withRouter(
    withTranslation()(LoginCredential)
)