"use client";

import { Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface TextInputProps {
  label: string;
  placeholder: string;
  fieldName: string;
  register: UseFormRegister<any>;
  error?: any; // 에러 메시지를 받을 수 있는 프로퍼티
  type?: string;
}

export default function TextInput({ label, placeholder, fieldName, register, type = "text", error }: TextInputProps) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    if (error !== null && error !== undefined) {
      setValue(true);
    } else {
      setValue(false);
    }
  }, [error]);

  return (
    <Input
      {...register(fieldName, { required: `${label}를(을) 입력해주세요` })}
      label={label}
      className="mt-4"
      placeholder={placeholder}
      type={type}
      color={error ? "danger" : "default"}
      isInvalid={value}
      errorMessage={error?.message}
    />
  );
}
