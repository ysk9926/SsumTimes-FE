import Image from "next/image";
import aboutPicture2 from "../../../image/소개 2.jpg";
import aboutPicture3 from "../../../image/소개 3.jpg";

export default function AboutPicture2() {
  return (
    <div>
      <Image src={aboutPicture2} alt="소개 사진 2" objectFit="cover" objectPosition="center" />
      <Image src={aboutPicture3} alt="소개 사진 3" objectFit="cover" objectPosition="center" />
    </div>
  );
}
