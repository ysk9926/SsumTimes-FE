import { Image } from "@nextui-org/react";
import { titleImageInfo } from "../util/image";
import LogoImage from "./util/logoImage";

export default function MainImage() {
  return (
    <div className=" relative h-[700px] w-full">
      <Image
        src={titleImageInfo.src}
        alt={titleImageInfo.alt}
        className=" rounded-none absolute -z-10"
        height={700}
        width="100%"
      />
      <LogoImage />
    </div>
  );
}
