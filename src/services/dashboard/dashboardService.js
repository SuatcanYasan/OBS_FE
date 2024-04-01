import { GET_AREA_DETAIL_URL } from "helpers/url_helper"
import { errorToast } from "../../components/toastify"
import i18n from "i18next"

const { post,get,del } = require("helpers/api_helper");

export const getProgressBarData = async (id) => {
  const response = await get(`${GET_AREA_DETAIL_URL}areas/totaldata`);
  if (!response.status) {
    return errorToast(i18n.t(response.message));
  }
  return response.data;
}

// export const postCompanyListService = async (data) => {
//
//   return await post(GET_COMPANY_URL, data);
// }
//
// export const delCompanyListService = async (id) => {
//
//   return await del(`/company/${id}`);
// }