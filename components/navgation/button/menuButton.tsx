"use client";

import { useState } from "react";
import HoverInformation from "./hoverInformation";

export default function MenuButton() {
  const [isInformationHovered, setIsInformationHovered] = useState(false);

  return (
    <div className="flex justify-start items-center space-x-4 w-96 h-14">
      <div className=" hover:text-gray-500">썸타임즈 소개</div>
      <div className=" hover:text-gray-500">썸타임즈 신청하기</div>
      <div
        className=" hover:text-gray-500 relative h-full flex justify-center items-center"
        onMouseEnter={() => setIsInformationHovered(true)}
        onMouseLeave={() => setIsInformationHovered(false)}
      >
        <span>이용 안내</span>
        {isInformationHovered && <HoverInformation setIsHovered={setIsInformationHovered} />}
      </div>
    </div>
  );
}
