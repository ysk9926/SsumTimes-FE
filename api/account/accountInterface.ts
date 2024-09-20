export interface IEmailValificationReq {
  email: string;
}

export interface IEmailCheckNumReq {
  email: string;
  authNum: string;
}

export enum gender {
  남자 = "MALE",
  여자 = "FEMALE",
}

export enum incomeRange {
  사천만원미만 = "BELOW_4000",
  사천에서육천 = "FROM_4000_TO_6000",
  육천에서팔천 = "FROM_6000_TO_8000",
  팔천에서일억 = "FROM_8000_TO_10000",
  일억이상 = "ABOVE_10000",
}

export interface ISignupReq {
  userId: string;
  userPwd: string;
  username: string;
  contactNumber: number;
  gender: gender;
  birthDate: number;
  location: string;
  job: string;
  incomeRange: incomeRange;
  height: number;
  importantFactors: string;
  agreedToSms: boolean;
  agreedToEmail: boolean;
}

export interface ILoginReq {
  userId: string;
  userPassword: string;
}
