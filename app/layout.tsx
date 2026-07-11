import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aether Protocol — Liquidity for the on-chain economy",
  description:
    "Aether ($AETH) is a next-generation liquidity protocol powering fast, permissionless and low-fee value transfer across chains.",
  keywords: ["crypto", "defi", "token", "aether", "web3", "liquidity"],
  openGraph: {
    title: "Aether Protocol — $AETH",
    description:
      "A next-generation liquidity protocol powering the on-chain economy.",
    type: "website",
  },
  metadataBase: new URL("https://aether-protocol.example"),
};

export const viewport = {
  themeColor: "#05060d",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
