import Image from "next/image";
import LogoImage from "@/assets/images/logo.png";

export const Logo = () => {
  return <Image src={LogoImage} alt="Logo Bluebell" />
}