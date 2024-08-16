import ContentOriginal from "@/components/mainPage/contentOriginal";
import NavigateImage from "@/components/mainPage/navigateImage";
import TitleImage from "@/components/mainPage/titleImage";

export default function Home() {
  return (
    <div className=" space-y-5">
      <TitleImage />
      <NavigateImage />
      <div className="flex flex-col justify-center items-center">
        <ContentOriginal />
      </div>
      home
    </div>
  );
}
