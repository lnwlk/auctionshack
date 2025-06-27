import { useState } from "react";

type FaqItemProps = {
  icon: React.ReactNode;
  question: string;
  answer: string;
};

export default function FaqItem({ icon, question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-effect rounded-xl p-2 transition-all">
      <button
        className="flex w-full justify-between gap-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4 text-left">
          <div className="glass-effect items-center rounded-full border p-2">
            {icon}
          </div>
          <span className="text-lg">{question}</span>
        </div>
      </button>
      {isOpen && <div className="mt-4 transition-opacity">{answer}</div>}
    </div>
  );
}
