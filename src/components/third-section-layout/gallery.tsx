import { GalleryItem } from "./gallery-item"

import Casa1 from "@/assets/images/casa-1.jpg"
import Casa2 from "@/assets/images/casa-2.jpg"
import Casa3 from "@/assets/images/casa-3.jpg"
import Casa4 from "@/assets/images/casa-4.jpg"
import Casa5 from "@/assets/images/casa-5.jpg"
import Casa6 from "@/assets/images/casa-6.jpg"

const GalleryItems = [
  {
    src: Casa1,
    title: "Casa de alto padrão no Country",
    href: "/"
  },
  {
    src: Casa2,
    title: "Casa estilo americano no bairro Canadá",
    href: "/"
  },
  {
    src: Casa3,
    title: "Loteamentos Região Norte",
    href: "/"
  },
  {
    src: Casa4,
    title: "Sua casa no Bairro FAG",
    href: "/"
  },
  {
    src: Casa5,
    title: "Apartamento de alto padrão no Centro",
    href: "/"
  },
  {
    src: Casa6,
    title: "Sobrado na região do lago",
    href: "/"
  },
]

export const Gallery = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {GalleryItems.map((item, index) => (
        <GalleryItem key={index} {...item} />
      ))}
    </div>
  )
}