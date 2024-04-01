import PropTypes from "prop-types"
import React, { useEffect } from "react"
//redux
import { useDispatch } from "react-redux"
import { withRouter } from "react-router-dom"

import { logoutUser } from "../../store/actions"

const Logout = props => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(logoutUser(props.history))
  }, [dispatch])

  return <></>
}

Logout.propTypes = {
  history: PropTypes.object,
}

export default withRouter(Logout)
