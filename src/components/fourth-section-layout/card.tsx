interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const Card = ({ 
  icon,
  title,
  description
}: CardProps) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 h-80">
      <div className="mb-2 text-bluebell-gold">{icon}</div>
      <h3 className="font-montserrat font-semibold text-bluebell-blue/80 text-2xl text-start mb-6 max-w-72">{title}</h3>
      <p className="font-normal text-sm text-bluebell-blue/50 text-start w-full h-fit">{description}</p>
    </div>
  )
}
