import { ExternalLink, Star } from "lucide-react";
import { JSX } from "react";
import { Anchor, NavbarLinkVariants } from "../global/anchor";

type NavbarLink = {
  href: string;
  label: string;
  icon?: JSX.Element;
  variant: NavbarLinkVariants;
}

const navbarLinks: Array<NavbarLink> = [
  { href: "/", label: "Ver destaques", icon: <Star size={16} />, variant: "link" },
  { href: "/", label: "Ir para o site", icon: <ExternalLink size={16} />, variant: "secondaryButton" },
]

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-center h-fit w-fit gap-2">
      {navbarLinks.map((link, index) => (
        <Anchor 
          key={index} 
          href={link.href}
          variant={link.variant}
        >
          {link.label}
          {link.icon}
        </Anchor>
      ))}
    </nav>
  );
}