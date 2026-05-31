import type { Metadata } from "next";
import "./globals.css";

import { Orbitron, Inter } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ronak Saini | Full Stack Developer",
description:
"Portfolio of Ronak Saini - Full Stack Developer specializing in Next.js, React, AI integrations, modern web applications and scalable systems.",
  keywords: [
    "Ronak Saini",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Web Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${inter.variable} bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}