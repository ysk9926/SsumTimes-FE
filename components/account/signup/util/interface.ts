export interface IAccountAgreement {
  agreeAll: boolean; // 이용약관 동의
  agreedToPrivacyPolicy: boolean; // 개인정보 처리방침 동의
  agreedToEventNotifications: boolean; // 이벤트 알림 동의
  agreedToSMS: boolean; // SMS 수신 동의
  agreedToEmail: boolean; // E-MAIL 수신 동의
  isOver14: boolean; // 만 14세 이상 확인
}
