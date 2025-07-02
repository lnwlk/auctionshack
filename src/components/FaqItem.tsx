import { useState } from "react";
import IconPlus from "@/icon/Plus.svg";
import IconMinus from "@/icon/Vertical.svg";

type FaqItemProps = {
  question: string;
  answer: string;
};

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div
      className={`glass-effect cursor-pointer rounded-xl p-4 transition-all duration-300 ${
        isOpen ? "bg-white/10" : ""
      }`}
      onClick={toggle}
    >
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-left">
          <div
            className={`glass-effect items-center rounded-full border p-2 transition-transform duration-600 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {isOpen ? <IconMinus /> : <IconPlus />}
          </div>
          <span className="text-lg font-medium">{question}</span>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "mt-4 max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-base text-neutral-200">{answer}</p>
      </div>
    </div>
  );
}
