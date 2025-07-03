// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import MeshBackground from "../components/MeshBackground";

export const metadata: Metadata = {
  title: "AuctionShack",
  description: "Gain space. Discover treasures.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col justify-between">
        <MeshBackground />
        <div>
          <NavBar />
          <main className="relative mx-auto flex flex-col items-center py-16">
            {children}
          </main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
