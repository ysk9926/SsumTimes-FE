"use client";

import ILogo from "@/icon/global/logo";
import IMenuBtn from "@/icon/nav/menuBtn";
import { Avatar, Modal, Navbar, NavbarContent, useDisclosure } from "@nextui-org/react";
import Menu from "./menu";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { loggedInVar, userState } from "@/atom";

export default function TopNavBar() {
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  const handleClickLogo = () => {
    router.push("/");
  };

  const loggedInV = useRecoilValue(loggedInVar);
  const userstate = useRecoilValue(userState);

  return (
    <Navbar>
      <NavbarContent>
        <div className="w-10" onClick={onOpen}>
          <IMenuBtn />
        </div>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
          radius="none"
          size="full"
          className=" max-w-[460px]"
          hideCloseButton={true}
        >
          <Menu onClose={onClose} />
        </Modal>
      </NavbarContent>
      <NavbarContent onClick={handleClickLogo}>
        <ILogo />
      </NavbarContent>
      {loggedInV ? (
        <NavbarContent justify="end">
          <Avatar src={userstate.profileImagePath} />
        </NavbarContent>
      ) : (
        <NavbarContent justify="end" onClick={() => router.push("/account/login")}>
          <span className=" font-extralight text-xs">로그인</span>
        </NavbarContent>
      )}
    </Navbar>
  );
}
