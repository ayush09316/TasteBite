import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "../globals.css";
import { Navbar,Footer } from "@/components";
import { Toaster } from "sonner";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tastebite",
  description: "A Next.js 13 Meta Food recipe application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={`${inter.className} h-screen`}>
       <main className="bg-prim h-full">
       <Navbar/>
        <div>
        {children}
        <Toaster richColors={true}/>
        </div>
        <Footer/>
       </main>
    
        </body>
    </html>
    </ClerkProvider>
  );
}
