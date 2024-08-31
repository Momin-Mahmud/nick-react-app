import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor to handle errors
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle response error
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error("Response error:", error.response.data);
      if (error.response.status === 401) {
        // Redirect to login if unauthorized
        window.location.href = "/login";
      }
      return Promise.reject({ error: error.response.data });
    } else if (error.request) {
      // Request was made but no response received
      console.error("Request error:", error.request);
      return Promise.reject({ error: "No response received from server." });
    } else {
      // Something else happened in setting up the request
      console.error("Error:", error.message);
      return Promise.reject({ error: error.message });
    }
  }
);

export default axiosInstance;
