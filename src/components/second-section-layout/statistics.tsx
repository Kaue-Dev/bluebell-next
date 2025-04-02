type StatisticsTextDataType = {
  value: string;
  text: string;
}

const statisticsTextData: Array<StatisticsTextDataType> = [
  {
    value: "+29",
    text: "Negócios fechados mensalmente",
  },
  {
    value: "94%",
    text: "De satisfação dos nossos clientes",
  },
  {
    value: "95",
    text: "Oportunidades únicas para escolher",
  },
]

export const Statistics = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-4 w-full mt-auto">
      {statisticsTextData.map((item, index) => (
        <div className="w-full" key={index}>
          <div className="flex items-center justify-start gap-4 w-full">
            <div className="w-fit text-bluebell-gold font-bold text-8xl">{item.value}</div>
            <p className="w-full max-w-56 font-medium text-2xl mx-auto">{item.text}</p>
          </div>
          {index !== statisticsTextData.length - 1 && <div className="w-full h-0.5 bg-slate-300 my-4"></div>}
        </div>
      ))}
    </div>
  );
};
