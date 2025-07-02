import "@/i18n";
import { useTranslation } from "react-i18next";
import CostCard from "./CostCard";

export default function CostSection() {
  const { t } = useTranslation(["home"]);

  return (
    <div className="flex w-full flex-col items-center px-4 py-8 md:max-w-7xl md:py-16">
      <div className="glass-effect-light flex w-full max-w-4xl flex-col space-y-2 rounded-4xl border px-4 py-8">
        <h4 className="text-4xl">{t("costHeadline")}</h4>
        <p className="text-TextSecondary text-base">{t("costParagraph")}</p>
        <CostCard
          namespace="home"
          costHeadline="costCardSellHeadline"
          costParagraph="costCardSellCost"
          costBadge="costCardSellBadge"
        />
        <CostCard
          namespace="home"
          costHeadline="costCardBuyHeadline"
          costParagraph="costCardBuyCost"
          costBadge="costCardBuyBadge"
        />
        <p className="text-TextSecondary text-base">{t("costParagraphEnd")}</p>
      </div>
    </div>
  );
}
