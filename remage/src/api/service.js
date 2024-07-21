import axios from "axios";
import { axiosInstance } from "./interceptor";
import { json } from "react-router-dom";

const baseURL = process.env.REACT_APP_API_BACKEND_URL;
const formDataHeaders = {
  "Content-Type": "multipart/form-data",
};
const jsonDataHeaders = {
  "Content-Type": "application/json",
};

export const virtualFitting = async (imageForm) => {
  try {
    const response = await axios.post(
      `http://34.47.76.146:8000/analysis/predict`,
      imageForm,
      {
        headers: formDataHeaders,
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
      { headers: { ...formDataHeaders }, timeout: 20000 }
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
      formData,
      { headers: formDataHeaders }
    );
    return response;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.error || "리폼 요청 실패");
    } else if (error.request) {
      throw new Error("No response received from server");
    } else {
      throw new Error(error.message);
    }
  }
};

export const postDalleRequest = async () => {
  try {
    const response = await axiosInstance.post(
      `${baseURL}/analyze/dalle_result/`
    );
    return response;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.error || "리폼 요청 실패");
    } else if (error.request) {
      throw new Error("No response received from server");
    } else {
      throw new Error(error.message);
    }
  }
};

export const postRequestConfirm = async (jsonData) => {
  try {
    const response = await axiosInstance.post(
      `${baseURL}/order/order/`,
      jsonData,
      { headers: jsonDataHeaders }
    );
    return response;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.error || "리폼요청등록실패");
    } else if (error.request) {
      throw new Error("No response received from server");
    } else {
      throw new Error(error.message);
    }
  }
};

export const getMyOrders = async () => {
  try {
    const response = await axiosInstance.get(`${baseURL}/order/user/orders/`);
    return response;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.error || "response failed");
    } else if (error.request) {
      throw new Error("No response received from server");
    } else {
      throw new Error(error.message);
    }
  }
};
