import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tastebite",
  description: "A Next.js 13 Meta Food recipe application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
        <body className={`${inter.className} bg-black relative`}>
            <div className="flex justify-center items-center  h-screen">
            {children}
            </div>
        </body>
    </html>
</ClerkProvider>
  );
}
