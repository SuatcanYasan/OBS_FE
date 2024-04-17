import React, { useState } from "react"
import PropTypes from "prop-types"
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap"

//i18n
import { withTranslation } from "react-i18next"
// Redux
import { Link, withRouter } from "react-router-dom"

// users
import getUser from "helpers/get_user"


const ProfileMenu = props => {
  const _user = getUser();
  // const navigate = useHistory()
  const [menu, setMenu] = useState(false);
  return (
      <React.Fragment>
        <Dropdown
            isOpen={menu}
            toggle={() => setMenu(!menu)}
            className="d-inline-block"
        >
          <DropdownToggle
              className="btn header-item "
              id="page-header-user-dropdown"
              tag="button"
          >
            <div className="d-flex align-items-center">
              <div className="d-flex">
                <i className="bx bxs-user font-size-24 align-middle me-1 bg-blue text-white p-1 rounded-2" />
              </div>
              <div>
                <span className="d-none d-xl-inline-block ms-2 me-1">{_user?.name} {_user?.lastname}</span>
                <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
              </div>
            </div>

          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-end">
            {/*<Link className="dropdown-item" to={{*/}
            {/*  pathname: "/profile",*/}
            {/*  search: `?customerId=${_user.CustomerCode}`*/}
            {/*}}>*/}
            {/*  <i className="bx bx-user font-size-16 align-middle me-1" />*/}
            {/*  <span>{props.t("Profile")}</span>*/}
            {/*</Link>*/}
            <Link to="/logout" className="dropdown-item">
              <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
              <span>{props.t("Logout")}</span>
            </Link>
            {/*<div className="dropdown-divider" />*/}

          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
  );
};

ProfileMenu.propTypes = {
  success: PropTypes.any,
  t: PropTypes.any
};


export default withRouter(withTranslation()(ProfileMenu))
