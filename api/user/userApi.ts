import { AxiosResponse } from "axios";
import { IGetUserInfoRes } from "./userInterface";
import { privateApi } from "../instance";

export const userApi = {
  // 유저 정보 조회
  getUserInfo: (): Promise<AxiosResponse<IGetUserInfoRes>> => {
    return privateApi.get<IGetUserInfoRes>(`/user/info`);
  },
};
