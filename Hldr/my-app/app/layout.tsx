import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HLDR — Fine Dining Experience",
  description: "An intimate fine dining restaurant celebrating artisanal cuisine, crafted with passion and served in a space designed for the senses.",
  keywords: ["fine dining", "restaurant", "tasting menu", "luxury dining"],
  openGraph: {
    title: "HLDR — Fine Dining Experience",
    description: "Where Flavour Finds its Soul.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${cinzel.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
