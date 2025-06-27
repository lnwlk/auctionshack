"use client";

import Intro from "@/components/Intro";
import NavBar from "@/components/NavBar";
import CreateAuctionSection from "@/components/CreateAuctionSection";
import ShackHelperSection from "@/components/ShackHelperSection";
import CostSection from "@/components/CostSection";
import PressSection from "@/components/PressSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import NavAppDownload from "@/components/NavAppDownload";
import MeshBackground from "@/components/MeshBackground";
import MapSection from "@/components/MapSection";
import VisionSection from "@/components/VisionSection";

export default function Home() {
  return (
    <>
      <div className="relative mx-auto flex min-h-[150vh] flex-col items-center">
        <MeshBackground />
        <NavBar />
        <Intro />
        <NavAppDownload />
        <VisionSection />
        <CreateAuctionSection />
        <ShackHelperSection />
        <CostSection />
        <PressSection />
        <MapSection />
        <FaqSection />
        <Footer />
      </div>
    </>
  );
}
