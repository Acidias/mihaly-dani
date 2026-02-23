import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Mihaly Dani",
  description: "Full-stack and ML engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <Script defer data-site="CCDYa0rp" src="https://analytics.mihaly-dani.com/oa.js" strategy="afterInteractive" />
      </head>
      <body className="font-sans antialiased bg-white text-neutral-800">{children}</body>
    </html>
  );
}
