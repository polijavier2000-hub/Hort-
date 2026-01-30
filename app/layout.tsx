import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("http://192.168.192.76:3000"),
  title: "Hort! | Huertos urbanos automáticos",
  description:
    "Hort! diseña huertos urbanos hidropónicos automáticos para comer mejor sin tiempo ni conocimientos. Tecnología invisible, nutrición cercana.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Hort! | Huertos urbanos automáticos",
    description:
      "Huertos urbanos inteligentes que se cuidan solos. Tecnología invisible para cultivar en casa sin esfuerzo.",
    url: "https://hort.example.com",
    siteName: "Hort!",
    images: [
      {
        url: "/assets/product-10.jpg",
        width: 1200,
        height: 630,
        alt: "Hort! huerto urbano automático",
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
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} ${inter.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
