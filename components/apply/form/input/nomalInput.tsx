import RedDot from "../redDot";
import { UseFormRegister } from "react-hook-form";

interface INomalInputProps {
  register: UseFormRegister<any>; // register 함수의 타입
  labelText: string; // 라벨 텍스트
  fieldName: string; // 필드 이름
  placeHolder: string;
}

export default function NomalInput({ register, labelText, fieldName, placeHolder }: INomalInputProps) {
  return (
    <label className=" mb-10">
      <div className=" flex items-center mb-2">
        <span>{labelText}</span>
        <RedDot />
      </div>
      <input
        type="string"
        {...register(fieldName, { required: true })}
        className="w-full border border-gray-200 h-8 px-2 rounded-sm focus:border-black outline-none"
        placeholder={placeHolder}
      />
    </label>
  );
}
interface IApplyForm {
  agreement: boolean;
  name: string;
  phoneNumber: number;
  male: string;
  birth: number;
  address: string;
  job: string; // 직업
  company: string;
  task: string; // 직무
  earnings: number; // 소득
  employmentVerification: File; // 직업 증빙자료
  highSchool: string; // 출신 고등학교
  major: string; // 전공
  doc: string; // 석,박사
  facePhoto1: File;
  feacPhoto2: File;
  bodyPhoto: File;
  height: number; // 키
  weight: number; // 체중
  physicalCharacteristics: string; // 자신의 외모 특징
  drinking: string; // 음주여부
  smoking: string; // 흡연여부
  religion: string; // 종교
  religionParticipation: string; // 종교 참여도
  hobbiesOrInterests: string; // 취미 or 관심사
  personality: string; // 본인의 성향
  values: string; // 가치관
  datingStyle: string; // 연애 스타일
  appealPoints: string; // 그 외 본인의 매력이나 어필 포인트 (가정 환경, 자산, 커리어 등)
  mbti?: string; // MBTI를 알고 계신다면 적어주세요
  mostImportantInPartner: string; // 이성을 만날 때 가장(첫 번째로) 중요한 사항을 골라주세요
  explainMostImportant: string; // 위에서 선택하신 '가장(첫 번째로) 중요한 사항'에 대해 설명해주세요
  secondMostImportantInPartner: string; // 이성을 만날 때 두 번째로 중요한 사항을 골라주세요
  explainSecondMostImportant: string; // 위에서 선택하신 '두 번째로 중요한 사항'에 대해 설명해주세요
  thirdMostImportantInPartner: string; // 이성을 만날 때 세 번째로 중요한 사항을 골라주세요
  explainThirdMostImportant: string; // 위에서 선택하신 '세 번째로 중요한 사항'에 대해 설명해주세요
  lessImportantInPartner: string[]; // 이성을 만날 때 "덜 중요하다"고 생각하는 것들
  otherPartnerPreferences?: string; // 만나고 싶은 분의 다른 특징이 있다면 알려주세요 (그 외 모든 사항)
  absoluteNoInPartner: string; // 이성을 만날 때 "상대방의 이것 만큼은 절대 안된다!" 하는 것
  foodDislikes: string; // 못 드시는 음식이 있다면 꼭 적어주세요 (없는 경우 "없음" 기재)
  drinkingCapacity: string; // 주량은 어느 정도이신가요? (※ 기분 좋게 마실 수 있는 정도 기준)
  applicationMotivation: string; // 하트트래블 신청 동기 또는 기대되는 점
  referrerNameAndPhoneLast4Digits?: string; // 추천인이 있다면 이름과 휴대전화번호 뒤 4자리
  reuse: boolean;
  receiving: boolean;
}
