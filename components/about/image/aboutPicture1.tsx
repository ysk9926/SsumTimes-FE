import Image from "next/image";
import { about1 } from "@/image/image";

export default function AboutPicture1() {
  return (
    <div className="flex justify-center items-center min-h-[250px] h-[300px] overflow-clip">
      <Image
        src={about1}
        alt="소개 사진 1"
        objectFit="cover"
        objectPosition="center"
        width={500}
        height={300}
        className="scale-125 ml-3"
      />
    </div>
  );
}
