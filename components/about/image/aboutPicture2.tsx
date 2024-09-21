import Image from "next/image";
import { about2, about3 } from "@/image/image";

export default function AboutPicture2() {
  return (
    <div>
      <Image src={about2} alt="소개 사진 2" objectFit="cover" objectPosition="center" width={500} height={300} />
      <Image src={about3} alt="소개 사진 3" objectFit="cover" objectPosition="center" width={500} height={300} />
    </div>
  );
}
