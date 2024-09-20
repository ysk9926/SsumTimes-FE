"use client";

import { Avatar } from "@nextui-org/react";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { useState, useEffect } from "react";

interface ProfileImageInputProps {
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
  disabled?: boolean; // 필드 비활성화를 위한 속성
}

export default function ProfileImageInput({ register, watch, disabled }: ProfileImageInputProps) {
  const watchProfileImage: FileList | null = watch("profileImage");
  const [preProfileImage, setPreProfileImage] = useState<string>("");

  useEffect(() => {
    if (watchProfileImage && watchProfileImage.length > 0) {
      const PreviewFile: File = watchProfileImage[0];
      const PreviewUrl: string = URL.createObjectURL(PreviewFile);
      setPreProfileImage(PreviewUrl);
    }
  }, [watchProfileImage]);

  return (
    <label className="w-full flex justify-center mb-5">
      <Avatar src={preProfileImage ? preProfileImage : ""} className="w-24 h-24" isDisabled={disabled} />
      <input {...register("profileImage")} type="file" style={{ display: "none" }} />
    </label>
  );
}
