import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 20000,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const authStorage = JSON.parse(localStorage.getItem("auth-storage"));
    const accessToken = authStorage?.state?.accessToken;
    if (accessToken) {
      config.headers["Authorization"] = "Bearer " + accessToken;
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
          const response = await axiosInstance.post(
            "/users/reissue/",
            {
              refresh: refreshToken,
            },
            {
              headers: {
                "Refresh-Token": refreshToken,
              },
            }
          );

          console.log(
            `토큰 만료. 다음 토큰 재생성${response.headers["authorization"]}`
          );
          const newToken = response.headers["authorization"].split(" ")[1];
          authStorage.state.accessToken = newToken;
          localStorage.setItem("auth-storage", JSON.stringify(authStorage));
          axiosInstance.defaults.headers.common["Authorization"] = newToken;
          return axiosInstance(originalRequest);
        } catch (err) {
          console.error("Refresh token expired or invalid.");
          localStorage.removeItem("auth-storage");
          // Redirect to login page or show an error message
        }
      }
    }
    return Promise.reject(error);
  }
);
