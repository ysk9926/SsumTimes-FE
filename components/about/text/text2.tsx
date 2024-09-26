import { bgImage1_long } from "@/image/image";
import Image from "next/image";

export default function Text2() {
  return (
    <div>
      {/* image */}
      <Image src={bgImage1_long} alt="" objectFit="fit" width={500} height={300} />
      {/* text */}
      <div className="bg-[#EFEFEF] flex flex-col items-center py-7">
        <div className="space-y-1 mb-7">
          <div className="flex justify-center items-end">
            <span className="text-color_main font-bold text-2xl">썸타임즈</span>
            <span>는</span>
          </div>
          <div className="flex justify-center text-sm">
            <span className="font-bold">부산 금정구</span>
            <span>에서 1박 2일</span>
          </div>
          <div className="flex flex-col items-center font-bold text-sm">
            <span>1차 : 28세~39세 (10월 5일, 6일) 부산 금정구 힐링 테마농장</span>
            <span>2차 : 28세~39세 (10월 12일, 13일) 부산 금정구 힐링 테마농장</span>
          </div>
        </div>
        <div className="flex flex-col items-center text-sm space-y-1">
          <span>싱글 남녀 12명 함께 즐기는</span>
          <span>주말 여행 프로그램 입니다.</span>
        </div>
      </div>
    </div>
  );
}
