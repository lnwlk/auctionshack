"use client";

import CostBadge from "./NavBadge";
import { t } from "i18next";

import LanguageSwitcher from "./LanguageSwitcher";

export default function Example() {
  return (
    <nav className="flex w-full justify-end p-4 md:max-w-6xl">
      <LanguageSwitcher />
      <div className="flex w-96 flex-wrap justify-end gap-1">
        <CostBadge badgeLabel={t("ctaButton")} href="/" />
        <CostBadge badgeLabel="ShackToken" href="/shackToken" />
        <CostBadge badgeLabel={t("contact")} href="/about" />
      </div>
    </nav>
  );
}
