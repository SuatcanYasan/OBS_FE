import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { Col, Container, Row } from "reactstrap"
import { useHistory, withRouter } from "react-router-dom"
import LoginCredential from "components/LoginCredential"
import { getCookie } from "../../helpers/cookie_helper"

const Login = props => {
  const navigate = useHistory();
  const token = getCookie("access_token")

  //meta title
  document.title = "Beykent | Admin Panel";

  useEffect(() => {
  }, [])
  return (
    <React.Fragment>
      {token ? navigate.push("/"):
          <div>
            <Container fluid className="p-0 bg-white">
              <Row className="g-0">
                <Col xl={12}>
                  <div className="auth-full-page-content p-md-5 p-4">
                    <div className="w-100">
                      <div className="d-flex flex-column h-100">
                        <LoginCredential props={props} />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
      }
    </React.Fragment>

  );
};

export default withRouter(Login);

Login.propTypes = {
  history: PropTypes.object,
};
