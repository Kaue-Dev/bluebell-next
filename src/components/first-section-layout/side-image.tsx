import Image from "next/image";
import Image1 from "@/assets/images/image-1.jpg";
import { Button } from "../ui/button";
import { CloudDownload } from "lucide-react";
import Link from "next/link";

export function SideImage() {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden relative">
      <Image src={Image1} alt="Side Image" className="object-cover h-full w-full" />
      <Link href="/" target="_blank" className="absolute bottom-4 right-4 cursor-pointer z-50">
        <Button variant="default">Baixar nosso catálogo <CloudDownload size={16} /></Button>
      </Link>
    </div>
  )
}