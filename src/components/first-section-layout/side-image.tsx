import Image from "next/image";
import Image1 from "@/assets/images/image-1.png";

export function SideImage() {
  return <Image src={Image1} alt="Side Image" className="object-cover h-full w-full rounded-2xl" />;
}