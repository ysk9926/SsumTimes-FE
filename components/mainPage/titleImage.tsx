import { titleImageInfo } from "../util/image";
import TITLE_IMAGE from "../../image/배경 1.jpg";
import Image from "next/image";

export default function TitleImage() {
  return (
    <div className=" relative h-[650px] w-full">
      {/* <img src={titleImageInfo.src} alt={titleImageInfo.alt} className={titleImageInfo.class} /> */}
      <div className="w-full h-full absolute -z-10">
        <Image src={TITLE_IMAGE} alt="logoImage" />
      </div>
      <div className=" h-full flex flex-col justify-center items-center -ml-[500px] text-white space-y-10 text-[24px]">
        <div className="  w-[500px] ">
          <span className=" border border-white-1 px-4 py-2 rounded-full font-semibold hover:px-[18px] hover:py-[10px]">
            썸타임즈
          </span>
        </div>
        <div className="  w-[500px]">
          <span className=" font-semibold">나에게 딱 맞는 인연을 찾는 가장 즐거운 여정</span>
        </div>
        <div className="  w-[500px] pt-6">
          <span className=" bg-pink-500 px-4 py-3 rounded-full font-bold text-[16px]">자세히 보기</span>
        </div>
      </div>
    </div>
  );
}
