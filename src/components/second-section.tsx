import { Logo } from "./global/logo"
import { SecondSectionLayout } from "./second-section-layout"

export const SecondSection = () => {
  return (
    <SecondSectionLayout.Root>
      <SecondSectionLayout.Wrapper>
        <div className="flex flex-col items-start justify-start gap-4 w-full">
          <Logo />
          <p className="text-3xl font-medium text-bluebell-blue/80 font-montserrat max-w-[740px] text-justify">
            Aqui na Bluebell, nós oferecemos mais do que serviços imobiliários, nós oferecemos uma <span className="font-semibold">experência única</span> com o objetivo de satisfazer suas necessidades e ultrapassar suas expectativas.
          </p>
        </div>
        <SecondSectionLayout.Statistics />
      </SecondSectionLayout.Wrapper>
      <SecondSectionLayout.SideImage />
    </SecondSectionLayout.Root>
  )
}