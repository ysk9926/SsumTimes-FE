"use client";

import { incomeRange } from "@/api/account/accountInterface";
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

export default function SelectInput({ label, fieldName, register, error, disabled }: SelectInputProps) {
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
      {...register(fieldName, { required: "연 소득 구간을 선택해 주세요" })}
    >
      <SelectItem key={incomeRange.사천만원미만}>4천만원 미만</SelectItem>
      <SelectItem key={incomeRange.사천에서육천}>4천만원 ~ 5천만원</SelectItem>
      <SelectItem key={incomeRange.육천에서팔천}>6천만원 ~ 8천만원</SelectItem>
      <SelectItem key={incomeRange.팔천에서일억}>8천만원 ~ 1억원</SelectItem>
      <SelectItem key={incomeRange.일억이상}>1억원 이상</SelectItem>
    </Select>
  );
}
