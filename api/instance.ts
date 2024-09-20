import { getCookie, setCookie } from "@/components/util/setCookie";
import axios, { AxiosError, AxiosInstance } from "axios";

// const BASE_URL = "https://xn--b60b50mo0tbqdri.xn--oi2b61z32a.xn--3e0b707e";
const BASE_URL = "http://43.201.15.20:8080/";
// const BASE_URL = "http://localhost:8081/";

export const publicApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const privateApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    TOKEN: "",
  },
});

// 요청 인터셉터
privateApi.interceptors.request.use(
  (config) => {
    const token = getCookie(); // 'token' 쿠키 가져오기
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 리프래시 토큰
privateApi.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const {
      config,
      response: { status },
    } = error;

    if (status === 403) {
      const originRequest = config;

      console.log("403 새로운 토큰 발급", error.response.headers["authorization"]); // 모든 헤더 출력
      const authorizationHeader = error.response.headers["authorization"]; // 응답 헤더에서 'authorization' 가져오기

      const token = authorizationHeader.substring(7);
      setCookie(token);
      originRequest.header.Authorization = authorizationHeader;

      return axios(originRequest);
    }
    return Promise.reject(error);
  }
);
