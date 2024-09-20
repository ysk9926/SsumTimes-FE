import Image from "next/image";
import aboutPicture1 from "../../../image/소개 1.png";

export default function AboutPicture1() {
  return (
    <div className="flex justify-center items-center min-h-[250px] h-[300px] overflow-clip">
      <Image
        src={aboutPicture1}
        alt="소개 사진 1"
        objectFit="cover"
        objectPosition="center"
        height={300}
        className="scale-125 ml-3"
      />
    </div>
  );
}
