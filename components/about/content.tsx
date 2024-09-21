"use client";

import Image from "next/image";
import IArrow from "@/icon/global/arrow";
import { locationImage } from "@/image/image";
import { useRouter } from "next/navigation";

export default function AboutContent() {
  const router = useRouter();

  return (
    <div className=" mt-12 px-5">
      {/* title */}
      <div className="flex flex-col">
        <div className="flex justify-start items-center">
          <span className=" text-lg font-bold">1박 2일 썸타임즈 부산</span>
          <div className=" pl-3">
            <IArrow />
          </div>
        </div>
        <span className=" text-xs text-[#9B9B9B] pt-2">싱글남녀 12명이 함께 떠나는 주말 여행</span>
      </div>
      {/* content */}
      <div className="mt-5">
        {/* image */}
        <div onClick={() => router.push("/about/detail/1")}>
          <Image
            src={locationImage}
            alt=""
            objectFit="cover"
            className="w-full rounded-lg my-2"
            width={500}
            height={300}
          />
          <span className="text-xs">(20/30) 10월 5일, 6일 부산 금정구 힐링 테마농장</span>
        </div>
        {/* image */}
        <div onClick={() => router.push("/about/detail/2")}>
          <Image
            src={locationImage}
            alt=""
            objectFit="cover"
            className="w-full rounded-lg my-2"
            width={500}
            height={300}
          />
          <span className="text-xs">(40) 10월 12일,13일 부산 금정구 힐링 테마농장</span>
        </div>
      </div>
    </div>
  );
}
