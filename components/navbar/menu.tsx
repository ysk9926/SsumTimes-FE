"use client";

import { loggedInVar, userState } from "@/atom";
import IArrow from "@/icon/global/arrow";
import IClose from "@/icon/global/close";
import ILogo from "@/icon/global/logo";
import { Avatar, Button, ModalContent, ModalHeader, divider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { DefaultValue, useRecoilState, useRecoilValue } from "recoil";
import { deleteCookie } from "../util/setCookie";
import { openInNewTab } from "../hook/navigateGoogleForm";

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
        openInNewTab();
        // router.push("https://forms.gle/eR6cYCeTRPmG956p6");
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

  const navigateSignup = () => {
    router.push("/account");
    onClose();
  };

  const navigateLogin = () => {
    router.push("/account/login");
    onClose();
  };

  const [userstate, setUserstate] = useRecoilState(userState);
  const [loggedInV, setLoggedInV] = useRecoilState(loggedInVar);

  const handleLogOut = () => {
    setUserstate({ userCid: 0, userId: "", username: "", profileImagePath: "" });
    setLoggedInV(false);
    deleteCookie();
    onClose();
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
          {loggedInV ? (
            <div className="bg-[#F5F5F5] flex flex-col items-start px-10 py-5">
              <div className="flex items-center space-x-5">
                <Avatar src={userstate.profileImagePath} size="lg" isBordered color="success" />
                <div className="flex flex-col">
                  <span>{userstate.username}</span>
                  <span className="text-[#707070]">{userstate.userId}</span>
                </div>
              </div>
              <div className=" mt-4 space-x-5">
                <Button size="sm" disableRipple className="bg-white">
                  마이페이지
                </Button>
                <Button size="sm" disableRipple className="bg-white" onPress={handleLogOut}>
                  로그아웃
                </Button>
              </div>
            </div>
          ) : (
            <div className="bg-[#F5F5F5] h-14 flex pl-7">
              <div className="flex justify-start items-center">
                <span className="text-xs text-color_main" onClick={navigateLogin}>
                  로그인 하기
                </span>
              </div>
              <div className="flex justify-start items-center pl-5">
                <span className="text-xs" onClick={navigateSignup}>
                  회원가입 하기
                </span>
              </div>
            </div>
          )}
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
