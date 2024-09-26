import { about4 } from "@/image/image";
import Image from "next/image";
import Seperator from "../util/seperator";

export default function Detail2Title() {
  return (
    <div>
      <Image src={about4} alt="" width={500} height={300} />
      <div className="flex flex-col mt-4 px-5 space-y-2">
        <span className="font-bold text-lg">1박 2일 썸타임즈 부산</span>
        <span className="text-xs text-[#9B9B9B]">싱글남녀 12명이 함께 떠나는 주말 여행</span>
      </div>
      <Seperator />
    </div>
  );
}
