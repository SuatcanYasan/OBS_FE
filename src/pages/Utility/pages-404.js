import React from "react"
import { Link, withRouter } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"

//Import Images
import error from "../../assets/images/404-image.png"
import PropTypes from "prop-types"
import { withTranslation } from "react-i18next"

const Pages404 = (props) => {
    //meta title
    document.title = "404 Error Page | Beykent";

    return (
        <React.Fragment>
                <div className="bg-white error-page">
                        <Container>
                            <Row>
                                <Col lg="12">
                                    <div className="text-center mt-5">
                                        <h1 className="display-2 font-weight-medium mt-2">
                                            4<i className="bx bx-buoy bx-spin display-3 text-blue"/>
                                            4
                                        </h1>
                                        <h4 className="text-uppercase">{props.t("Sorry, page not found")}</h4>
                                        <div className="mt-5 text-center">
                                            <Link
                                                className="btn btn-ranaliz"
                                                to="/"
                                            >
                                                {props.t("Back to Dashboard")}
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="justify-content-center mt-5">
                                <Col md="8" xl="6">
                                    <div>
                                        <img src={error} alt="" className="img-fluid"/>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                </div>


        </React.Fragment>
    )
}

Pages404.propTypes = {
    location: PropTypes.any,
    t: PropTypes.any,
}

export default withRouter(
    withTranslation()(Pages404)
)

