import Image from "next/image"

import imgCascavel from "@/assets/images/cascavel-img.png"
import { Cards } from "./cards"

export const Content = () => {
  return (
    <div className="lg:flex-row flex-col flex items-center justify-center w-full h-fit">
      <Image src={imgCascavel} alt="Imagem de Cascavel" className="lg:block hidden w-full max-w-[450px] rounded-2xl h-[750px] object-cover" />
      <Cards />
    </div>
  )
}