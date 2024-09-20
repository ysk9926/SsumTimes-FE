import AboutContent from "@/components/about/content";
import AboutPicture1 from "@/components/about/image/aboutPicture1";
import AboutPicture2 from "@/components/about/image/aboutPicture2";
import Text1 from "@/components/about/text/text1";
import Text2 from "@/components/about/text/text2";
import Text3 from "@/components/about/text/text3";

export default function About() {
  return (
    <div>
      <AboutPicture1 />
      <Text1 />
      <Text2 />
      <AboutContent />
      <Text3 />
      <AboutPicture2 />
    </div>
  );
}
