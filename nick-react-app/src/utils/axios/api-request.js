import { HttpStatusCode } from "axios";
import axiosInstance from "./axios-instance";

const apiRequest = async (method, url, options = {}) => {
  try {
    const token = localStorage.getItem("token") || "";
    const response = await axiosInstance({
      method,
      url,
      headers: {
        Authorization: `Bearer ${token}`,
        ...options.headers,
      },
      ...options,
      data: options.data || null,
    });
    return { data: response.data, error: null, status: response.status };
  } catch (error) {
    return {
      error: error.error.detail,
      status: HttpStatusCode.BadRequest,
      detail: error.error.detail,
      // status: error.response.status_code,
    };
  }
};

export default apiRequest;
