import "@/i18n";
import { useTranslation } from "react-i18next";
import Link from "next/link";

type ButtonProps = {
  namespace?: string;
  buttonLabel?: string;
  href: string;
};

export default function Button({ namespace, buttonLabel, href }: ButtonProps) {
  const { t } = useTranslation(namespace ?? "common");

  return (
    <Link
      href={href}
      className="border-color glass-effect flex justify-center rounded-full p-4 text-center transition hover:cursor-pointer hover:opacity-80"
    >
      {buttonLabel ?? t("ctaButton")}
    </Link>
  );
}
