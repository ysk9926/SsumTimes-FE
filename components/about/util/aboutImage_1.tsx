import { titleImageInfo } from "@/components/util/image";
import { Image } from "@nextui-org/react";

export default function AboutImage_1() {
  return (
    <Image src={titleImageInfo.src} alt={titleImageInfo.alt} width={900} height={600} className=" rounded-none mt-40" />
  );
}
