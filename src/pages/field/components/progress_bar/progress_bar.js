import React, { useEffect, useState } from "react"
import { Row } from "reactstrap"
import PropTypes from "prop-types"
import { withTranslation } from "react-i18next"
import { withRouter } from "react-router-dom"
import GeneralDetails from "./components/generalDetails"
import Voltage from "./components/Voltage"
import Flow from "./components/Flow"
import Others from "./components/others"


const ProgressBar = props => {
  const { progressbarFilter,areaDetail } = props
  const [detail, setDetail] = useState({})
  useEffect(() => {

    if(progressbarFilter.isGenerate){
      setDetail(areaDetail.production_data)
    }else {
      setDetail(areaDetail.consumption_data)
    }
  }, [progressbarFilter.isGenerate])
  return (
    <React.Fragment>
      <Row className="gy-lg-2">
        {progressbarFilter.general_sum && (<GeneralDetails progressbarFilter={progressbarFilter} areaDetail={detail} />)}
        {progressbarFilter.voltage && (<Voltage areaDetail={detail} />)}
        {progressbarFilter.flow && (<Flow areaDetail={detail}/>)}
        {progressbarFilter.others && (<Others areaDetail={detail}/>)}

      </Row>
    </React.Fragment>
  )
}

ProgressBar.propTypes = {
  location: PropTypes.any,
  t: PropTypes.any
}

export default withRouter(
  withTranslation()(ProgressBar)
)
