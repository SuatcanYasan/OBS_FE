import React from "react"
import i18n from "../i18n"
import { Link } from "react-router-dom"
import { SeperatorIcon } from "../assets/icons/svg_component"

const CustomBreadcrumbs = props => {
  const { breadcrumbItems } = props
  const itemLength = breadcrumbItems?.length
  const t = i18n.t
  return (
    <div className="d-flex">
      <div className="d-flex">
        <div>
          {itemLength > 0 ?
            <Link className="breadcrumbItem" to="/">
              {t("Dashboard")}
            </Link> :
            <div className="font-size-16 breadcrumb-active fw-600" style={{ cursor: "default" }}>
              {t("Dashboard")}
            </div>
          }
        </div>
        {itemLength > 0 && (
          <div className="pe-1 ps-1 d-flex justify-content-center" style={{ placeSelf: "center" }}>
            <SeperatorIcon />
          </div>
        )}
        {breadcrumbItems?.map((item, key) => {
          return (
            <div className="d-flex" key={key} style={{ placeItems: "center" }}>
              {key + 1 !== itemLength ?
                <Link className="breadcrumbItem" to={item.url}>
                  {item.title}
                </Link> :
                <div className="font-size-16 breadcrumb-active fw-600" style={{ cursor: "default" }}>
                  {item.title}
                </div>
              }
              {key + 1 !== itemLength && (
                <div className="pe-1 ps-1 d-flex justify-content-center" style={{ placeSelf: "center" }}>
                  <SeperatorIcon />
                </div>
              )}
            </div>
          )
        })}
      </div>
      <div className="d-flex ms-auto align-self-center gap-2">
        <div>
          {t("Last Update")}:
        </div>
        <div>
          {new Date().toLocaleString()}
        </div>
        <div className="d-flex align-self-center">
          <i className="bx bxs-circle text-green signalEffect" />
        </div>
      </div>
    </div>
  )
}
export default CustomBreadcrumbs

