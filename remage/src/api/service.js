import axios from "axios";
import { axiosInstance } from "./interceptor";

const baseURL = process.env.REACT_APP_API_BACKEND_URL;
const formDataHeaders = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

export const virtualFitting = async (imageForm) => {
  try {
    const response = await axios.post(
      `http://34.47.76.146:8000/analysis/predict`,
      imageForm,
      {
        formDataHeaders,
        responseType: "blob",
      }
    );

    return response;
  } catch (error) {
    console.error("Error in virtualFitting:", error); // 에러 로그를 추가합니다.
    throw new Error("가상피팅 실패" + error.message);
  }
};

export const postImageAnalyze = async (formData) => {
  try {
    const response = await axiosInstance.post(
      `${baseURL}/analyze/upload/`,
      formData,
      { ...formDataHeaders, timeout: 20000 }
    );
    return response;
  } catch (error) {
    console.error("error in imageAnalyze", error);
    throw new Error("이미지 분석 에러" + error.message);
  }
};

export const postReformRequest = async (formData) => {
  try {
    const response = await axiosInstance.post(
      `${baseURL}/analyze/request/`,
      formData
    );
    return response;
  } catch (error) {
    if (error.response) {
      // 서버가 응답을 반환했지만 상태 코드는 2xx 범위 밖입니다.
      throw new Error(error.response.data.error || "리폼 요청 실패");
    } else if (error.request) {
      // 요청이 만들어졌지만 응답을 받지 못했습니다.
      throw new Error("No response received from server");
    } else {
      // 요청을 설정하는 중에 문제가 발생했습니다.
      throw new Error(error.message);
    }
  }
};
