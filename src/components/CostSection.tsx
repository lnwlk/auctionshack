import "@/i18n";
import { useTranslation } from "react-i18next";
import CostCard from "./CostCard";

export default function CostSection() {
  const { t } = useTranslation(["home"]);

  return (
    <div className="mx-auto px-4 py-16 md:max-w-6xl">
      <div className="glass-effect-light flex w-full flex-col space-y-2 rounded-4xl border px-4 py-8">
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
