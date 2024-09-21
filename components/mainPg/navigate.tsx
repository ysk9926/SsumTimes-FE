"use client";

import IApply from "@/icon/main/apply";
import IInfo from "@/icon/main/info";
import IQa from "@/icon/main/qa";
import { useRouter } from "next/navigation";
import { openInNewTab } from "../hook/navigateGoogleForm";

export default function Navigate() {
  const router = useRouter();
  return (
    <div className=" mt-12">
      <div className=" flex justify-around items-center">
        {/* 소개 */}
        <div className=" flex flex-col justify-center items-center">
          <div
            className=" w-16 h-16 flex justify-center items-center bg-[#F5F5F5] rounded-lg"
            onClick={() => router.push("/about")}
          >
            <IInfo />
          </div>
          <span className="text-xs mt-2">썸타임즈 소개</span>
        </div>
        {/* 신청 */}
        <div className=" flex flex-col justify-center items-center">
          <div className=" w-16 h-16 flex justify-center items-center bg-[#F5F5F5] rounded-lg" onClick={openInNewTab}>
            <IApply />
          </div>
          <span className="text-xs mt-2">신청하기</span>
        </div>{" "}
        {/* 질문 */}
        <div className=" flex flex-col justify-center items-center">
          <div
            className=" w-16 h-16 flex justify-center items-center bg-[#F5F5F5] rounded-lg"
            onClick={() => router.push("/faq")}
          >
            <IQa />
          </div>
          <span className="text-xs mt-2">자주 묻는 질문</span>
        </div>
      </div>
    </div>
  );
}
