import "@/i18n";
import { useTranslation } from "react-i18next";

type AchievementCardProps = {
  icon: React.ReactNode;
  textKey: string;
};

export default function AchievementCard({
  icon,
  textKey,
}: AchievementCardProps) {
  const { t } = useTranslation(["home"]);

  return (
    <div className="glass-effect-light flex items-center gap-4 rounded-2xl p-2">
      <div className="glass-effect-light rounded-full p-4">{icon}</div>
      <p>{t(textKey)}</p>
    </div>
  );
}
