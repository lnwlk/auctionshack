import "@/i18n";
import { useTranslation } from "react-i18next";
import FaqItem from "./FaqItem";

// Example SVGR imports
import IconQuestion from "@/icon/Plus.svg";
import IconHelp from "@/icon/Plus.svg";

export default function FaqSection() {
  const { t } = useTranslation(["faq"]);

  const faqs = [
    {
      icon: <IconQuestion />,
      question: t("howItWorksQuestion"),
      answer: t("howItWorksAnswer"),
    },
    {
      icon: <IconHelp />,
      question: t("feesQuestion"),
      answer: t("feesAnswer"),
    },
  ];

  return (
    <section className="flex w-full flex-col gap-8 px-4 py-16 md:max-w-6xl">
      <div className="flex flex-col gap-2">
        <h2 className="px-4 text-5xl">{t("faqHeadline")}</h2>
        <p className="px-4">{t("faqDescription")}</p>
      </div>
      <div className="flex flex-col gap-2">
        {faqs.map((faq, idx) => (
          <FaqItem key={idx} {...faq} />
        ))}
      </div>
      <a className="px-4" href={`mailto:${t("mailTo")}`}>
        {t("contactSupport")}
      </a>
    </section>
  );
}
