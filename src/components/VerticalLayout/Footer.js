import React from "react"
import { Container, Row, Col } from "reactstrap"
import { withTranslation } from "react-i18next"
import i18n from "../../i18n"
const t = i18n.t;
const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col md={6}>{new Date().getFullYear()} © Beykent.</Col>
            <Col md={6}>
              <div className="text-sm-end d-none d-sm-block">
               {t("Design & Develop by Beykent Team")}
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
