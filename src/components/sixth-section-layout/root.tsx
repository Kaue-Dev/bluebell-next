import Image from "next/image";

import bgImage from "@/assets/images/sixth-bg.jpg";

interface RootProps {
  children: React.ReactNode;
}

export const Root = ({ children }: RootProps) => {
  return (
    <div className="relative flex items-center justify-center w-full gap-8 mt-8 rounded-4xl overflow-hidden">
      <Image src={bgImage} alt="Background" className="max-h-[1000px] w-full object-cover object-bottom brightness-40"  />
      {children}
    </div>
  );
};
