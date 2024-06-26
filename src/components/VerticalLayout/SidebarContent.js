import React, {useCallback, useEffect, useRef} from "react"
import {Link, useLocation, withRouter} from "react-router-dom"
import PropTypes from "prop-types";
import classnames from "classnames"


// //Import Scrollbar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";

//i18n
import {withTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {getClassesData} from "../../store/dashboard/actions";

const SidebarContent = props => {
  const ref = useRef();
  const dispatch = useDispatch()
  const location = useLocation();
  let params = new URLSearchParams(location.search)
  const {classesData} = useSelector(state => ({
    classesData: state.Dashboard.classesData,
  }))
  const {isVisible} = props;
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

  const classesClassnames = (item) => {
    if(location.pathname !== "/classes") return "text-black"
    return item.id == params.get("id") ? "text-primary" : "text-black"
  }

  useEffect(() => {
    ref.current.recalculate();
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
  useEffect(() => {
    if(classesData.length > 0) return
    dispatch(getClassesData())
  }, []);
  return (
    <React.Fragment>
      <SimpleBar className="h-100" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Main")} </li>
            <li>
              <Link to="/">
                <i className="bx bx-building-house"/>
                <span>{props.t("Dashboard")}</span>
              </Link>
            </li>
            <li className="menu-title">{props.t("Applications")}</li>
            <li>
              <Link to="/" className="has-arrow">
                <i className="bx bx-alarm"/>
                <span>{props.t("Courses")}</span>
              </Link>
              <ul className="sub-menu">
                {classesData.map((item, index)=>{
                  return (
                      // className={`${classnames({ "currency-buttons": window.innerWidth <= 768 })} font-size-14`}
                      <li key={index}>
                        <Link className={`${classesClassnames(item)}`} to={`/classes?id=${item.id}`}>{item.name}</Link>
                      </li>
                  )
                })}
              </ul>
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
