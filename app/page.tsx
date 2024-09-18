import TitleImage from "@/components/mainPg/titleImage";
import Navigate from "@/components/mainPg/navigate";
import Content from "@/components/mainPg/content";
import Review from "@/components/mainPg/review";

export default function Home() {
  return (
    <div>
      <TitleImage />
      <Navigate />
      <Content />
      <Review />
    </div>
  );
}
