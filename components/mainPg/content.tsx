import Image from "next/image";
import ContentImage1 from "../../image/숙소 1.jpg";
import IArrow from "@/icon/global/arrow";

export default function Content() {
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
        <div>
          <Image src={ContentImage1} alt="" objectFit="cover" className="w-full rounded-lg my-2" />
          <span className="text-xs">(20/30) 10월 5일, 6일 부산 금정구 힐링 테마농장</span>
        </div>
        {/* image */}
        <div>
          <Image src={ContentImage1} alt="" objectFit="cover" className="w-full rounded-lg my-2" />
          <span className="text-xs">(40) 10월 12일,13일 부산 금정구 힐링 테마농장</span>
        </div>
      </div>
    </div>
  );
}
