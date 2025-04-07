import Image, { StaticImageData } from "next/image"
import { Button } from "../ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

interface GalleryItemProps {
  src: StaticImageData | string,
  title: string,
  href: string,
}

export const GalleryItem = ({ 
  src,
  title,
  href, 
}: GalleryItemProps) => {
  return (
    <div className="relative rounded-2xl overflow-hidden h-[800px]">
      <Image src={src} alt={title} className="w-full h-full object-cover brightness-75" />
      <Link href={href} target="_blank" className="absolute top-4 right-4 w-fit h-fit">
        <Button variant="secondary"><ExternalLink size={16} /></Button>
      </Link>
      <h2 className="absolute bottom-4 left-4 text-white font-semibold text-xl w-fit">{title}</h2>
    </div>
  )
}