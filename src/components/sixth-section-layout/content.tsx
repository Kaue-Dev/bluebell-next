import { Phone } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image"
import logoImage from "@/assets/images/logo2.png"

export const Content = () => {
  return (
    <div className="absolute w-fit h-fit flex flex-col items-center justify-center">
      <Image src={logoImage} alt="Logo" />
      <Button variant="secondary">
        Comece agora
        <Phone />
      </Button>
    </div>
  );
};
