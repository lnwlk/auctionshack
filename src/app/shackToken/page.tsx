"use client";

import Headline from "@/components/Headline";
import TokenChart from "@/components/TokenChart";
import VideoRevealPlayer from "@/components/VideoRevealPlayer";

const videosLeft = ["0yOhwprQaiw", "b7_Y2M7nNNM", "i_e9rjEIOYw"];
const videosRight = ["syH9HjdMw24", "0uHuC59rOD8"];

export default function Home() {
  return (
    <>
      <div className="mx-auto flex w-full flex-col items-center gap-8">
        <div className="w-full px-4 py-8 md:max-w-4xl md:py-16">
          <Headline
            namespace="token"
            headingKey="headline"
            paragraphKey="purpose"
          />
        </div>
        <div className="relative w-full max-w-4xl rounded-2xl bg-gradient-to-b p-4">
          <div className="glass-effect flex aspect-square w-full justify-center rounded-4xl md:aspect-auto">
            <TokenChart />
          </div>
        </div>
        <div className="w-full max-w-4xl p-4 md:mt-40 md:mb-16">
          <Headline
            namespace="token"
            headingKey="meetShack"
            paragraphKey="meetShackDescription"
          />
        </div>
        <div className="flex w-full max-w-7xl flex-col gap-8 overflow-hidden p-4 md:flex-row md:gap-24">
          <div className="flex w-full flex-col gap-8 md:gap-24">
            {videosLeft.map((id, index) => (
              <div key={index}>
                <VideoRevealPlayer videoId={id} />
              </div>
            ))}
          </div>
          <div className="flex w-full flex-col gap-8 md:gap-24 md:pt-80">
            {videosRight.map((id, index) => (
              <div key={index}>
                <VideoRevealPlayer videoId={id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
