import "@/i18n";
import { useTranslation } from "react-i18next";
import Headline from "./Headline";

export default function CreateAuctionSection() {
  return (
    <div className="flex flex-col gap-8 bg-gradient-to-b from-white to-white/0 px-4 py-16">
      <div className="glass-effect aspect-video rounded-2xl p-2">
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
  );
}
