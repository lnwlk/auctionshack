import "@/i18n";
import { useTranslation } from "react-i18next";
import Headline from "./Headline";

export default function FeaturesSection() {
  const { t } = useTranslation(["home"]);

  return (
    <div
      className="flex w-full justify-center px-4"
      style={{
        background: `linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,.8) 25%, rgba(255,255,255,.8) 75%, rgba(255,255,255,0) 100%)`,
      }}
    >
      <div className="flex w-full max-w-7xl flex-col items-center gap-16 py-8 md:py-16">
        {/* Section 1 */}
        <div className="flex flex-col gap-8">
          <div className="glass-effect w-full max-w-4xl rounded-2xl p-2">
            <img
              src="/app/placeholder.png"
              alt=""
              className="aspect-video w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
          <div className="text-shackBlack px-4">
            <Headline
              namespace="home"
              headingKey="createAuctionHeadline"
              headingSecondKey="createAuctionHeadlineSecond"
              paragraphKey="createAuctionParagraph"
            />
          </div>
        </div>
        {/* Section 2 */}
        <div className="flex flex-col gap-8">
          <div className="glass-effect w-full max-w-4xl rounded-2xl p-2">
            <img
              src="/app/placeholder.png"
              alt=""
              className="aspect-video w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
          <div className="text-shackBlack px-4">
            <Headline
              namespace="home"
              headingKey="bidOnAuctionHeadline"
              headingSecondKey="bidOnAuctionHeadlineSecond"
              paragraphKey="bidOnAuctionParagraph"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
