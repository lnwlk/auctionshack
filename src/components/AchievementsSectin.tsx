import "@/i18n";
import { useTranslation } from "react-i18next";
import AchievementCard from "./AchievementCard";
import IconSwitzerland from "@/icon/Switzerland.svg";
import IconCubeDots from "@/icon/CubeDots.svg";
import IconExtrude from "@/icon/Extrude.svg";

console.log("typeof AchievementCard:", typeof AchievementCard);
console.log("AchievementCard:", AchievementCard);
console.log("typeof IconSwitzerland:", typeof IconSwitzerland);
console.log("IconSwitzerland:", IconSwitzerland);

export default function AchievementsSection() {
  const { t } = useTranslation(["home"]);

  return (
    <div className="flex w-full flex-col gap-8 p-4 md:max-w-6xl">
      <h1 className="text-5xl">{t("achievementsHeadline")}</h1>

      <div className="flex flex-col gap-2">
        <AchievementCard
          icon={<IconSwitzerland />}
          textKey="achievementAuctionDaily"
        />
        <AchievementCard icon={<IconCubeDots />} textKey="achievementUser" />
        <AchievementCard
          icon={<IconExtrude />}
          textKey="achievementAuctionDaily"
        />
      </div>
    </div>
  );
}
