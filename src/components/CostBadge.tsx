import "@/i18n";
import { useTranslation } from "react-i18next";

type BadgeProps = {
  namespace?: string;
  badgeLabel?: string;
};

export default function Badge({ namespace, badgeLabel }: BadgeProps) {
  const { t } = useTranslation([namespace]);

  return (
    <div>
      <span className="glass-effect rounded-full px-2 py-1 text-white">
        {t(badgeLabel ?? "")}
      </span>
    </div>
  );
}
