"use client";

import "@/i18n";
import { useTranslation } from "react-i18next";
import Button from "./Button";

export default function Intro() {
  const { t } = useTranslation(["home", "common"]);

  return (
    <div className="sticky top-0 z-50 w-full p-4 md:max-w-4xl">
      <div className="glass-effect-light flex w-full flex-col gap-2 rounded-4xl p-2 text-center">
        <div className="w-full text-center">
          <h2 className="text-base">{t("introCta")}</h2>
        </div>
        <Button></Button>
      </div>
    </div>
  );
}
