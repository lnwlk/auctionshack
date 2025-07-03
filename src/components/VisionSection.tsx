import "@/i18n";
import { useTranslation } from "react-i18next";
import TransparentVideo from "./TransparentVideo";

export default function CreateAuctionSection() {
  const { t } = useTranslation(["home"]);

  return (
    <div className="relative my-4 w-screen max-w-7xl md:mt-16 md:py-16">
      <TransparentVideo
        srcWebm="/video/AppFrame_01-vp9-chrome.webm"
        srcHevcMp4="/video/AppFrame_01-hevc-safari.mp4"
        className="rounded-lg"
      />

      {/* Foreground content */}
      <div className="flex min-h-[calc(100vh-10vh)] w-full max-w-7xl flex-grow flex-col justify-between gap-4 px-4 py-24 md:flex-row md:px-40">
        <div className="glass-effect max-w-md shrink self-center rounded-2xl px-8 py-4 text-center text-xl md:self-start">
          <h3>{t("VisionStart")}</h3>
        </div>
        <div className="glass-effect max-w-md shrink self-center rounded-2xl px-8 py-4 text-center text-xl md:self-end">
          <h3>{t("VisionEnd")}</h3>
        </div>
      </div>
    </div>
  );
}
