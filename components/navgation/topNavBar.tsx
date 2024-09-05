"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import Image from "next/image";
import Logo from "../../image/logo.png";
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from "./icons";
import { link } from "fs";

export default function TopNavBar() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };
  return (
    <Navbar maxWidth="full" position="sticky" height="90px">
      <NavbarContent>
        <NavbarItem>
          <Button
            disableRipple
            className="p-0 bg-transparent data-[hover=true]:bg-transparent"
            radius="sm"
            variant="light"
            as={Link}
            href="/about"
          >
            썸타임즈 소개
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            disableRipple
            className="p-0 bg-transparent data-[hover=true]:bg-transparent"
            radius="sm"
            variant="light"
            as={Link}
            href="/apply"
          >
            썸타임즈 신청하기
          </Button>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
              >
                이용안내
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="use guide"
            className="w-[240px]"
            itemClasses={{
              base: "gap-2",
            }}
          >
            <DropdownItem key="guide" description="이용 가이드로 이동합니다" startContent={icons.flash}>
              이용가이드
            </DropdownItem>
            <DropdownItem key="question" description="질문 게시판으로 이동합니다" startContent={icons.activity}>
              자주 묻는 질문
            </DropdownItem>
            <DropdownItem key="information" description="공지사항 게시판으로 이동합니다" startContent={icons.server}>
              공지사항
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent justify="center">
        <Button disableRipple as={Link} href="/" className=" bg-inherit w-[200px] h-[50px] relative">
          <Image src={Logo} alt="logoImage" fill={true} />
        </Button>
      </NavbarContent>
      <NavbarContent justify="end">
        <Button as={Link} href="#" variant="light" disableRipple>
          회원가입
        </Button>
        <Button as={Link} href="#" variant="light" disableRipple>
          로그인
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
