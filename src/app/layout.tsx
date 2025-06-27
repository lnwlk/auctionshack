import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My i18n App",
  description: "A Next.js app with i18next",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
