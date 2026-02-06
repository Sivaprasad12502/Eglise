import axios from "axios";
import { refreshTokenApi } from "./userApi";
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

//Interceptors
axiosClient.interceptors.request.use(
  (confiq) => {
    const token = localStorage.getItem("token");
    if (token) {
      confiq.headers.Authorization = `Bearer ${token}`;
    }
    return confiq;
  },
  (error) => Promise.reject(error),
);

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token);
  });
  failedQueue = [];
};
axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.confiq;
    //if access token expired
    if (error.response?.status === 401 && !originalRequest.__retry) {
      originalRequest.__retry = true;
      //if refresh already running -> wait
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: (token) => {
              originalRequest.headers.Authorization = `Bearer ${token}`;
              resolve(axiosClient(originalRequest));
            },
            reject,
          });
        });
      }
      isRefreshing = true;
      try {
        const { token } = await refreshTokenApi();
        localStorage.setItem("token", token);
        axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
        processQueue(null, token);
        return axiosClient(originalRequest);
      } catch (error) {
        processQueue(error, null);
        localStorage.clear();
        window.location.href = "/login";
        return Promise.reject(error);
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(error);
  },
);
export default axiosClient;
