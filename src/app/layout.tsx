import "./globals.css";
import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import { Header } from "@/compontents/Header";
import { Footer } from "@/compontents/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel bookings app",
  description: "Created by Popenkov dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
