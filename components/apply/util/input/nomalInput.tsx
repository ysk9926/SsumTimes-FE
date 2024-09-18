import RedDot from "../redDot";
import { UseFormRegister } from "react-hook-form";

interface INomalInputProps {
  register: UseFormRegister<any>; // register 함수의 타입
  labelText: string; // 라벨 텍스트
  fieldName: string; // 필드 이름
  placeHolder: string;
}

export default function NomalInput({ register, labelText, fieldName, placeHolder }: INomalInputProps) {
  return (
    <label className=" mb-10">
      <div className=" flex items-center mb-2">
        <span>{labelText}</span>
        <RedDot />
      </div>
      <input
        type="string"
        {...register(fieldName, { required: true })}
        className="w-full border border-gray-200 h-8 px-2 rounded-sm focus:border-black outline-none"
        placeholder={placeHolder}
      />
    </label>
  );
}
