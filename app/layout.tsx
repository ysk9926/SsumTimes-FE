import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import CustomProvider from "@/components/layout/customProvider";
import TopNavBar from "@/components/navbar/topNavbar";
import Footer from "@/components/navbar/footer";
import AuthCheck from "@/components/layout/authCheck";

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
          {/* 모바일 사이즈 */}
          <div className="mobile:hidden">
            <AuthCheck />
            <TopNavBar />
            {children}
            <Footer />
          </div>
          {/* 모바일 이상 */}
          <div className="hidden mobile:flex items-center justify-center min-h-screen">
            <p className="text-center text-lg">
              이 페이지는 모바일 사이즈에 최적화되어 있습니다. 화면 크기를 줄여주세요.
            </p>
          </div>
        </CustomProvider>
      </body>
    </html>
  );
}
