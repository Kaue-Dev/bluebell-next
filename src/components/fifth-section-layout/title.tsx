import { MessageCircleQuestion } from "lucide-react";

export const Title = () => {
  return (
    <div className="flex flex-col items-start gap-8 w-full">
      <MessageCircleQuestion size={140} className="text-bluebell-gold" />
      <h2 className="text-slate-700 text-6xl font-montserrat font-semibold w-full max-w-[650px]">Dúvidas e Perguntas Frequentes</h2>
      <p className="text-slate-500 font-montserrat text-2xl font-medium w-full max-w-[650px]">Todos nós possuímos perguntas na vida não é mesmo? A Bluebell recebe estas perguntas frequentes.</p>
    </div>
  )
};
