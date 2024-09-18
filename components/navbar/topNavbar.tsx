"use client";

import ILogo from "@/icon/global/logo";
import IMenuBtn from "@/icon/nav/menuBtn";
import { Modal, Navbar, NavbarContent, useDisclosure } from "@nextui-org/react";
import Menu from "./menu";

export default function TopNavBar() {
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();
  return (
    // <div className=" w-[100%] h-[60px] flex justify-around items-center">
    //   <IMenuBtn />
    //   <ILogo />
    //   <span className=" font-extralight text-xs">로그인</span>
    // </div>
    <Navbar>
      <NavbarContent>
        <div onClick={onOpen}>
          <IMenuBtn />
        </div>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top"
          radius="none"
          size="full"
          hideCloseButton={true}
        >
          <Menu onClose={onClose} />
        </Modal>
      </NavbarContent>
      <NavbarContent>
        <ILogo />
      </NavbarContent>
      <NavbarContent justify="end">
        <span className=" font-extralight text-xs">로그인</span>
      </NavbarContent>
    </Navbar>
  );
}
