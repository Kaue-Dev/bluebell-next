import Image from "next/image";
import Image2 from "@/assets/images/image-2.jpg";
import { Button } from "../ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";

export function SideImage() {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden relative">
      <Image src={Image2} alt="Side Image" className="object-cover h-full w-full" />
      <Link href="/" target="_blank" className="absolute top-4 right-4 cursor-pointer z-50">
        <Button variant="default">Entre em contato agora <Phone size={16} /></Button>
      </Link>
    </div>
  )
}