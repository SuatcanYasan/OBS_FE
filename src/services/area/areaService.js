import {
  GET_ALL_AREA_LIST_URL,
  GET_ALL_AREA_MOCK_LIST_URL,
  GET_AREA_DETAIL_URL,
  GET_AREA_LINE_CHART_URL
} from "helpers/url_helper"
import { errorToast } from "../../components/toastify"
import i18n from "i18next"

const { post, get, del } = require("helpers/api_helper")

export const getAreaOptionService = async () => {
  const response = await get(GET_ALL_AREA_MOCK_LIST_URL)
  if (!response.status) {
    return errorToast(i18n.t(response.message))
  }
  const options = response.data?.map(area => {
    return {
      value: area.area_id,
      label: area.name
    }
  })
  return options
}

export const getAreaService = async () => {
  const response = await get(GET_ALL_AREA_LIST_URL)
  if (!response.status) {
    return errorToast(i18n.t(response.message))
  }
  return response.data
}

export const getTopProductionPowerService = async () => {
  const response = await get(GET_ALL_AREA_MOCK_LIST_URL)

  if (!response.status) {
    return errorToast(i18n.t("An error occurred"))
  }

  const mergedData = []
  const areas = response.data
  const productionPowerData = {
    total_field: i18n.t("Total Production Power"),
    total_value: areas.reduce((sum, item) => sum + Number(item.total_power_generation), 0),
    max: Math.max(...areas.map(item => item.total_power_generation)),
    data: areas.map((item, index) => ({
      value: item.total_power_generation,
      name: item.name,
      unit: item.total_power_generation_unit,
      id: item.area_id
    })).sort((a, b) => b.value - a.value),

    key: 1
  }

  const productionRevenue = {
    total_field: i18n.t("Total Production Earning"),
    total_value: areas.reduce((sum, item) => sum + Number(item.total_earnings), 0),
    max: Math.max(...areas.map(item => item.total_earnings)),
    data: areas.map((item, index) => ({
      value: item.total_earnings,
      name: item.name,
      unit: item.production_revenue_currency,
      id: item.area_id

    })).sort((a, b) => b.value - a.value),
    key: 2
  }

  mergedData.push(productionPowerData, productionRevenue)

  return mergedData
}

export const getAreaDetailService = async (id) => {
  const response = await get(`${GET_AREA_DETAIL_URL}${id}`)
  if (!response.status) {
    return errorToast(i18n.t(response.message))
  }
  return response.data
}

export const getAreaWeatherDetail = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=bc6fa5991c954ab19d2124009242403&q=${city}&lang=tr`
  const response = await get(url)
  if (!response) {
    return errorToast("Error")
  }
  return response
}

export const getLineChartDailyDataService = async (id, progressbarFilter,period) => {
  const response = await get(`${GET_AREA_LINE_CHART_URL}${id}/${period}`)
  if (!response) {
    return errorToast("Error")
  }
  if (progressbarFilter.isMain) {
   const data = response.data.total
    Object.keys(data).forEach(key => {
      data[key].forEach(item => {
        item.type = "line";
      });
    });
    return {data: data, period: response.data.period}
  }

  if (!progressbarFilter.isMain && progressbarFilter.isGenerate) {
    const data = response.data.production
    Object.keys(data).forEach(key => {
      data[key].forEach(item => {
        item.type = "line";
        item.stack = "total";
      });
    });
    return {data: data, period: response.data.period}
  }
  if (!progressbarFilter.isMain && !progressbarFilter.isGenerate) {
    const data = response.data.consumption
    Object.keys(data).forEach(key => {
      data[key].forEach(item => {
        item.type = "line";
      });
    });
    return {data: data, period: response.data.period}
  }
}



