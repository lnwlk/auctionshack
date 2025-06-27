"use client";

import "@/i18n";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import clsx from "clsx";

type BadgeProps = {
  badgeLabel?: string;
  icon?: React.ReactNode;
  href?: string; // Internal or external link
};

export default function Badge({ badgeLabel, icon, href }: BadgeProps) {
  const { t } = useTranslation(["common"]);
  const isIconOnly = !!icon && !badgeLabel;

  const content = (
    <div
      className={clsx(
        "glass-effect inline-flex items-center justify-center rounded-full text-white transition hover:opacity-80",
        isIconOnly ? "h-10 w-10" : "px-4 py-2",
      )}
    >
      {icon && <span>{icon}</span>}
      {badgeLabel && t(badgeLabel)}
    </div>
  );

  if (href) {
    const isExternal = href.startsWith("http");

    return isExternal ? (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    ) : (
      <Link href={href}>{content}</Link>
    );
  }

  return content;
}
