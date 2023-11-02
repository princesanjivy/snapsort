import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "@/components/navbar";
import "./globals.css";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Snapsort",
  description: "AI powered event photo filtering app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="corporate">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
