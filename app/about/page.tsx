import ContentInfo from "@/components/about/contentInfo";
import MainImage from "@/components/about/mainImage";
import Text_1 from "@/components/about/text/text_1";
import Text_2 from "@/components/about/text/text_2";
import Text_3 from "@/components/about/text/text_3";
import Text_4 from "@/components/about/text/text_4";
import AboutImage_1 from "@/components/about/util/aboutImage_1";

export default function About() {
  return (
    <div>
      <MainImage />
      <div className=" flex flex-col items-center w-full mt-40">
        <Text_1 />
        <ContentInfo />
        <AboutImage_1 />
        <Text_2 />
        <AboutImage_1 />
        <Text_3 />
      </div>
      <Text_4 />
    </div>
  );
}
