import { Select, SelectItem } from "@nextui-org/react";
import RedDot from "../redDot";
import { UseFormRegister } from "react-hook-form";

interface ISelectOption {
  key: string;
  label: string;
}

interface ISelectInputProps {
  register: UseFormRegister<any>; // register 함수의 타입
  labelText: string; // 라벨 텍스트
  fieldName: string; // 필드 이름
  selectOptions: ISelectOption[]; // SelectItem 목록
}

export default function SelectInput({ register, labelText, fieldName, selectOptions }: ISelectInputProps) {
  return (
    <label className="mb-10">
      <div className="flex items-center mb-2">
        <span>{labelText}</span>
        <RedDot />
      </div>
      <Select
        {...register(fieldName, { required: true })}
        className="w-full border"
        radius="none"
        placeholder="(선택)"
        size="sm"
        variant="flat"
      >
        {selectOptions.map((option) => (
          <SelectItem key={option.key}>{option.label}</SelectItem>
        ))}
      </Select>
    </label>
  );
}
