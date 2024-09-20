"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { IAccountAgreement } from "../util/interface";
import RequiredCheckbox from "../util/input/requiredCheckbox";
import { Button, Checkbox } from "@nextui-org/react";
import TermsOfService from "./termsOfService";
import NotificationText from "./notificationText";
import AgreedSmsText from "./agreedSmsText";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { receiveAgreement } from "@/atom";

export default function SignupAgreeForm() {
  const router = useRouter();

  const [agreement, setAgreement] = useRecoilState(receiveAgreement);

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IAccountAgreement>({});
  // submit 함수 추가
  const onSubmitValid: SubmitHandler<IAccountAgreement> = async (data) => {
    // 수신 동의 내용을 Recoil atom으로 업데이트
    setAgreement({
      agreedToSms: data.agreedToSMS,
      agreedToEmail: data.agreedToEmail,
      checked: true,
    });

    // 회원가입 페이지로 이동
    router.push("/account/signup");
  };

  const checkValue = watch("agreeAll");
  const agreedToPrivacyPolicy = watch("agreedToPrivacyPolicy");
  const agreedToEventNotifications = watch("agreedToEventNotifications");
  const agreedToSMS = watch("agreedToSMS");
  const agreedToEmail = watch("agreedToEmail");
  const isOver14 = watch("isOver14");

  const handleAll = () => {
    console.log(!checkValue);
    setValue("agreedToPrivacyPolicy", !checkValue);
    setValue("agreedToEventNotifications", !checkValue);
    setValue("agreedToSMS", !checkValue);
    setValue("agreedToEmail", !checkValue);
    setValue("isOver14", !checkValue);
  };
  return (
    <form className="flex flex-col px-5" onSubmit={handleSubmit(onSubmitValid)}>
      <label className="mb-10">
        <Checkbox {...register("agreeAll")} color="default" onClick={handleAll} size="sm">
          <span className="text-xs">이용약관, 개인정보 수집 및 이용에 모두 동의합니다.</span>
        </Checkbox>
      </label>
      {/* 이용약관 동의 */}
      <RequiredCheckbox
        register={register}
        labelText="이용약관 동의"
        required={true}
        fieldName="agreedToPrivacyPolicy"
        checked={agreedToPrivacyPolicy}
        error={errors.agreedToPrivacyPolicy}
      />
      <TermsOfService />
      {/* 개인정보 수집 및 이용 동의 */}
      <RequiredCheckbox
        register={register}
        labelText="개인정보 수집 밎 이용 동의"
        required={true}
        fieldName="agreedToEventNotifications"
        checked={agreedToEventNotifications} // 개별 체크박스 상태 전달
        error={errors.agreedToEventNotifications}
      />
      <NotificationText />
      {/* 수신 동의 */}
      <AgreedSmsText />
      <RequiredCheckbox
        register={register}
        labelText="SMS 수신 동의"
        required={false}
        fieldName="agreedToSMS"
        checked={agreedToSMS} // 개별 체크박스 상태 전달
      />
      <RequiredCheckbox
        register={register}
        labelText="E-MAIL 수신 동의"
        required={false}
        fieldName="agreedToEmail"
        checked={agreedToEmail} // 개별 체크박스 상태 전달
      />
      {/* 14세 이상 */}
      <RequiredCheckbox
        register={register}
        labelText="만 14세 이상입니다."
        required={true}
        fieldName="isOver14"
        checked={isOver14} // 개별 체크박스 상태 전달
        error={errors.isOver14}
      />
      <Button radius="none" type="submit">
        가입하기
      </Button>
    </form>
  );
}
