"use client";

import "@/i18n";
import { useTranslation } from "react-i18next";

export default function Intro() {
  const { t } = useTranslation(["home", "common"]);

  return (
    <div className="flex w-full flex-col items-center gap-2 px-4 md:max-w-7xl">
      <img className="w-64" src="./brand/app-icon.png" alt={t("logoAlt")} />
      <h1 className="text-center text-5xl tracking-tight">
        {t("introHead")
          .split("\n")
          .map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}{" "}
      </h1>
    </div>
  );
}
