import RedDot from "../redDot";
import { UseFormRegister } from "react-hook-form";

interface ITextareaInputProps {
  register: UseFormRegister<any>; // register 함수의 타입
  labelText: string; // 라벨 텍스트
  fieldName: string; // 필드 이름
  required: boolean;
}

export default function TextareaInput({ register, labelText, fieldName, required }: ITextareaInputProps) {
  return (
    <label className=" mb-10">
      <div className=" flex items-center mb-2">
        <span>{labelText}</span>
        {required && <RedDot />}
      </div>
      <textarea
        {...register(fieldName)}
        className="w-full h-[100px] border border-gray-200 p-2 rounded-sm focus:border-black outline-none text-sm"
      />
    </label>
  );
}
