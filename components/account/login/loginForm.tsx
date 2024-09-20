"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginForm } from "./util/loginInterface";
import TextInput from "./util/input/textInput";
import PasswordInput from "./util/input/passwordInput";
import { Button } from "@nextui-org/react";
import { accountApi } from "@/api/account/accountApi";
import { useRouter } from "next/navigation";
import { setCookie } from "@/components/util/setCookie";
import axios from "axios";

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    mode: "onBlur",
  });
  const onSubmitValid: SubmitHandler<ILoginForm> = async (data) => {
    try {
      const res = await accountApi.login(data);
      if (res.data.success) {
        console.log(res.headers["authorization"]);
        const authorization = res.headers["authorization"];
        if (authorization && authorization.startsWith("Bearer ")) {
          const token = authorization.substring(7);
          setCookie(token);
        }
        router.push("/");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        window.alert("서버에 응답이 없습니다.");
      }
    }
  };
  return (
    <form className="flex flex-col text-sm px-5" onSubmit={handleSubmit(onSubmitValid)}>
      {/* 아이디 */}
      <TextInput
        register={register}
        placeholder="아이디를 입력해주세요"
        fieldName="userId"
        label="아이디"
        error={errors.userId}
      />
      {/* 비밀번호 */}
      <PasswordInput
        register={register}
        placeholder="비밀번호를 입력해주세요"
        fieldName="userPassword"
        label="비밀번호"
        error={errors.userPassword}
      />
      <Button type="submit" className="mt-4">
        로그인
      </Button>
    </form>
  );
}
