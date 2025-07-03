"use client";

import CostBadge from "./NavBadge";
import { t } from "i18next";
import IconXTwitter from "@/icon/XTwitter.svg";
import IconInstagram from "@/icon/Instagram.svg";
import Link from "next/link";

import LanguageSwitcher from "./LanguageSwitcher";

export default function Example() {
  return (
    <nav className="z-50 mx-auto flex w-full max-w-7xl justify-end p-4">
      <div className="flex w-sm flex-wrap justify-end gap-1 md:w-full">
        <Link
          href="/"
          className="glass-effect flex h-10 w-10 items-center justify-center rounded-full p-1 transition hover:opacity-80"
        >
          <img src="/brand/app-icon.png" alt="AuctionShack Logo" />
        </Link>
        <CostBadge badgeLabel={t("ctaButton")} href="/" />
        <CostBadge badgeLabel="ShackToken" href="/shackToken" />
        <CostBadge badgeLabel={t("contact.label")} href="/contact" />
        <Link
          href="https://www.instagram.com/auctionshack?igsh=MXE3ZWRyMjU2Z25zOA=="
          className="glass-effect flex h-10 w-10 items-center justify-center rounded-full transition hover:opacity-80"
        >
          <IconInstagram className="h-6 w-6" />
        </Link>
        <Link
          href="https://x.com/auctionshackio"
          className="glass-effect flex h-10 w-10 items-center justify-center rounded-full transition hover:opacity-80"
        >
          <IconXTwitter className="h-6 w-6" />
        </Link>
      </div>
    </nav>
  );
}
