import axiosInstance from "./axios-instance";

const apiRequest = async (method, url, options = {}) => {
  try {
    const token = localStorage.getItem("token") || "";
    const response = await axiosInstance({
      method,
      url,
      headers: {
        Authorization: `Bearer ${token}`,
        ...options.headers, // Use options.headers directly here
      },
      ...options, // Spread the rest of the options (including data)
    });
    return { data: response.data, error: null };
  } catch (error) {
    return {
      data: null,
      error: error.response ? error.response.data : error.message,
    };
  }
};

export default apiRequest;
