"use client";

import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <div className="relative mx-auto flex flex-col items-center">
        <div className="w-full max-w-7xl px-8">
          <h1 className="pt-16 text-4xl">{t("contact.label")}</h1>
        </div>
        <div className="flex max-w-7xl gap-4 px-8 py-8">
          <div className="flex w-full flex-col justify-between rounded-2xl bg-white p-8 text-black">
            <div className="pb-8">
              <h3 className="pb-1 text-2xl">{t("support.headline")}</h3>
              <p className="text-lg opacity-60">{t("support.description")}</p>
            </div>
            <a
              className="text-lg opacity-60 hover:opacity-100"
              href={t("support.mailto")}
            >
              {t("support.mail")}
            </a>
          </div>
          <div className="glass-effect flex w-full flex-col justify-between rounded-2xl p-8">
            <div className="pb-8">
              <h3 className="pb-1 text-2xl">{t("press.headline")}</h3>
              <p className="text-lg opacity-80">{t("press.description")}</p>
            </div>
            <a
              className="text-lg opacity-80 hover:opacity-100"
              href={t("press.mailto")}
            >
              {t("press.mail")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
