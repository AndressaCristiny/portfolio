import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./styles/background.css";

import Header from "./components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Andressa Cristiny",
  description: "Portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/_next/static/css/63c6a282b280c367.css" />
        <link rel="stylesheet" href="/_next/static/css/70f0ca5b7408347b.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="content">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
