import "@/i18n";
import { useTranslation } from "react-i18next";
import FaqItem from "./FaqItem";

export default function FaqSection() {
  const { t } = useTranslation(["faq"]);

  const faqs = t("faqitem", { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <section className="flex w-full flex-col items-center gap-8 px-4 py-8 md:max-w-7xl md:py-16">
      <div className="flex w-full max-w-md flex-col gap-2">
        <h2 className="px-4 text-5xl">{t("faqHeadline")}</h2>
        <p className="px-4">{t("faqDescription")}</p>
      </div>
      <div className="flex w-full max-w-2xl flex-col gap-2">
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
