"use client";

import "@/i18n";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation(["common"]);

  return (
    <footer className="relative bottom-0 m-auto flex w-full flex-col items-center py-16 md:max-w-7xl">
      <Link href="/">
        <img className="w-20" src="./brand/app-icon.png" alt={t("logoAlt")} />
      </Link>
      <div className="flex gap-8">
        <Link href="/imprint">{t("imprint")}</Link>
        <Link href="/privacyPolicy">{t("privacyPolicy")}</Link>
        <Link href="/termsOfService">{t("termsOfService")}</Link>
      </div>
    </footer>
  );
}
