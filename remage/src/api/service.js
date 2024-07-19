import axios from "axios";
import { axiosInstance } from "./interceptor";

const BASE_URL = process.env.REACT_APP_API_BACKEND_URL;

export const virtualFitting = async (imageForm) => {
  try {
    const response = await axios.post(
      `http://34.47.76.146:8000/analysis/predict`,
      imageForm,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob",
      }
    );
    
    return response;
  } catch (error) {
    console.error("Error in virtualFitting:", error); // 에러 로그를 추가합니다.
    throw new Error("가상피팅 실패" + error.message);
  }
};
