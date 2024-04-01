import React, { useEffect, useRef, useCallback, useState } from "react"
import { useHistory, useLocation, withRouter } from "react-router-dom"
import PropTypes from "prop-types";


// //Import Scrollbar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";
import { Link } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";
import Select from "react-select";
import { getAreaOptionService } from "../../services/area/areaService"

const SidebarContent = props => {
  const ref = useRef();
  const navigate = useHistory()
  const {isVisible} = props;
  const [areaOptions, setAreaOptions] = useState(null)
  const activateParentDropdown = useCallback((item) => {
    item.classList.add("active");
    const parent = item.parentElement;
    const parent2El = parent.childNodes[1];

    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show"); // ul tag

        const parent3 = parent2.parentElement; // li tag

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add("mm-show"); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); // li
              parent5.childNodes[0].classList.add("mm-active"); // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false;
    }
    scrollElement(item);
    return false;
  }, []);
  const removeActivation = (items) => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i];
      const parent = items[i].parentElement;

      if (item && item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (parent) {
        const parent2El =
          parent.childNodes && parent.childNodes.lenght && parent.childNodes[1]
            ? parent.childNodes[1]
            : null;
        if (parent2El && parent2El.id !== "side-menu") {
          parent2El.classList.remove("mm-show");
        }

        parent.classList.remove("mm-active");
        const parent2 = parent.parentElement;

        if (parent2) {
          parent2.classList.remove("mm-show");

          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.remove("mm-active"); // li
            parent3.childNodes[0].classList.remove("mm-active");

            const parent4 = parent3.parentElement; // ul
            if (parent4) {
              parent4.classList.remove("mm-show"); // ul
              const parent5 = parent4.parentElement;
              if (parent5) {
                parent5.classList.remove("mm-show"); // li
                parent5.childNodes[0].classList.remove("mm-active"); // a tag
              }
            }
          }
        }
      }
    }
  };

  const path = useLocation();
  const activeMenu = useCallback(() => {
    const pathName = path.pathname;
    let matchingMenuItem = null;
    const ul = document.getElementById("side-menu");
    const items = ul.getElementsByTagName("a");
    removeActivation(items);

    for (let i = 0; i < items.length; ++i) {
      if (pathName === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  }, [path.pathname, activateParentDropdown]);

  useEffect(() => {
    ref.current.recalculate();
    getAreaOptionService().then((response) => {
      setAreaOptions(response);
    })
  }, []);
  useEffect(() => {

    new MetisMenu("#side-menu");
    activeMenu();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    activeMenu();
  }, [activeMenu]);

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop;
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300;
      }
    }
  }

  return (
    <React.Fragment>
      <SimpleBar className="h-100" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Field Selection")} </li>
            {isVisible && (
              <Select
                className="font-size-14 pe-3 ps-3 "
                menuPlacement="auto"
                menuPosition="fixed"
                placeholder={props.t("Please Select Field")}
                value={areaOptions?.find(option => option.value === path.search.split("=")[1])}
                onChange={e => {
                  navigate.push(`/field?id=${e.value}`)
                }}
                options={areaOptions ? areaOptions : []}
              />
            )}

            <li className="menu-title">{props.t("Main")} </li>
            <li>
              <Link to="/">
                <i className="bx bx-building-house"/>
                <span>{props.t("Dashboard")}</span>
              </Link>
            </li>
            <li className="menu-title">{props.t("Applications")}</li>
            <li>
              <Link to="/alarm">
                <i className="bx bx-alarm"/>
                <span>{props.t("Alarm")}</span>
              </Link>
            </li>
            <li>
              <Link to="/field-management">
                <i className="bx bx-chat"></i>
                <span>{props.t("Field Management")}</span>
              </Link>
            </li>
            <li>
              <Link to="/inverters">
                <i className="bx bx-server"></i>
                <span>{props.t("Inverters")}</span>
              </Link>
            </li>
            <li>
              <Link to="/transformer">
                <i className="bx bx-bolt-circle"/>
                <span>{props.t("Transformer Substation (I/O)")}</span>
              </Link>
            </li>
            <li>
              <Link to="/grid-values">
                <i className="bx bx-store"></i>
                <span>{props.t("Grid Values")}</span>
              </Link>
            </li>
            <li>
              <Link to="/compensation">
              <i className="bx bx-calculator"></i>
              <span>{props.t("Compensation")}</span>
              </Link>
            </li>
            <li>
              <Link to="/report">
                <i className="bx bx-file"></i>
                <span>{props.t("Report")}</span>
              </Link>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
};

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any
}

export default withRouter(withTranslation()(SidebarContent));
