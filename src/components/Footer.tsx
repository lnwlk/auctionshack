import "@/i18n";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation(["common"]);

  return (
    <footer className="flex w-full flex-col items-center p-8 md:max-w-6xl">
      <Link href="/">
        <img className="w-20" src="./brand/app-icon.png" alt={t("logoAlt")} />
      </Link>
      <div className="flex gap-4">
        <Link href="/imprint">{t("imprint")}</Link>
        <Link href="/privacyPolicy">{t("privacyPolicy")}</Link>
        <Link href="/termsOfService">{t("termsOfService")}</Link>
      </div>
    </footer>
  );
}
