"use client";

import { gender } from "@/api/account/accountInterface";
import { Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface SelectInputProps {
  label: string;
  fieldName: string;
  register: UseFormRegister<any>;
  error?: any;
  disabled?: boolean; // 필드 비활성화를 위한 속성
}

export default function GenderSelectInput({ label, fieldName, register, error, disabled }: SelectInputProps) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    if (error !== null && error !== undefined) {
      setValue(true);
    } else {
      setValue(false);
    }
  }, [error]);
  return (
    <Select
      label={label}
      className="mt-4"
      color={error ? "danger" : "default"}
      isInvalid={value}
      errorMessage={error?.message}
      isDisabled={disabled}
      {...register(fieldName, { required: "성별을 입력해주세요" })}
    >
      <SelectItem key={gender.남자}>남자</SelectItem>
      <SelectItem key={gender.여자}>여자</SelectItem>
    </Select>
  );
}
