import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import CustomProvider from "@/components/layout/customProvider";

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
      <body className={`font-pretendard`}>
        <CustomProvider>{children}</CustomProvider>
      </body>
    </html>
  );
}
