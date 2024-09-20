"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { getCookie } from "../util/setCookie";
import { userApi } from "@/api/user/userApi";
import { useRecoilState } from "recoil";
import { loggedInVar, userState } from "@/atom";
import axios from "axios";

export default function AuthCheck() {
  //url 정보 뽑기
  const pathname = usePathname(); // 로컬3000/auth/login
  const router = useRouter();

  const [userstate, setUserstate] = useRecoilState(userState);
  const [loggedInV, setLoggedInV] = useRecoilState(loggedInVar);

  // 유저 정보 불러오기
  async function fetchUserInfo() {
    try {
      const res = await userApi.getUserInfo();
      if (res.data.success) {
        const userinfo = res.data.userInfo;
        setUserstate({
          userCid: userinfo.userCid,
          userId: userinfo.userId,
          username: userinfo.userName,
          profileImagePath: userinfo.profileImgPath,
        });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
      }
    }
  }

  useEffect(() => {
    const token = getCookie();

    // 비회원인 경우
    if (token === "") {
      setLoggedInV(false);
      if (pathname.includes("/user")) {
        window.alert("로그인 후 이용해주세요");
        router.push("/");
      }
    }

    // 로그인 유저인 경우
    if (token && token !== "") {
      setLoggedInV(true);

      if (userstate.userCid === 0) {
        console.log("정보 불러오기");
        fetchUserInfo();
      }
    }
  }, [router, pathname, userstate.userCid]);

  return null;
}
