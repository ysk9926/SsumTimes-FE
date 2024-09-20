import { atom } from "recoil";

export const receiveAgreement = atom({
  key: "수신 동의 상태",
  default: {
    agreedToSms: false, // SMS 수신 동의 기본값
    agreedToEmail: false, // 이메일 수신 동의 기본값
    checked: false,
  },
});

export const userState = atom({
  key: "userstate",
  default: { userCid: 0, userId: "", username: "", profileImagePath: "" },
});

export const loggedInVar = atom({
  key: "로그인 상태",
  default: false,
});
