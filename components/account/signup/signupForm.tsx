"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import ProfileImageInput from "./util/input/profileImageInput";
import { IUserProfileForm } from "./util/interface";
import TextInput from "./util/input/textInput";
import PasswordInput from "./util/input/passwordInput";
import SelectInput from "./util/input/selectInput";
import GenderSelectInput from "./util/input/genderSelect";
import { useState, useEffect } from "react";
import EmailValidate from "./util/input/emailValidate";
import { useRecoilValue } from "recoil";
import { receiveAgreement } from "@/atom";
import { accountApi } from "@/api/account/accountApi";
import axios from "axios";

export default function SignupForm() {
  // 라우터
  const router = useRouter();
  // recoil벨류
  const agreement = useRecoilValue(receiveAgreement);
  useEffect(() => {
    if (agreement.checked === false) {
      window.alert("이용약관 동의를 먼저 진행해 주세요");
      router.push("/account");
    }
  }, []);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<IUserProfileForm>({
    mode: "onBlur",
  });

  const password = watch("password");

  const onSubmitValid: SubmitHandler<IUserProfileForm> = async (data) => {
    if (duplicateValue === false) {
      window.alert("아이디 중복체크를 먼저 진행해 주세요");
      return;
    }
    try {
      // profileImage가 있는지 확인하고, 없으면 기본값으로 처리
      const profileImage =
        data.profileImage instanceof FileList && data.profileImage.length > 0 ? data.profileImage[0] : null;

      // 회원가입 API 호출
      const res = await accountApi.signup(
        {
          userId: data.userId,
          userPwd: data.password,
          username: data.name,
          contactNumber: data.contactNumber,
          gender: data.gender,
          birthDate: data.birthDate,
          location: data.location,
          job: data.job,
          incomeRange: data.incomeRange,
          height: data.height,
          importantFactors: data.importantFactors,
          agreedToSms: agreement.agreedToSms,
          agreedToEmail: agreement.agreedToEmail,
        },
        profileImage
      ); // profileImage를 함께 전달
      if (res.data.success) {
        router.push("/account/login");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        window.alert(error.response?.data.message);
      }
    }
  };

  const [identityState, setIdentityState] = useState(false);

  // 팝업 함수
  const showPopup = () => {
    alert("이메일 인증을 먼저 진행해주세요.");
  };

  // 필드가 비활성화될 때 클릭 핸들러 적용
  const handleDisabledClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!identityState) {
      e.preventDefault();
      showPopup();
    }
  };

  // 아이디 중복확인
  const [duplicateValue, setDuplicateValue] = useState(false);

  const duplicateIdTest = async () => {
    const userId = watch("userId");
    try {
      const res = await accountApi.duplicateTest(userId);
      if (res.data.success) {
        setDuplicateValue(true);
        clearErrors("userId");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError("userId", {
          type: "manual",
          message: "사용중인 아이디 입니다.",
        });
        console.log(error.response?.data);
      }
    }
  };
  return (
    <div>
      <form className="flex flex-col text-sm px-5" onSubmit={handleSubmit(onSubmitValid)}>
        <div onClick={!identityState ? handleDisabledClick : undefined}>
          {/* 프로필 이미지 */}
          <ProfileImageInput register={register} watch={watch} disabled={!identityState} />
        </div>
        {/* 설명 */}
        <div className="border-l-4 border-l-blue-500 px-4 py-4 bg-gray-50 mb-5">
          <div className="flex flex-col text-sm text-slate-500">
            <span>썸타임즈 회원 가입을 진행합니다.</span>
            <span>회원으로 가입하시면 새로운 썸타임즈 진행 소식을 알려드립니다.</span>
          </div>
        </div>
        {/* 본인인증 */}
        <EmailValidate
          watch={watch}
          register={register}
          setError={setError}
          errors={errors.valificationNum}
          identityState={identityState}
          setIdentityState={setIdentityState}
        />
        <div onClick={!identityState ? handleDisabledClick : undefined}>
          <div className="flex items-center space-x-2">
            {/* 아이디 */}
            <TextInput
              label="아이디"
              placeholder="아이디를 입력하세요"
              fieldName="userId"
              register={register}
              error={errors.userId}
              disabled={!identityState}
              onChange={() => {
                setDuplicateValue(false);
              }}
            />
            <Button
              className="mt-4 text-sm"
              size="lg"
              color={duplicateValue ? "success" : "default"}
              isDisabled={!identityState}
              onPress={duplicateIdTest}
            >
              중복확인
            </Button>
          </div>
          {/* 비밀번호 */}
          <PasswordInput
            label="비밀번호"
            placeholder="비밀번호를 입력하세요"
            fieldName="password"
            register={register}
            error={errors.password}
            disabled={!identityState}
          />

          {/* 비밀번호 확인 */}
          <PasswordInput
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력하세요"
            fieldName="confirmPassword"
            register={register}
            validate={(value: string) => value === password || "비밀번호가 일치하지 않습니다."}
            error={errors.confirmPassword}
            disabled={!identityState}
          />

          {/* 이름 */}
          <TextInput
            label="이름"
            placeholder="이름을 입력하세요"
            fieldName="name"
            register={register}
            error={errors.name}
            disabled={!identityState}
          />

          {/* 성별 */}
          {/* <RadioGroupInput label="성별" fieldName="gender" register={register} /> */}
          <GenderSelectInput
            label="성별"
            fieldName="gender"
            register={register}
            error={errors.gender}
            disabled={!identityState}
          />

          {/* 연락처 */}
          <TextInput
            label="연락처"
            placeholder="연락처를 입력하세요"
            fieldName="contactNumber"
            register={register}
            error={errors.contactNumber}
            disabled={!identityState}
            type="number"
          />

          {/* 생년월일 */}
          <TextInput
            label="생년월일"
            placeholder="YYYY-MM-DD 형식으로 입력하세요"
            fieldName="birthdate"
            register={register}
            type="date"
            error={errors.birthDate}
            disabled={!identityState}
          />

          {/* 거주지 */}
          <TextInput
            label="거주지"
            placeholder="거주지를 입력하세요"
            fieldName="location"
            register={register}
            error={errors.location}
            disabled={!identityState}
          />

          {/* 직업 또는 회사 */}
          <TextInput
            label="직업 또는 회사"
            placeholder="직업 또는 회사명을 입력하세요"
            fieldName="job"
            register={register}
            error={errors.job}
            disabled={!identityState}
          />

          {/* 연 소득 구간 */}
          <SelectInput
            label="연 소득 구간"
            fieldName="incomeRange"
            register={register}
            error={errors.incomeRange}
            disabled={!identityState}
          />

          {/* 키 */}
          <TextInput
            label="키"
            placeholder="키를 입력하세요"
            fieldName="height"
            register={register}
            type="number"
            error={errors.height}
            disabled={!identityState}
          />

          {/* 이성을 만날 때 중요하게 생각하는 항목 */}
          <TextInput
            label="이성을 만날 때 중요하게 생각하는 항목들"
            placeholder="예: 성격, 외모, 직업 등"
            fieldName="importantFactors"
            register={register}
            error={errors.importantFactors}
            disabled={!identityState}
          />

          {/* 가입하기 버튼 */}
          <Button type="submit" radius="sm" className="mt-4 w-full" isDisabled={!identityState}>
            가입하기
          </Button>
        </div>
      </form>
    </div>
  );
}
