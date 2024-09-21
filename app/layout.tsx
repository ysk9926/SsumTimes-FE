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
          <div className="hidden mobile:flex items-center justify-center min-h-screen bg-[#F5F5F5]">
            <div className="w-[440px] bg-white min-h-screen z-10">
              <AuthCheck />
              <TopNavBar />
              {children}
              <Footer />
            </div>
          </div>
        </CustomProvider>
      </body>
    </html>
  );
}
