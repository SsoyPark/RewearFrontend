import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BACKEND_URL;
// const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const defaultHeaders = {
  headers: {
    "Content-Type": "application/json",
  },
};
export const signUp = async (
  username,
  nickname,
  password,
  verifyPW,
  phone,
  address,
  detail_address,
  agree_terms,
  agree_privacy,
  receive_sms,
  receive_email
) => {
  try {
    console.log(BASE_URL);
    const requestBody = {
      username,
      nickname,
      password,
      verifyPW,
      phone,
      address,
      detail_address,
      agree_terms,
      agree_privacy,
      receive_sms,
      receive_email,
    };
    console.log(requestBody);
    console.log("요청은잘감");
    const response = await axios.post(
      `${BASE_URL}/users/register/`,
      requestBody,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    if (error.response) {
      // 서버가 응답을 반환했지만 상태 코드는 2xx 범위 밖입니다.
      throw new Error(error.response.data.detail || "SignUp failed");
    } else if (error.request) {
      // 요청이 만들어졌지만 응답을 받지 못했습니다.
      throw new Error("No response received from server");
    } else {
      // 요청을 설정하는 중에 문제가 발생했습니다.
      throw new Error(error.message);
    }
  }
};

export const signUpB = async (
  username,
  nickname,
  business_registration_number,
  company_name,
  password,
  verifyPW,
  phone,
  address,
  detail_address,
  agree_terms,
  agree_privacy,
  receive_sms,
  receive_email
) => {
  try {
    const requestBody = {
      username,
      nickname,
      business_registration_number,
      company_name,
      password,
      verifyPW,
      phone,
      address,
      detail_address,
      agree_terms,
      agree_privacy,
      receive_sms,
      receive_email,
    };
    console.log(requestBody);
    const response = await axios.post(
      `${BASE_URL}/users/register/b/`,
      requestBody,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
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

export const duplicationCheck = async (value, type) => {
  console.log(`닉네임 중복검사 | 유형: ${type}`);
  const types = {
    username: "username-check",
    companyName: "companyname-check",
    nickname: "nickname-check",
  };
  console.log(type);
  const selectedType = types[type];

  const requestBody = {
    username: value,
    company_name: value,
    nickname: value,
  };
  try {
    const response = axios.post(
      `${BASE_URL}/users/${selectedType}/`,
      requestBody,
      defaultHeaders
    );
    return response
  } catch (error) {
    if (error.response) {
      // 서버가 응답을 반환했지만 상태 코드는 2xx 범위 밖입니다.
      throw new Error(error.response.data.detail || "중복검사");
    } else if (error.request) {
      // 요청이 만들어졌지만 응답을 받지 못했습니다.
      throw new Error("No response received from server");
    } else {
      // 요청을 설정하는 중에 문제가 발생했습니다.
      throw new Error(error.message);
    }
  }
};
