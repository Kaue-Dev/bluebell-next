import { ExternalLink, Star } from "lucide-react";
import { JSX } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

type NavbarLink = {
  href: string;
  label: string;
  icon?: JSX.Element;
  variant: "link" | "default";
}

const navbarLinks: Array<NavbarLink> = [
  { href: "/", label: "Ver destaques", icon: <Star size={16} />, variant: "link" },
  { href: "/", label: "Ir para o site", icon: <ExternalLink size={16} />, variant: "default" },
]

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-center h-fit w-fit gap-2">
      {navbarLinks.map((link, index) => (
        <Link key={index} href={link.href}>
          <Button variant={link.variant}>{link.label}{link.icon}</Button>
        </Link>
      ))}
    </nav>
  );
}