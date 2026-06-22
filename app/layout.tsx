import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: "ÁsDeCáVir | Rock Português ao Vivo",
  description: "Site oficial dos ÁsDeCáVir, banda de covers de rock em português.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>{children}<WhatsAppButton /></body>
    </html>
  );
}