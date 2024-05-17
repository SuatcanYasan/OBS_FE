import {get} from "../../helpers/api_helper";

export const getAllClassesService = async (id) => {
  const response = await get(`/classes/${id}`)
  return response.data
}
export const getClassesInfoService = async (id) =>{
  const response = await get(`/classes/${id}/current`)
  return response.data
}