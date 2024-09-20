import { gender, incomeRange } from "@/api/account/accountInterface";

export interface IAccountAgreement {
  agreeAll: boolean; // 이용약관 동의
  agreedToPrivacyPolicy: boolean; // 개인정보 처리방침 동의
  agreedToEventNotifications: boolean; // 이벤트 알림 동의
  agreedToSMS: boolean; // SMS 수신 동의
  agreedToEmail: boolean; // E-MAIL 수신 동의
  isOver14: boolean; // 만 14세 이상 확인
}

export interface IUserProfileForm {
  profileImage: File | null; // 프로필 이미지
  identityVerification: boolean; // 본인인증 여부
  email: string;
  valificationNum: string;
  userId: string; // 아이디
  password: string; // 비밀번호
  confirmPassword: string; // 비밀번호 확인
  name: string; // 이름
  gender: gender; // 성별
  contactNumber: number; // 연락처
  birthDate: number; // 생년월일 (YYYY-MM-DD 형식)
  location: string; // 거주지
  job: string; // 직업 또는 회사
  incomeRange: incomeRange; // 연 소득 구간
  height: number; // 키 (cm)
  importantFactors: string; // 이성을 만날 때 중요하게 생각하는 항목들 (배열로 다중 선택 가능)
}
