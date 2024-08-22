import Image from "next/image";
import Logo from "../../../image/logo.png";

export default function LogoImage() {
  return (
    <div className=" w-full justify-center flex pt-32">
      <Image src={Logo} alt="logoImage" width={500} />
    </div>
  );
}
