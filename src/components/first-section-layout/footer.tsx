import { ExternalLink, Phone } from "lucide-react"
import { Anchor } from "../global/anchor"

export const Footer = () => {
  return (
    <footer className="w-full h-fit mt-auto flex items-center justify-between gap-4 p-2.5">
      <Anchor href="/" variant="primaryButton">Entre em contato <Phone size={16} /></Anchor>
      <Anchor href="/" variant="link">Explorar todo o catálogo <ExternalLink size={16} /></Anchor>
    </footer>
  )
}