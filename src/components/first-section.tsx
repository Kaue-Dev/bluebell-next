import { FirstSectionLayout } from "@/components/first-section-layout";

export const FirstSection = () => {
  return (
    <FirstSectionLayout.Root>
      <FirstSectionLayout.Wrapper>
        <FirstSectionLayout.Header />
        <FirstSectionLayout.Title />
        <FirstSectionLayout.Footer />
      </FirstSectionLayout.Wrapper>
      <FirstSectionLayout.SideImage />
    </FirstSectionLayout.Root>
  );
};
