import Image from "next/image";
import { bgImage1 } from "@/image/image";

export default function TitleImage() {
  return (
    <div className=" relative overflow-x-hidden h-[350px]">
      <div className=" w-full min-w-[450px]  absolute -z-10 -left-8">
        <Image src={bgImage1} alt="logoImage" objectPosition="center" objectFit="cover" width={500} height={300} />
      </div>
      <div className="pt-14 pl-5">
        <span className="font-extrabold text-sm text-white">반쪽을 찾아 떠나는 특별한 1박2일</span>
        <div
          className="
        w-[220px] h-[55px] rounded-full border border-color_main bg-[#FFFFFFBF] flex justify-center items-center mt-5
        font-semibold text-color_main text-sm
        "
        >
          <div className="flex flex-col">
            <span>카메라 없는 TV 로맨스 예능</span>
            <span>일반인 소개팅 프로그램</span>
          </div>
        </div>
        <div
          className="
        bg-color_main w-24 h-6 rounded-full flex justify-center items-center mt-20
        text-white text-xs
        "
        >
          <span>자세히보기 &gt;</span>
        </div>
      </div>
    </div>
  );
}
