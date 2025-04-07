import { ExternalLink, Facebook, Instagram } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"

export const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full h-fit">
      <div className="w-full flex justify-center">
        <Button variant="default">Ver todas as propriedades <ExternalLink size={16} /></Button>
      </div>
      <div className="flex items-center gap-6 justify-center w-fit">
        <p className="text-bluebell-blue w-52 text-justify text-sm font-medium">Não perca as oportunidades! Siga-nos nas redes sociais</p>
        <Link href="https://www.instagram.com/"><Instagram /></Link>
        <Link href="https://www.facebook.com/"><Facebook /></Link>
      </div>
    </div>
  )
}