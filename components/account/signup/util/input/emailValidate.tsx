"use client";

import { accountApi } from "@/api/account/accountApi";
import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import { UseFormRegister, UseFormSetError, UseFormWatch } from "react-hook-form";

interface IEmailValidate {
  watch: UseFormWatch<any>;
  register: UseFormRegister<any>;
  setError: UseFormSetError<any>;
  errors?: any;
  identityState: boolean;
  setIdentityState: (value: boolean) => void;
}

export default function EmailValidate({
  watch,
  register,
  setError,
  errors,
  identityState,
  setIdentityState,
}: IEmailValidate) {
  // 이메일 인증코드 요청
  const getEmailCode = async () => {
    const email = watch("email");

    try {
      const res = await accountApi.requestGetEmailValification({ email });
      if (res.data.success) {
        window.alert("인증번호를 보냈습니다.");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        window.alert("서버에 응답이 없습니다.");
      }
    }
  };

  const [checkCodeValue, setCheckCodeValue] = useState(false);

  // 이메일 인증코드 확인
  const checkEmailCode = async () => {
    const email = watch("email");
    const authNum = watch("valificationNum");

    try {
      const res = await accountApi.checkEmailValificationNum({ email, authNum });
      if (res.data.success) {
        setIdentityState(true);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError("valificationNum", {
          type: "manual",
          message: "인증번호가 일치하지 않습니다.",
        });
        setCheckCodeValue(true);
        console.log(error.response?.data);
        // window.alert("서버에 응답이 없습니다.");
      }
    }
  };
  return (
    <>
      {identityState ? (
        <Button color="success" disableRipple>
          인증 완료
        </Button>
      ) : (
        <div className="mt-4">
          <div className="flex items-center space-x-2">
            <Input {...register("email")} label="이메일" placeholder="이메일을 입력하세요" type="text" />
            <Button size="lg" className="text-sm" disableRipple onPress={getEmailCode}>
              인증번호 받기
            </Button>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <Input
              {...register("valificationNum")}
              label="인증번호"
              placeholder="6자리 숫자를 입력하세요"
              type="text"
              color={checkCodeValue ? "danger" : "default"}
              isInvalid={checkCodeValue}
              errorMessage={errors?.message}
            />
            <Button size="lg" className="text-sm" disableRipple onPress={checkEmailCode}>
              인증하기
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
