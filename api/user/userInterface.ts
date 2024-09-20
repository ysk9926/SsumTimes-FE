export interface IGetUserInfoRes {
  success: boolean;
  code: number;
  message: string;
  userInfo: IUserInfo;
}

export interface IUserInfo {
  userCid: number;
  userId: string;
  userName: string;
  profileImgPath: string;
}
