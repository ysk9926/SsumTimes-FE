"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Agreement from "./agreement";
import { Button } from "@nextui-org/react";
import { IApplyForm } from "../util/interface";
import AgreementCheckbox from "../util/input/checkbox";
import NomalInput from "../util/input/nomalInput";
import RedDot from "../util/redDot";
import FileInput from "../util/input/fileInput";
import SelectInput from "../util/input/selectInput";
import {
  drinkingOptions,
  earningOptions,
  importInPartnerOptions,
  religionOptions,
  smokingOptions,
} from "../util/selectitems";
import TextareaInput from "../util/input/textareaInput";
import MultiCheckboxInput from "../util/input/multiSelectInput";

export default function Form() {
  // 로그인 폼
  const { register, watch, setValue, handleSubmit } = useForm<IApplyForm>({
    mode: "onChange",
  });

  // submit 함수 추가
  const onSubmitValid: SubmitHandler<IApplyForm> = async (data) => {};

  const otherReligion = watch("otherReligion");
  return (
    <div className="px-5 text-sm">
      <form className=" flex flex-col" onSubmit={handleSubmit(onSubmitValid)}>
        <Agreement />
        {/* 개인정보 수집 동의 */}
        <AgreementCheckbox register={register} labelText="개인정보 수집 및 이용에 동의합니다." fieldName="agreement" />
        {/* 이름 */}
        <NomalInput
          register={register}
          labelText="성함을 알려주세요. (참가 당일 신분증 인증하는 정보와 일치해야 합니다)"
          fieldName="name"
          placeHolder=""
        />
        {/* 핸드폰 번호 */}
        <NomalInput
          register={register}
          labelText="휴대전화번호를 입력해주세요. (신청서 제출 완료 안내 문자 발송용)"
          fieldName="phoneNumber"
          placeHolder="- 없이 작성해주세요"
        />
        {/* 성별 */}
        <label className=" mb-10">
          <div className=" flex items-center mb-2">
            <span>성별을 선택해주세요.</span>
            <RedDot />
          </div>
          <div className="flex flex-col space-y-2">
            <label className=" space-x-2 flex items-center">
              <input type="radio" {...register("male", { required: true })} value="male" />
              <span>남자</span>
            </label>
            <label className=" space-x-2 flex items-center">
              <input type="radio" {...register("male", { required: true })} value="female" />
              <span>여자</span>
            </label>
          </div>
        </label>
        {/* 생년월일 */}
        <label className=" mb-10">
          <div className=" flex items-center mb-2">
            <span>생년월일을 입력해주세요.</span>
            <RedDot />
          </div>
          <input
            type="date"
            {...register("birth", { required: true })}
            className="w-full border border-gray-200 h-8 px-2 rounded-sm focus:border-black outline-none"
          />
        </label>
        {/* 거주지 */}
        <NomalInput
          register={register}
          labelText="거주지를 입력해주세요. (시군구 단위, 예 : 서울 OO구 등)"
          fieldName="address"
          placeHolder=""
        />
        {/* 직업 */}
        <NomalInput
          register={register}
          labelText="직업(현재 하고 있는 일)을 입력해주세요.(예: 회사원 등)"
          fieldName="job"
          placeHolder=""
        />
        {/* 재직중인 회사 */}
        <NomalInput
          register={register}
          labelText="재직 중인 회사가 있다면 알려주세요.(예: 케미컴퍼니, 없음 등)"
          fieldName="company"
          placeHolder=""
        />
        {/* 직무 */}
        <NomalInput
          register={register}
          labelText="직군 또는 직무를 입력해주세요. (예: 대표, 기획, 영업 등)"
          fieldName="task"
          placeHolder=""
        />
        {/* 소득 */}
        <SelectInput
          register={register}
          labelText="연 소득 구간을 선택해주세요."
          fieldName="earnings"
          selectOptions={earningOptions}
        />
        {/* 직업 증명파일 */}
        <FileInput
          register={register}
          labelText=" 직업 또는 직장 증빙 자료를 제출해주세요. (명함, 재직증명서, 사업자등록증 등) ※ 지금 제출이 어려우시면,
        참가자로 선정된 후 별도로 제출하시면 됩니다."
          fieldName="employmentVerification"
        />
        {/* 출신 고등학교 */}
        <NomalInput
          register={register}
          labelText="졸업한 고등학교를 입력해주세요."
          fieldName="highSchool"
          placeHolder=""
        />
        {/* 출신 대학 */}
        <NomalInput register={register} labelText="대학교 전공을 입력해주세요." fieldName="major" placeHolder="" />
        {/* 석 박사 */}
        <label className=" mb-10">
          <div className=" flex items-center mb-2">
            <span>석사 또는 박사 학위가 있다면 입력해주세요. (예: 한국대학교 OO학 석사, 박사)</span>
          </div>
          <input
            type="string"
            {...register("doc")}
            className="w-full border border-gray-200 h-8 px-2 rounded-sm focus:border-black outline-none"
          />
        </label>
        {/* 얼굴사진 1 */}
        <FileInput
          register={register}
          labelText="본인 사진을 제출 해주세요.(1/3) (얼굴이 잘 보이는, 실물에 가까운 사진으로 제출해주세요.)"
          fieldName="facePhoto1"
        />
        {/* 얼굴사진 2 */}
        <FileInput
          register={register}
          labelText="본인 사진을 제출 해주세요.(2/3) (얼굴이 잘 보이는, 실물에 가까운 사진으로 제출해주세요.)"
          fieldName="facePhoto2"
        />
        {/* 전신사진 */}
        <FileInput
          register={register}
          labelText="본인 사진을 제출 해주세요.(3/3) (체형을 알 수 있는, 전신 사진을 제출해주세요.)"
          fieldName="bodyPhoto"
        />
        {/* 키 */}
        <NomalInput register={register} labelText="키가 몇 cm이신가요?" fieldName="height" placeHolder="" />
        {/* 체중 */}
        <NomalInput register={register} labelText="체중이 몇 kg이신가요?" fieldName="weight" placeHolder="" />
        {/* 외모 특징 */}
        <TextareaInput
          register={register}
          labelText="더 자세히 표현하고 싶은 본인의 외모 특징/스타일이 있다면 적어주세요."
          fieldName="physicalCharacteristics"
          required={false}
        />
        {/* 음주 여부 */}
        <SelectInput
          register={register}
          labelText="음주를 하시나요?"
          fieldName="drinking"
          selectOptions={drinkingOptions}
        />

        {/* 흡연 여부 */}
        <SelectInput
          register={register}
          labelText="흡연을 하시나요?"
          fieldName="smoking"
          selectOptions={smokingOptions}
        />
        {/* 종교 */}
        <label className=" mb-10">
          <div className=" flex items-center mb-2">
            <span>종교가 있으신가요?</span>
            <RedDot />
          </div>
          <div className="flex flex-col space-y-2">
            <label className=" space-x-2 flex items-center">
              <input type="radio" {...register("religion", { required: true })} value="none" />
              <span>종교 없음</span>
            </label>
            <label className=" space-x-2 flex items-center">
              <input type="radio" {...register("religion", { required: true })} value="buddhism" />
              <span>불교</span>
            </label>
            <label className=" space-x-2 flex items-center">
              <input type="radio" {...register("religion", { required: true })} value="protestant" />
              <span>기독교(개신교)</span>
            </label>
            <label className=" space-x-2 flex items-center">
              <input type="radio" {...register("religion", { required: true })} value="catholic" />
              <span>천주교</span>
            </label>
            <label className=" space-x-2 flex items-center">
              <input type="radio" {...register("religion", { required: true })} value={otherReligion || "other"} />
              <span>기타:</span>
              <input type="text" {...register("otherReligion")} className="border rounded px-2 py-1 outline-none" />
            </label>
          </div>
        </label>
        {/* 종교 참여도 */}
        <SelectInput
          register={register}
          labelText="종교 관심도"
          fieldName="religionInterest"
          selectOptions={religionOptions}
        />
        {/* 취미 관심사 */}
        <TextareaInput
          register={register}
          labelText="본인의 취미, 특기, 관심사 등에 대해 알려주세요"
          fieldName="hobbiesOrInterests"
          required={true}
        />
        {/* 성향 가치관 */}
        <TextareaInput
          register={register}
          labelText="본인의 성향, 가치관, 연애 스타일 등에 대해 알려주세요"
          fieldName="personality"
          required={true}
        />
        {/* 본인의 매력 */}
        <TextareaInput
          register={register}
          labelText="그 외 본인의 매력이나 어필 포인트가 있다면 적어주세요 (가정환경, 자산, 커리어 등)"
          fieldName="appealPoints"
          required={true}
        />
        {/* MBTI */}
        <label className=" mb-10">
          <div className=" flex items-center mb-2">
            <span>MBTI를 알고 계신다면 적어주세요</span>
          </div>
          <input
            type="string"
            {...register("mbti")}
            className="w-full border border-gray-200 h-8 px-2 rounded-sm focus:border-black outline-none"
          />
        </label>
        {/* 이성을 보는 기준 */}
        <SelectInput
          register={register}
          labelText="이성을 만날 때 가장(첫 번째로) 중요한 사항을 골라주세요"
          fieldName="mostImportantInPartner"
          selectOptions={importInPartnerOptions}
        />
        {/* 이성이 보는 기준의 이유 */}
        <TextareaInput
          register={register}
          labelText="위에서 선택하신 '가장(첫 번째로) 중요한 사항'에 대해 설명해주세요"
          fieldName="explainMostImportant"
          required={true}
        />
        {/* 이성을 보는 기준 두번째 */}
        <SelectInput
          register={register}
          labelText="이성을 만날 때 두 번쨰로 중요한 사항을 골라주세요"
          fieldName="secondMostImportantInPartner"
          selectOptions={importInPartnerOptions}
        />
        {/* 두번쨰를 선택한 이유 */}
        <TextareaInput
          register={register}
          labelText="위에서 선택하신 '두 번째로 중요한 사항'에 대해 설명해주세요"
          fieldName="explainSecondMostImportant"
          required={true}
        />
        {/* 이성을 보는 기준 세번째 */}
        <SelectInput
          register={register}
          labelText="이성을 만날 때 세 번쨰로 중요한 사항을 골라주세요"
          fieldName="thirdMostImportantInPartner"
          selectOptions={importInPartnerOptions}
        />
        {/* 세번쨰를 선택한 이유 */}
        <TextareaInput
          register={register}
          labelText="위에서 선택하신 '세 번째로 중요한 사항'에 대해 설명해주세요"
          fieldName="explainThirdMostImportant"
          required={true}
        />
        {/* 덜 중요하다고 생각하는 것 */}
        <MultiCheckboxInput
          register={register}
          setValue={setValue}
          labelText='이성을 만날 때"덜 중요하다"고 생각하는 것들을 모두 선택해주세요.'
          fieldName="lessImportantInPartner"
          checkboxOptions={importInPartnerOptions}
        />
        {/* 만나고 싶은 사람의 특징 */}
        <TextareaInput
          register={register}
          fieldName="otherPartnerPreferences"
          labelText="만나고 싶은 분의 다른 특징이 있다면 알려주세요.(그 외 모든 사항)"
          required={false}
        />
        {/* 이것만은 안된다 */}
        <TextareaInput
          register={register}
          fieldName="absoluteNoInPartner"
          labelText='이성을 만날 때 "상대방의 이것 만큼은 절대 안된다!"하는 것이 있다면?'
          required={false}
        />
        {/* 못먹는 음식 */}
        <NomalInput
          register={register}
          labelText='못 드시는 음식이 있다면 꼭 적어주세요. (없는 경우 "없음" 기재)'
          fieldName="foodDislikes"
          placeHolder=""
        />
        {/* 주량 */}
        <NomalInput
          register={register}
          labelText="주량은 어느 정도이신가요?(기분 좋게 마실 수 있는 정도 기준)"
          fieldName="drinkingCapacity"
          placeHolder=""
        />
        {/* 신청 동기 */}
        <TextareaInput
          register={register}
          fieldName="applicationMotivation"
          labelText="썸타임즈 신청 동기는 무엇인가요? 또는 어떤 점들이 기대되시나요?"
          required={true}
        />
        {/* 추천인 */}
        <label className=" mb-10">
          <div className=" flex items-center mb-2">
            <span>
              [추천인]썸타임즈를 추천해준 친구가 있다면, 추천해주신 썸타임즈 회원의 이름과 휴대전화번호 뒤 4자리를
              적어주세요.(예: 홍길동, 1234)
            </span>
          </div>
          <input
            type="string"
            {...register("referrerNameAndPhoneLast4Digits", { required: true })}
            className="w-full border border-gray-200 h-8 px-2 rounded-sm focus:border-black outline-none"
          />
        </label>
        {/* 신청서 재활용 동의 */}
        <span className="mb-3">
          앞으로의 썸타임즈 신청 시 본 신청서의 내용을 참가자 선정에 활용하는 것에 동의합니다. (체크하시면 매번 신청서를
          다시 작성하실 필요가 없습니다. 의사 철회 및 신청서 파기 요청은 "마이페이지 &gt; 1:1문의"에 남겨주시면 반영해
          드립니다.)
        </span>
        <AgreementCheckbox register={register} labelText="네, 동의합니다." fieldName="reuse" />
        {/* 수신 동의 */}
        <span className="mb-3">
          본 신청서의 내용을 바탕으로 새로운 모임 참가 추천을 받겠습니다. (체크하시면 개별적으로 썸타임즈 회차 추천
          연락을 드립니다. 의사 철회 및 신청서 파기 요청은 "마이페이지 &gt; 1:1문의"에 남겨주시면 반영해 드립니다.)
        </span>
        <AgreementCheckbox register={register} labelText="네, 동의합니다." fieldName="reuse" />
        <Button radius="none" type="submit">
          제출하기
        </Button>
      </form>
    </div>
  );
}
