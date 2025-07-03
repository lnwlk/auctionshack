// src/components/LanguageSwitcher.tsx
"use client";

import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="absolute top-8 left-8 z-50 flex gap-4">
      <button
        onClick={() => changeLanguage("en")}
        className="rounded-2xl bg-white/20 p-4 hover:bg-white/40"
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("de")}
        className="rounded-2xl bg-white/20 p-4 hover:bg-white/40"
      >
        DE
      </button>
    </div>
  );
}
