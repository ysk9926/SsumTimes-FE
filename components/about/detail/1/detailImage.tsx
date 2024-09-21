import { content1, content2, content3 } from "@/image/image";
import Image from "next/image";

export default function Detail1DetailImage() {
  return (
    <div className=" mt-5 space-y-5">
      <Image src={content1} alt="content1" height={500} width={500} />
      <Image src={content2} alt="content2" height={500} width={500} />
      <Image src={content3} alt="content3" height={500} width={500} />
    </div>
  );
}
