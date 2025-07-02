import "@/i18n";
import { useTranslation } from "react-i18next";

export default function CreateAuctionSection() {
  const { t } = useTranslation(["home"]);

  return (
    <div className="relative w-screen max-w-7xl overflow-hidden py-8 md:py-16">
      {/* Background image */}
      <img
        src="/app/AppFrame.png"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full -rotate-12 object-contain"
      />

      {/* Foreground content */}
      <div className="flex min-h-[calc(100vh-10vh)] w-full flex-col items-center gap-4 py-16 md:py-16">
        <div className="glass-effect mx-8 rounded-2xl p-4 text-center text-lg">
          <h3>{t("VisionStart")}</h3>
        </div>
        <div className="glass-effect-light w-2 flex-grow rounded-full"></div>
        <div className="glass-effect mx-8 rounded-2xl p-4 text-center text-lg">
          <h3>{t("VisionEnd")}</h3>
        </div>
      </div>
    </div>
  );
}
