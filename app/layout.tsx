"use client";

import { Inter } from "next/font/google";
import { TokenContextProvider } from "./context/tokenContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TokenContextProvider>
        <body className={inter.className}>{children}</body>
      </TokenContextProvider>
    </html>
  );
}
