import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Header from "@/components/header";
import { Viewport } from "next";

const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EchoLink - Internet Solution",
  description: "EchoLink provides cutting-edge internet solutions for you.",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Header />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-gray-800 bg-opacity-40 text-center py-4 mt-8 text-gray-500">
          <p>&copy; 2024 EchoLink. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
