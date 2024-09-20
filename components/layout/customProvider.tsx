"use client";

import { NextUIProvider } from "@nextui-org/react";
import { RecoilRoot } from "recoil";

export default function CustomProvider({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <NextUIProvider>{children}</NextUIProvider>
    </RecoilRoot>
  );
}
