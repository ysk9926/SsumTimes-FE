import { Checkbox, CheckboxGroup } from "@nextui-org/react";
import RedDot from "../redDot";
import { UseFormSetValue, UseFormRegister } from "react-hook-form";

interface ICheckboxOption {
  key: string;
  label: string;
}

interface ICheckboxInputProps {
  setValue: UseFormSetValue<any>; // react-hook-form의 setValue
  register: UseFormRegister<any>; // register 함수의 타입
  labelText: string; // 라벨 텍스트
  fieldName: string; // 필드 이름
  checkboxOptions: ICheckboxOption[]; // Checkbox 목록
}

export default function MultiCheckboxInput({
  setValue,
  register,
  labelText,
  fieldName,
  checkboxOptions,
}: ICheckboxInputProps) {
  return (
    <label className="mb-10">
      <div className="flex items-center mb-2">
        <span>{labelText}</span>
        <RedDot />
      </div>
      <CheckboxGroup
        {...register(fieldName, { required: true })}
        color="default"
        className="w-full"
        onChange={(values) => setValue(fieldName, values)} // 선택된 값을 react-hook-form의 setValue로 전달
      >
        {checkboxOptions.map((option) => (
          <Checkbox key={option.key} value={option.key}>
            {option.label}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </label>
  );
}
