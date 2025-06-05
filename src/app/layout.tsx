import type { Metadata } from "next";
import { Orbitron, Rajdhani, Play } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
});

const play = Play({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-play",
});


export const metadata: Metadata = {
  title: "Cyber Portfolio",
  description: "A cyberpunk-themed developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${rajdhani.variable} ${play.variable} font-orbitron`}>
        {children}
      </body>
    </html>
  );
}
