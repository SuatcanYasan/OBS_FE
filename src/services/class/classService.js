import {get, put} from "../../helpers/api_helper";

export const getAllClassesService = async (id) => {
  const response = await get(`/classes/${id}`)
  return response.data
}
export const getClassesInfoService = async (id) => {
  const response = await get(`/classes/${id}/current`);
  const data = response.data;
  const groupedByWeek = {};
  if(data?.length > 0 ){
    data.forEach(item => {
      const week = item.week;
      if (!groupedByWeek[week]) {
        groupedByWeek[week] = []
      }
      groupedByWeek[week].push(item);
    });
    return Object.keys(groupedByWeek).map(week => groupedByWeek[week]);
  }
  return response.data
};

export const completeClassesService = async (id, classes_id) => {
    const response = await put(`/classes/${id}/current/${classes_id}`,{});
    return response.data
}