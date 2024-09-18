import Image from "next/image";
import BgImage from "../../image/배경 이미지 2.png";
import BgImage2 from "../../image/배경 2.jpg";

export default function Review() {
  return (
    <div className=" relative mt-20 h-[150px]">
      <Image src={BgImage2} alt="" objectFit="cover" className="w-full h-[150px] absolute -z-10" />
      <div className=" pl-4 pt-10">
        <div className="flex flex-col text-[#FFFFFF] text-sm font-extrabold mb-4">
          <span>참가자들의</span>
          <span>생생한 후기가 궁금하다면?</span>
        </div>
        <span className="bg-color_main px-4 py-1 text-xs text-[#FFFFFF] rounded-full">후기 보러가기 &gt;</span>
      </div>
    </div>
  );
}
