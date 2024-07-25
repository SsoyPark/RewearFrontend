import axios from "axios";
import { axiosInstance } from "./interceptor";
axios.defaults.withCredentials = true;
const baseURL = process.env.REACT_APP_API_BACKEND_URL;
const fastAPIURL = process.env.REACT_APP_API_FASTAPI_URL;
const formDataHeaders = {
  "Content-Type": "multipart/form-data",
};
const jsonDataHeaders = {
  "Content-Type": "application/json",
};

export const virtualFitting = async (imageForm) => {
  console.log(`${fastAPIURL}/analysis/predict`);
  try {
    const response = await axios.post(
      `${fastAPIURL}/analysis/predict`,
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
      { headers: { ...formDataHeaders }, timeout: 30000 }
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
      { headers: { ...formDataHeaders }, timeout: 20000, withCredentials: true }
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

export const getMyOrder = async (orderId) => {
  try {
    const response = await axiosInstance.get(
      `${baseURL}/order/user/orders/${orderId}/`
    );
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

export const getCompanyOrders = async () => {
  try {
    const response = await axiosInstance.get(`${baseURL}/order/requests/`);
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

export const getAcceptedOrders = async () => {
  try {
    const response = await axiosInstance.get(
      `${baseURL}/order/accepted-orders/`
    );
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

export const updateAcceptOrder = async (orderId) => {
  try {
    const response = await axiosInstance.patch(
      `${baseURL}/order/order-accept/${orderId}/`
    );
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

export const updateDeclineOrder = async (orderId) => {
  try {
    const response = await axiosInstance.patch(
      `${baseURL}/order/order-reject/${orderId}/`
    );
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
