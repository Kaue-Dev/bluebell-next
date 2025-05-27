import { Navbar } from "@/components/first-section-layout/nav-bar";
import { Logo } from "../global/logo";

export const Header = () => {
  return (
    <header className="lg:flex-row flex-col flex items-center justify-between h-fit w-full p-2.5 bg-transparent">
      <Logo />
      <Navbar />
    </header>
  );
}