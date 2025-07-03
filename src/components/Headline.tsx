import "@/i18n";
import { useTranslation } from "react-i18next";

type HeadlineProps = {
  namespace?: string;
  headingKey?: string;
  headingSecondKey?: string;
  paragraphKey?: string;
};

export default function Headline({
  namespace,
  headingKey,
  headingSecondKey,
  paragraphKey,
}: HeadlineProps) {
  const { t } = useTranslation([namespace]);

  return (
    <div className="w-full md:max-w-2xl">
      <div>
        <h3 className="text-4xl font-bold tracking-tight">
          {t(headingKey ?? "")}
        </h3>
        <h3 className="text-4xl tracking-tight">{t(headingSecondKey ?? "")}</h3>
      </div>
      <p
        className="pt-4 text-lg opacity-80 md:text-2xl"
        dangerouslySetInnerHTML={{ __html: t(paragraphKey ?? "") }}
      />
    </div>
  );
}
