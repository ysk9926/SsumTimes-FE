import { AxiosResponse } from "axios";
import { publicApi } from "../instance";
import { CommonResponse } from "../globalInterface";
import { IEmailCheckNumReq, IEmailValificationReq, ILoginReq, ISignupReq } from "./accountInterface";

export const accountApi = {
  // 이메일 인증번호 요청
  requestGetEmailValification: (data: IEmailValificationReq): Promise<AxiosResponse<CommonResponse>> => {
    return publicApi.post<IEmailValificationReq, AxiosResponse<CommonResponse>>(`/public/mail/send-mail`, data);
  },

  // 이메일 인증번호 확인
  checkEmailValificationNum: (data: IEmailCheckNumReq): Promise<AxiosResponse<CommonResponse>> => {
    return publicApi.post<IEmailCheckNumReq, AxiosResponse<CommonResponse>>(`/public/mail/check-auth-num`, data);
  },

  // 회원가입
  signup: (data: ISignupReq, profileImage: File | null): Promise<AxiosResponse<CommonResponse>> => {
    // FormData 객체 생성
    const formData = new FormData();

    // profileImage가 null이 아닐 경우에만 FormData에 파일 추가
    if (profileImage) {
      formData.append("profileImage", profileImage);
    }

    // signupInfo 추가 (JSON 데이터를 문자열로 변환하여 FormData에 append)
    const signupInfoJson = JSON.stringify(data);
    const signupInfoBlob = new Blob([signupInfoJson], {
      type: "application/json",
    });
    formData.append("signupInfo", signupInfoBlob);

    // Axios로 multipart/form-data 요청 전송
    return publicApi.post<FormData, AxiosResponse<CommonResponse>>(`public/auth/signup`, formData);
  },

  // 로그인
  login: (data: ILoginReq): Promise<AxiosResponse<CommonResponse>> => {
    return publicApi.post<ILoginReq, AxiosResponse<CommonResponse>>(`public/auth/login`, data);
  },

  // 아이디 중복 확인
  duplicateTest: (userId: string): Promise<AxiosResponse<CommonResponse>> => {
    return publicApi.get<string, AxiosResponse<CommonResponse>>(`public/auth/duplicate-test/user-id`, {
      params: {
        userId: userId, // 쿼리 파라미터로 userId 전달
      },
    });
  },
};
