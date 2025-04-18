import { BadgeDollarSign, HandHeart, Handshake, MapPinned, Scroll, UsersRound } from "lucide-react"
import { Card } from "./card"

export const Cards = () => {
  return (
    <div className="grid grid-cols-3 gap-10 w-full px-16">
      <Card 
        icon={<BadgeDollarSign size={36} />}
        title="Alto potencial de valorização"
        description="A expansão urbana e o crescimento econômico da região indicam que os imóveis em Cascavel tendem a valorizar com o tempo, maximizando o retorno sobre o investimento.A expansão urbana e o crescimento econômico da região indicam que os imóveis em Cascavel tendem a valorizar com o tempo, maximizando o retorno sobre o investimento."
      />
      <Card 
        icon={<MapPinned size={36} />}
        title="Localização estratégica"
        description="Situada em um polo regional, Cascavel oferece excelente infraestrutura e acesso facilitado a grandes centros, o que atrai tanto moradores quanto investidores interessados em imóveis bem localizados."
      />
      <Card 
        icon={<Handshake size={36} />}
        title="Ambiente de negócios dinâmico"
        description="A cidade tem se destacado pela diversificação de setores econômicos, atraindo novas empresas e gerando uma demanda constante por imóveis residenciais e comerciais."
      />
      <Card 
        icon={<HandHeart size={36} />}
        title="Qualidade de vida"
        description="Com infraestrutura completa, áreas de lazer, educação e saúde de qualidade, Cascavel se posiciona como um destino ideal para famílias e profissionais, impulsionando a procura por imóveis."
      />
      <Card 
        icon={<UsersRound size={36} />}
        title="Crescimento populacional"
        description="O aumento da população e a migração para a região reforçam a demanda por habitação e espaços comerciais, garantindo oportunidades sólidas de retorno no mercado imobiliário."
      />
      <Card 
        icon={<Scroll size={36} />}
        title="Incentivos e segurança jurídica"
        description="Políticas governamentais e um ambiente regulatório transparente proporcionam segurança jurídica, facilitando transações e atraindo investidores em busca de um mercado estável."
      />
    </div>
  )
}
