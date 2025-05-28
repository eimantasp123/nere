import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata, Viewport } from "next";
import { Marcellus, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/ui/CookieBanner";

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
  title: "Nere | Japanese Head Spa Lithuania ",
  description: "Japanese Head Spa Lithuania",
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
        <Footer />
      </body>
    </html>
  );
}
