"use client";

import { Button } from "@nextui-org/react";
import Seperator from "../util/seperator";
import { openInNewTab } from "@/components/hook/navigateGoogleForm";

export default function Detail1ContentInfo() {
  return (
    <>
      <div className="flex flex-col items-start mt-5 px-5">
        <span className="font-semibold text-sm">
          (20/30)10월 5일, 6일 부산 금정구 힐링 테마농장
        </span>
        <div className="text-xs flex flex-col items-start space-y-1 mt-3">
          <span>대상 : 28세-39세 </span>
          <span>남자 : 6명 / 여자 : 6명</span>
          <div>
            <span>장소 : 부산 금정구</span>
            <span className="text-[9px] text-[#393939] ml-1">
              (*자세한 장소는 신청 완료 후 개별연락.)
            </span>
          </div>
        </div>
        <div className=" mt-3">
          <span className="text-[10px] line-through text-[#CECECE]">
            200,000원
          </span>
          <span className="text-xs text-[#8B8B8B] ml-2">30% 할인</span>
        </div>
        <div className="font-bold text-[#D64247] mt-2 space-x-5">
          <span>140,000 원</span>
          <span></span>
        </div>
        <Button
          className="w-full mt-3 bg-[#D64247] text-white font-semibold tracking-[4.8px]"
          onPress={openInNewTab}
        >
          신청서 작성
        </Button>
      </div>
      <Seperator />
      <div className="text-[#D64247] text-sm flex flex-col items-center mt-4 space-y-4">
        <span>※ 신청서 작성하여 제출하셔야 신청 완료입니다.</span>
        <span className="w-[70%]">
          ※ 신청서 작성 후 참가자로 선정된 분에 한해 참가비 결제는 별도로
          진행합니다.
        </span>
      </div>
    </>
  );
}
