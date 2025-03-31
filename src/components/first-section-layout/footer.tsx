import Link from "next/link"
import { Button } from "../ui/button"
import { ExternalLink, Phone } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="w-full h-fit mt-auto flex items-center justify-between gap-4 p-2.5">
      <Link href="/">
        <Button variant="default">Entre em contato <Phone size={16} /></Button>
      </Link>
      <Link href="/">
        <Button variant="link">Explorar todo o catálogo <ExternalLink size={16} /></Button>
      </Link>
    </footer>
  )
}