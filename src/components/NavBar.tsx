"use client";

import { useState } from "react";
import CostBadge from "./NavBadge";
import { t } from "i18next";
import XTwitterIcon from "@/icon/XTwitter.svg";
import InstagramIcon from "@/icon/Instagram.svg";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Example() {
  return (
    <nav className="flex w-full justify-end p-4 md:max-w-6xl">
      <LanguageSwitcher />
      <div className="flex w-96 flex-wrap justify-end gap-1">
        <CostBadge badgeLabel={t("ctaButton")} href="/" />
        <CostBadge badgeLabel="ShackToken" href="/shackToken" />
        <CostBadge badgeLabel={t("contact")} href="/about" />
        <CostBadge icon={<XTwitterIcon />} href="/about" />
        <CostBadge icon={<InstagramIcon />} href="/about" />
      </div>
    </nav>
  );
}
