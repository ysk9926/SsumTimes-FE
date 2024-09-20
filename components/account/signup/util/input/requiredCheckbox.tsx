"use client";

import { Checkbox } from "@nextui-org/react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

interface AgreementCheckboxProps {
  register: UseFormRegister<any>; // register 함수의 타입
  labelText: string; // 라벨 텍스트
  required: boolean;
  fieldName: string; // 필드 이름
  checked: boolean; // 체크 상태 전달
  error?: any;
}

export default function RequiredCheckbox({
  register,
  labelText,
  required,
  fieldName,
  checked,
  error,
}: AgreementCheckboxProps) {
  return (
    <label className="mb-5">
      <Checkbox
        {...register(fieldName, { required: required })}
        color="default"
        isSelected={checked} // 상태 전달
        size="sm"
        // color={error ? "danger" : "default"}
      >
        <div>
          <span className={`text-xs ${error ? "text-red-500" : ""}`}>{labelText}</span>
          {required ? (
            <span className="text-xs text-red-500 pl-3">(필수)</span>
          ) : (
            <span className="text-xs text-gray-500">(선택)</span>
          )}
        </div>
      </Checkbox>
    </label>
  );
}
