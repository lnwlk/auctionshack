// src/components/LanguageSwitcher.tsx
"use client";

import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-4">
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("de")}>DE</button>
    </div>
  );
}
