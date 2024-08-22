import ContentOriginal from "@/components/mainPage/contentOriginal";
import NavigateImage from "@/components/mainPage/navigateImage";
import Review from "@/components/mainPage/review";
import TitleImage from "@/components/mainPage/titleImage";
import { backgroundImageInfo } from "@/components/util/image";

export default function Home() {
  return (
    <div className="relative">
      <div
        className="fixed top-20 left-0 right-0 bottom-0 -z-10 bg-cover bg-center w-full"
        style={{
          backgroundImage: `url(${backgroundImageInfo.src})`,
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
