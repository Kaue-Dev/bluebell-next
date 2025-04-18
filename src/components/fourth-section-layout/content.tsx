import Image from "next/image"

import imgCascavel from "@/assets/images/cascavel-img.png"
import { Cards } from "./cards"

export const Content = () => {
  return (
    <div className="flex items-start justify-center w-full h-fit">
      <Image src={imgCascavel} alt="Imagem de Cascavel" className="w-full max-w-xl rounded-2xl h-[800px] object-cover" />
      <Cards />
    </div>
  )
}