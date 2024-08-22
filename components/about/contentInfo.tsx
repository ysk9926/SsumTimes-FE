import { Image } from "@nextui-org/react";
import { titleImageInfo } from "../util/image";

export default function ContentInfo() {
  return (
    <div className=" w-[900px] border border-slate-200 mt-40">
      <div className=" flex justify-between items-center px-16 py-10">
        {/* left content */}
        <div className=" flex flex-col ">
          <span className="text-2xl text-orange-500 font-bold">썸타임즈 오리지널</span>
          <span className=" mt-4 text-2xl">싱글 남녀들의 1박 2일</span>
          <div className=" flex flex-col mt-8 text-gray-400">
            <span>재미 있는 체험과 알찬 프로그램으로</span>
            <span>여행지에서 꾸밈 없이 서로를 알아갈 수 있어요.</span>
          </div>
        </div>
        {/* right content */}
        <div className=" rounded-full overflow-hidden ">
          <Image src={titleImageInfo.src} alt={titleImageInfo.alt} width={200} height={200} />
        </div>
      </div>
    </div>
  );
}
