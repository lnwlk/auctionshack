import "@/i18n";
import { useTranslation } from "react-i18next";

export default function Button() {
  const { t } = useTranslation(["common"]);

  return (
    <button
      className="border-color glass-effect flex justify-center rounded-full p-4 text-center hover:bg-black"
      type="button"
    >
      {t("ctaButton")}
    </button>
  );
}
