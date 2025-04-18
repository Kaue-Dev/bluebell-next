import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

type FrequentlyQuestionsItemType = {
  quest: string;
  answer: string;
}

const FrequentlyQuestionsItens: Array<FrequentlyQuestionsItemType> = [
  {
    quest: "Que tipos de oportunidades oferecemos em Cascavel?",
    answer: "Sim. Ele adere ao padrão de design WAI-ARIA.",
  },
  {
    quest: "Quais as opções de pagamento disponíveis?",
    answer: "Sim. Ele adere ao padrão de design WAI-ARIA.",
  },
  {
    quest: "Podemos ajudar com financiamento?",
    answer: "Sim. Ele adere ao padrão de design WAI-ARIA.",
  },
  {
    quest: "Podemos ajudar com financiamento?",
    answer: "Sim. Ele adere ao padrão de design WAI-ARIA.",
  },
  {
    quest: "Podemos ajudar com financiamento?",
    answer: "Sim. Ele adere ao padrão de design WAI-ARIA.",
  },
  {
    quest: "Podemos ajudar com financiamento?",
    answer: "Sim. Ele adere ao padrão de design WAI-ARIA.",
  },
]

export const FrequentlyQuestions = () => {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full bg-slate-100 px-6 rounded-2xl">
        {FrequentlyQuestionsItens.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="py-6 px-3">
            <AccordionTrigger className="font-montserrat text-2xl font-medium text-bluebell-blue cursor-pointer hover:no-underline">{item.quest}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
