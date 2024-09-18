"use client";

import IArrow from "@/icon/global/arrow";
import IClose from "@/icon/global/close";
import ILogo from "@/icon/global/logo";
import { Button, ModalContent, ModalHeader } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface IMenu {
  onClose: () => void;
}

export default function Menu({ onClose }: IMenu) {
  const router = useRouter();

  const handleNavigation = (menu: string) => {
    console.log(menu);
    switch (menu) {
      case "about":
        router.push("/about");
        onClose();
        break;
      case "apply":
        router.push("/apply");
        onClose();
        break;
      case "faq":
        router.push("/faq");
        onClose();
        break;
      case "reviews":
        router.push("/reviews");
        onClose();
        break;
      default:
        break;
    }
  };

  return (
    <ModalContent>
      {(onclose) => (
        <div className="h-screen ">
          {/* header */}
          <div className="flex justify-between items-center px-4 py-4">
            <ILogo />
            <div onClick={onclose}>
              <IClose />
            </div>
          </div>
          {/* account */}
          <div className="bg-[#F5F5F5] h-14 flex pl-7">
            <div className="flex justify-start items-center">
              <span className="text-xs text-color_main">로그인 하기</span>
            </div>
            <div className="flex justify-start items-center pl-5">
              <span className="text-xs">회원가입 하기</span>
            </div>
          </div>
          {/* menu */}
          <div className=" pl-7 mt-10 pr-14 space-y-4">
            {/* info */}
            <div className="flex justify-between items-center" onClick={() => handleNavigation("about")}>
              <span>썸타임즈 소개</span>
              <div className="mt-1">
                <IArrow />
              </div>
            </div>
            {/* apply */}
            <div className="flex justify-between items-center" onClick={() => handleNavigation("apply")}>
              <span>썸타임즈 신청하기</span>
              <div className="mt-1">
                <IArrow />
              </div>
            </div>
            {/* qa */}
            <div className="flex justify-between items-center" onClick={() => handleNavigation("faq")}>
              <span>자주 묻는 질문</span>
              <div className="mt-1">
                <IArrow />
              </div>
            </div>
            {/* review */}
            <div className="flex justify-between items-center" onClick={() => handleNavigation("reviews")}>
              <span>후기</span>
              <div className="mt-1">
                <IArrow />
              </div>
            </div>
          </div>
        </div>
      )}
    </ModalContent>
  );
}
