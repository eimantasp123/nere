import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata, Viewport } from "next";
import { Marcellus, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { Toaster } from "@/components/ui/sonner";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Nere Head Spa | Japoniškas galvos masažas Kaune",
    template: "%s | Nere Head Spa",
  },
  description:
    "Nere Head Spa – tai daugiau nei grožio procedūra. Tai sąmoningas pabėgimas į ramybę, kur rūpestingai atliekami galvos masažo ritualai atgaivina plaukus, atpalaiduoja kūną ir nuramina protą.",
  openGraph: {
    title: "Nere | Japoniškas galvos masažas Kaune",
    description:
      "Nere Head Spa – tai daugiau nei grožio procedūra. Tai sąmoningas pabėgimas į ramybę, kur rūpestingai atliekami galvos masažo ritualai atgaivina plaukus, atpalaiduoja kūną ir nuramina protą.",
    images: [
      {
        url: "/hero-2.jpg",
        width: 1200,
        height: 630,
        alt: "Nere Head Spa",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt">
      <body
        cz-shortcut-listen="true"
        className={`${marcellus.variable} ${plusJakartaSans.variable} antialiased`}
      >
        <Header />
        {children}
        <CookieBanner />
        <Toaster position="bottom-center" />
        <Footer />
      </body>
    </html>
  );
}
