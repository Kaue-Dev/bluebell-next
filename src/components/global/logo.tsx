import Image from "next/image";
import LogoImage from "@/assets/images/logo-bluebell.png";

export const Logo = () => {
  return <Image src={LogoImage} alt="Logo Bluebell" className="h-fit w-full max-w-80" />
}