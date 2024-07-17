import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: 'http://localhost:8000',
  timeout: 1000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const authStorage = JSON.parse(localStorage.getItem("auth-storage"));
    const accessToken = authStorage?.state?.accessToken;
    if (accessToken) {
      config.headers['Authorization'] = 'Bearer ' + accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const authStorage = JSON.parse(localStorage.getItem("auth-storage"));
      const refreshToken = authStorage?.state?.refreshToken;
      // console.log(refreshToken);
      if (refreshToken) {
        try {
          const response = await axiosInstance.post('/token/refresh/', {
            refresh: refreshToken,
          });
          authStorage.state.accessToken = response.data.access;
          localStorage.setItem("auth-storage", JSON.stringify(authStorage));
          axiosInstance.defaults.headers.common['Authorization'] =
            'Bearer ' + response.data.access;
          return axiosInstance(originalRequest);
        } catch (err) {
          console.error('Refresh token expired or invalid.');
          localStorage.removeItem("auth-storage");
          // Redirect to login page or show an error message
        }
      }
    }
    return Promise.reject(error);
  }
);
