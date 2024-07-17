import axios from "axios";
import { axiosInstance } from "./interceptor";

const BASE_URL = process.env.REACT_APP_API_BACKEND_URL;
// const BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const loginUser = async (username, password, userType) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/users/login/${userType==="company"?"b/":""}`,
      {
        username,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.headers['authorization']);
    return response;
  } catch (error) {
    if (error.response) {
      // 서버가 응답을 반환했지만 상태 코드는 2xx 범위 밖입니다.
      throw new Error(error.response.data.detail || "Login failed");
    } else if (error.request) {
      // 요청이 만들어졌지만 응답을 받지 못했습니다.
      throw new Error("No response received from server");
    } else {
      // 요청을 설정하는 중에 문제가 발생했습니다.
      throw new Error(error.message);
    }
  }
};

export const getUserProfile = async (userType) => {
  const token = JSON.parse(localStorage.getItem("auth-storage"))["state"]["accessToken"]
  try {
    const response = await axiosInstance.get(
      `${BASE_URL}/users/profile/${userType==="company"?"b/":""}`,
    );
    // console.log(response);
    return response;
  } catch (error) {
    if (error.response) {
      // 서버가 응답을 반환했지만 상태 코드는 2xx 범위 밖입니다.
      throw new Error(error.response.data.detail || "failed");
    } else if (error.request) {
      // 요청이 만들어졌지만 응답을 받지 못했습니다.
      throw new Error("No response received from server");
    } else {
      // 요청을 설정하는 중에 문제가 발생했습니다.
      throw new Error(error.message);
    }
  }
};