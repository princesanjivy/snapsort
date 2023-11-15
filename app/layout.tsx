import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { DataProvider } from "@/context/dataContext";
import "./globals.css";
import Footer from "@/components/footer";

const font = Montserrat({
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
        <DataProvider>{children}</DataProvider>
        {/* TODO: footer need to be properly done  */}
        <Footer />
      </body>
    </html>
  );
}
