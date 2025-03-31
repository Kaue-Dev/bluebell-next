import { FirstSection } from "@/components/first-section";
import { SecondSection } from "@/components/second-section";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-8">
      <FirstSection />
      <SecondSection />
    </div>
  )
}