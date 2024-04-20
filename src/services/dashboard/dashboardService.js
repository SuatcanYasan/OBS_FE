import {get} from "../../helpers/api_helper";

export const getAllClassesService = async () => {
  const response = await get('/classes')
  return response.data
}

export const getClassesStatusService = async () => {
  const response = await get('/classes/status')
  return response.data
}