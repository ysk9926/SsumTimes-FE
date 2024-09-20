"use client";

import { Checkbox } from "@nextui-org/react";
import { UseFormRegister } from "react-hook-form";

interface AgreementCheckboxProps {
  register: UseFormRegister<any>; // register 함수의 타입
  labelText: string; // 라벨 텍스트
  fieldName: string; // 필드 이름
  checked: boolean; // 체크 상태 전달
}

export default function AgreementCheckbox({ register, labelText, fieldName, checked }: AgreementCheckboxProps) {
  return (
    <label className="mb-5">
      <Checkbox
        {...register(fieldName)}
        color="default"
        isSelected={checked} // 상태 전달
        size="sm"
      >
        <span className="text-xs">{labelText}</span>
      </Checkbox>
    </label>
  );
}
