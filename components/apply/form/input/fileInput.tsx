import RedDot from "../redDot";
import { UseFormRegister } from "react-hook-form";

interface IFilelInputProps {
  register: UseFormRegister<any>; // register 함수의 타입
  labelText: string; // 라벨 텍스트
  fieldName: string; // 필드 이름
}

export default function FileInput({ register, labelText, fieldName }: IFilelInputProps) {
  return (
    <label className=" mb-10">
      <div className=" flex items-center mb-2">
        <span>{labelText}</span>
        <RedDot />
      </div>
      <input type="file" {...register(fieldName, { required: true })} />
    </label>
  );
}
