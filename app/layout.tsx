import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
