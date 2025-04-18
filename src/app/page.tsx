import { FifthSection } from "@/components/fifth-section";
import { FirstSection } from "@/components/first-section";
import { FourthSection } from "@/components/fourth-section";
import { SecondSection } from "@/components/second-section";
import { ThirdSection } from "@/components/third-section";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-8 p-8">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </div>
  )
}