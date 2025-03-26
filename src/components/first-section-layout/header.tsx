import Logo from "@/assets/images/logo.png";
import { Navbar } from "@/components/first-section-layout/nav-bar";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex items-center justify-between h-fit w-full p-2.5 bg-transparent">
      <Image src={Logo} alt="Logo Bluebell" />
      <Navbar />
    </header>
  );
}