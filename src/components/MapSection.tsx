import "@/i18n";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import Headline from "./Headline";

export default function MapSection() {
  const { t } = useTranslation(["home"]);

  return (
    <div className="flex w-full flex-col gap-8 py-16 text-center">
      <div className="px-8">
        <Headline namespace="home" headingKey="locationHeadline" />
        <p>{t("locationParagraph")}</p>
      </div>
      <div className="flex w-full flex-col items-center gap-4 bg-[url(/app/Map.png)] bg-cover bg-center bg-no-repeat text-center">
        <div className="glass-effect-large aspect-square w-80 overflow-hidden rounded-full">
          <img src="/app/MapCrop.png" alt="" />
        </div>
        <Button />
      </div>
    </div>
  );
}
