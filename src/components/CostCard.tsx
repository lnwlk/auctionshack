import "@/i18n";
import { useTranslation } from "react-i18next";
import CostBadge from "./CostBadge";

type CostCardProps = {
  namespace?: string;
  costHeadline?: string;
  costParagraph?: string;
  costBadge?: string;
};

export default function Headline({
  namespace,
  costHeadline,
  costParagraph,
  costBadge,
}: CostCardProps) {
  const { t } = useTranslation([namespace]);

  return (
    <div className="glass-effect flex w-full place-content-between rounded-4xl p-4">
      <div className="flex flex-col">
        <h4 className="text-base">{t(costHeadline ?? "")}</h4>
        <p className="text-4xl">{t(costParagraph ?? "")}</p>
      </div>
      <CostBadge badgeLabel={t(costBadge ?? "")} />
    </div>
  );
}
