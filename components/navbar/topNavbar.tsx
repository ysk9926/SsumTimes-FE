"use client";

import ILogo from "@/icon/global/logo";
import IMenuBtn from "@/icon/nav/menuBtn";
import { Modal, Navbar, NavbarContent, useDisclosure } from "@nextui-org/react";
import Menu from "./menu";
import { useRouter } from "next/navigation";

export default function TopNavBar() {
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  const handleClickLogo = () => {
    router.push("/");
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };
  return (
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
      <NavbarContent onClick={handleClickLogo}>
        <ILogo />
      </NavbarContent>
      <NavbarContent justify="end">
        <span className=" font-extralight text-xs">로그인</span>
      </NavbarContent>
    </Navbar>
  );
}
