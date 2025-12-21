import type { Metadata } from "next";
import Header from "./components/header";
import Footer from "./components/footer";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "../public/fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pan American World Airways",
  description: "Made by Aaron Seymour with Next.js, Powered by Vercel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
