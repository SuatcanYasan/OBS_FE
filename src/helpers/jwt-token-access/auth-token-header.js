import {getCookie} from "helpers/cookie_helper"

export default function authHeader() {
  const accessToken = JSON.parse(getCookie("access_token"))

  if (accessToken) {
    return { Authorization: accessToken }
  } else {
    return {}
  }
}
