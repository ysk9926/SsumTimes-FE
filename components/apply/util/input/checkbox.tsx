import { Checkbox } from "@nextui-org/react";
import { UseFormRegister } from "react-hook-form";

interface AgreementCheckboxProps {
  register: UseFormRegister<any>; // register 함수의 타입
  labelText: string; // 라벨 텍스트
  fieldName: string; // 필드 이름
}

export default function AgreementCheckbox({ register, labelText, fieldName }: AgreementCheckboxProps) {
  return (
    <label className="mb-10">
      <Checkbox
        color="default"
        {...register(fieldName, { required: true })} // react-hook-form과 연결
      >
        <span className="text-sm">{labelText}</span>
      </Checkbox>
    </label>
  );
}
