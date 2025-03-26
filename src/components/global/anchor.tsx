import Link from "next/link";

interface AnchorProps {
  children: React.ReactNode;
  href: string;
  variant: NavbarLinkVariants;
}

export type NavbarLinkVariants = "link" | "primaryButton" | "secondaryButton";

const navbarLinkStyles = {
  link: "hover:underline",
  primaryButton: "bg-bluebell-blue text-slate-100 rounded",
  secondaryButton: "bg-slate-100 rounded hover:bg-slate-200",
}

export const Anchor = ({ href, children, variant }: AnchorProps) => {
  return (
    <Link 
      href={href}
      className={`${"flex items-center gap-0.5 px-2 py-1.5 w-fit text-sm font-medium transition ease-in-out"} `.concat(`${navbarLinkStyles[variant]}`)}
    >
      {children}
    </Link>
  )
}