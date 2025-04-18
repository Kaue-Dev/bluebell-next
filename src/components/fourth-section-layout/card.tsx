import { BadgeDollarSign } from "lucide-react"

export const Card = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6">
      <BadgeDollarSign size={36} className="text-bluebell-gold mb-2" />
      <h3 className="font-montserrat font-semibold text-bluebell-blue/80 text-2xl text-start mb-6">Alto potencial de valorização</h3>
      <p className="font-normal text-sm text-bluebell-blue/50 text-start w-full h-fit">A expansão urbana e o crescimento econômico da região indicam que os imóveis em Cascavel tendem a valorizar com o tempo, maximizando o retorno sobre o investimento. A expansão urbana e o crescimento econômico da região indicam que os imóveis em Cascavel tendem a valorizar com o tempo, maximizando o retorno sobre o investimento.</p>
    </div>
  )
}
