import { axiosInstance } from "./interceptor";

const BASE_URL = process.env.REACT_APP_API_BACKEND_URL;

export const getUserProfile = async (userType) => {
  try {
    const response = await axiosInstance.get(
      `${BASE_URL}/users/profile/${userType === "company" ? "b/" : ""}`
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
