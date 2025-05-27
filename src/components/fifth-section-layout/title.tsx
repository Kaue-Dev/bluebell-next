import { MessageCircleQuestion } from "lucide-react";

export const Title = () => {
  return (
    <div className="flex flex-col items-start lg:gap-8 gap-4 w-full">
      <MessageCircleQuestion size={140} className="text-bluebell-gold lg:block hidden" />
      <h2 className="text-slate-700 lg:text-6xl text-3xl font-montserrat font-semibold w-full max-w-[650px]">Dúvidas e Perguntas Frequentes</h2>
      <p className="text-slate-500 font-montserrat lg:text-2xl text-lg font-medium w-full max-w-[650px]">Todos nós possuímos perguntas na vida não é mesmo? A Bluebell recebe estas perguntas frequentes.</p>
    </div>
  )
};
