import { ThirdSectionLayout } from '@/components/third-section-layout'

export const ThirdSection = () => {
  return (
    <ThirdSectionLayout.Root>
      <ThirdSectionLayout.Header />
      <ThirdSectionLayout.Gallery />
      <ThirdSectionLayout.Footer />
    </ThirdSectionLayout.Root>
  )
}