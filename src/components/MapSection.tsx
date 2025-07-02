import "@/i18n";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import Headline from "./Headline";

export default function MapSection() {
  const { t } = useTranslation(["home"]);

  return (
    <div className="flex w-full flex-col items-center gap-8 pt-16 text-center md:pt-24">
      <div className="max-w-4xl px-4">
        <Headline namespace="home" headingKey="locationHeadline" />
        <p>{t("locationParagraph")}</p>
      </div>
      <div className="map flex w-full flex-col items-center gap-4 py-16 text-center">
        <div className="glass-effect-large aspect-square w-80 overflow-hidden rounded-full">
          <img src="/app/MapCrop.png" alt="" />
        </div>
      </div>
    </div>
  );
}
