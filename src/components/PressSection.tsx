import "@/i18n";
import { useTranslation } from "react-i18next";

export default function PressSection() {
  const { t } = useTranslation(["home"]);

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 px-4 py-8 text-center md:max-w-7xl md:py-16">
      <h1 className="text-5xl">{t("pressHeadline")}</h1>
      <div className="flex flex-col items-center gap-4 md:max-w-2xl">
        <img
          className="w-24"
          src={t("pressLogoMinutes")}
          alt="Logo 20 Minutes"
        />
        <p className="text-lg">{t("pressParagraphMinutes")}</p>
        <a
          className="text-lg underline underline-offset-6"
          href={t("pressLinkMinutes")}
        >
          Zum Artikel
        </a>
      </div>
      <div className="flex flex-col items-center gap-4 md:max-w-2xl">
        <img
          className="w-24"
          src={t("pressLogoZugerZeitung")}
          alt="Logo Zugerzeitung"
        />
        <p className="text-lg">{t("pressParagraphZugerZeitung")}</p>
        <a
          className="text-lg underline underline-offset-6"
          href={t("pressLinkZugerZeitung")}
        >
          Zum Artikel
        </a>
      </div>
    </div>
  );
}
