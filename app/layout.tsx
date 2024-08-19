import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import CustomProvider from "@/components/layout/customProvider";
import TopNavBar from "@/components/navgation/topNavBar";
import Logo from "@/components/navgation/logo";
import Fotter from "@/components/navgation/fotter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SSUMTIMES",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css"
        />
      </Head>
      <body className={`font-pretendard relative`}>
        <CustomProvider>
          {/* <Logo /> */}
          <TopNavBar />
          {children}
          <Fotter />
        </CustomProvider>
      </body>
    </html>
  );
}
