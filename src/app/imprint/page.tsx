"use client";

import { useTranslation } from "react-i18next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MeshBackground from "@/components/MeshBackground";
import Headline from "@/components/Headline";

export default function Imprint() {
  const { t } = useTranslation("legals");

  return (
    <>
      <div className="relative mx-auto flex min-h-[150vh] flex-col items-center">
        <MeshBackground />
        <NavBar />
        <div className="flex w-full flex-col gap-8 px-4 py-8 md:max-w-4xl md:py-16">
          <Headline
            namespace="legals"
            headingKey="imprint.headline"
            paragraphKey="imprint.contact"
          />
          <p
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: t("imprint.design") }}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
