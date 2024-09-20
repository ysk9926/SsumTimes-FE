import { EyeFilledIcon } from "@/icon/global/fillEye";
import { EyeSlashFilledIcon } from "@/icon/global/slashEye";
import { Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface PasswordInputProps {
  label: string;
  placeholder: string;
  fieldName: string;
  register: UseFormRegister<any>;
  validate?: (value: string) => boolean | string; // 검증 로직 (선택적)
  error?: any;
  disabled?: boolean; // 필드 비활성화를 위한 속성
}

export default function PasswordInput({
  label,
  placeholder,
  fieldName,
  register,
  validate,
  error,
  disabled = false,
}: PasswordInputProps) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [value, setValue] = useState(false);
  useEffect(() => {
    if (error !== null && error !== undefined) {
      setValue(true);
    } else {
      setValue(false);
    }
  }, [error]);
  return (
    <div className="mt-4">
      <Input
        label={label}
        placeholder={placeholder}
        {...register(fieldName, {
          required: `${label}을(를) 입력하세요.`,
          validate: validate,
        })}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
            aria-label="toggle password visibility"
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        color={error ? "danger" : "default"}
        isInvalid={value}
        errorMessage={error?.message}
        isDisabled={disabled}
      />
    </div>
  );
}
