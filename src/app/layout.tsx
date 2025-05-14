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
  const bgUrl = `${process.env.NEXT_PUBLIC_IMAGE_PATH}/background.png`;
  const bgUrl_2 = `${process.env.NEXT_PUBLIC_IMAGE_PATH}/background_2.png`;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "160vh",
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.7) 100%), url(${bgUrl}) no-repeat center center`,
            backgroundSize: "cover",
            zIndex: -2,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "160vh",
            left: 0,
            width: "100%",
            height: "160vh",
            background: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.85),rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1)), url(${bgUrl_2}) no-repeat center center`,
            backgroundSize: "cover",
            zIndex: -2,
            pointerEvents: "none",
          }}
        />

        <div className="hero-overlay" />
        <div className="content">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
