"use client";

import Intro from "@/components/Intro";
import FeaturesSection from "@/components/FeaturesSection";
import ShackHelperSection from "@/components/ShackHelperSection";
import CostSection from "@/components/CostSection";
import PressSection from "@/components/PressSection";
import AchievementsSection from "@/components/AchievementsSectin";
import FaqSection from "@/components/FaqSection";
import NavAppDownload from "@/components/NavAppDownload";
import MapSection from "@/components/MapSection";
import VisionSection from "@/components/VisionSection";

export default function Home() {
  return (
    <>
      <Intro />
      <NavAppDownload />
      <VisionSection />
      <FeaturesSection />
      <ShackHelperSection />
      <CostSection />
      <PressSection />
      <AchievementsSection />
      <MapSection />
      <FaqSection />
    </>
  );
}
