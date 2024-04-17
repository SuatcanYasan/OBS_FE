import {get} from "../../helpers/api_helper";

export const getAllClassesService = async () => {
  const response = await get('/classes')
  return response.data
}