"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MeshBackground from "@/components/MeshBackground";
import Headline from "@/components/Headline";
import TokenChart from "@/components/TokenChart";

export default function Home() {
  return (
    <>
      <div className="mx-auto flex flex-col items-center">
        <div className="w-full px-4 py-8 md:max-w-4xl md:py-16">
          <Headline
            namespace="token"
            headingKey="headline"
            paragraphKey="purpose"
          />
        </div>
        <div className="relative w-full max-w-4xl rounded-2xl bg-gradient-to-b p-2">
          <div className="glass-effect aspect-square w-full rounded-4xl md:aspect-auto">
            <TokenChart />
          </div>
        </div>
      </div>
    </>
  );
}
