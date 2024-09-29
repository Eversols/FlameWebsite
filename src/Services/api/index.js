import axios from "axios";
import { persistor, store } from "../store";
import { voxService } from "../voximplant";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  function (config) {
    // const TOKEN = store.getState().auth.token;
    const TOKEN = localStorage.getItem("token");
    if (TOKEN) {
      config.headers["Authorization"] = `Bearer ${TOKEN}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// List of all the endpoints
export const post = (url, body, config) => api.post(url, body, config);
export const get = (url) => api.get(url);

// Interceptors
api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest.isRetry = true;
      try {

        localStorage.removeItem("token");
        voxService.get().disconnect();
        persistor.purge();
        localStorage.removeItem("persist:root");
        window.location = '/';
        // await axios.get(`${import.meta.env.VITE_BASE_URL}/api/refresh`, {
        //   withCredentials: true,
        // });

        // return api.request(originalRequest);
      } catch (err) {
        console.log(err.message);
      }
    }
    throw error;
  }
);

export default api;
