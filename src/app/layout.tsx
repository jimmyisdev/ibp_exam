import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { StateContextProvider } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ibp",
  description: "demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateContextProvider>
          <Header />
          {children}
          <Footer />
        </StateContextProvider>
      </body>
    </html>
  );
}
