import { GET_ALL_DEVICES_URL } from "helpers/url_helper"
import { errorToast } from "../../components/toastify"

const { post,get,del } = require("helpers/api_helper");

export const getDeviceService = async (id) => {
  const response = await get(`${GET_ALL_DEVICES_URL}${id}/inverter`);
  return response;
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
