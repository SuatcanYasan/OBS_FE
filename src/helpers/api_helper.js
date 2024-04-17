import axios from "axios";
import {getCookie} from "./cookie_helper";
export const API_URL = process.env.REACT_APP_API_URL;

const axiosApi = axios.create({
  baseURL: API_URL,
});

axiosApi.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
);

function setAccessToken() {
  const token = getCookie("access_token");
  if (token) {
    axiosApi.defaults.headers.common["token"] = token;
  }
}

export async function get(url, config = {}) {
  setAccessToken();
  axiosApi.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  try {
    let response = await axiosApi.get(url, { ...config });
    return response.data;
  } catch (e) {
    if (e.response?.status === 401) {
      window.location.href = "/logout";
    }
    return {
      status:false,
      message:e.message,
      data: []
    }
  }
}

export async function post(url, body = {}, config = {}) {
  setAccessToken();
  axiosApi.defaults.headers.common["Content-Security-Policy"] = "upgrade-insecure-requests";
  try {
    const response = await axiosApi.post(url, {...body}, {...config});
    return response.data;
  } catch (e) {
    if (e.response?.status === 401) {
      window.location.href = "/logout";
    }
    return {
      status:false,
      message:e.message,
      data: []
    }
  }
}

export async function put(url, data, config = {}) {
  setAccessToken();
  axiosApi.defaults.headers.common["Content-Security-Policy"] = "upgrade-insecure-requests";
  try {
    const response = await axiosApi.put(url, {...data}, {...config});
    return response.data;
  } catch (e) {
    if (e.response?.status === 401) {
      window.location.href = "/logout";
    }
    return {
      status:false,
      message:e.message,
      data: []
    }
  }
}

export async function del(url, config = {}) {
  setAccessToken();
  axiosApi.defaults.headers.common["Content-Security-Policy"] = "upgrade-insecure-requests";
  try {
    let response = await axiosApi.delete(url, { ...config });
    return response.data;
  } catch (e) {
    if (e.response?.status === 401) {
      window.location.href = "/logout";
    }
    return {
      status: false,
      message: e.message,
      data: []
    }
  }
}
