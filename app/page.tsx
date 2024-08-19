import ContentOriginal from "@/components/mainPage/contentOriginal";
import NavigateImage from "@/components/mainPage/navigateImage";
import Review from "@/components/mainPage/review";
import TitleImage from "@/components/mainPage/titleImage";
import Fotter from "@/components/navgation/fotter";

export default function Home() {
  return (
    <div className="relative">
      <div
        className="fixed top-20 left-0 right-0 bottom-0 -z-10 bg-cover bg-center w-full"
        style={{
          backgroundImage:
            'url("https://plus.unsplash.com/premium_photo-1676667573109-273586405c96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      ></div>
      <TitleImage />
      <NavigateImage />
      <div className="flex flex-col justify-center items-center bg-white py-20">
        <ContentOriginal />
      </div>
      <Review />
    </div>
  );
}
