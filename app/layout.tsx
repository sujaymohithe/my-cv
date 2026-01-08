import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "@/components/layout/NavigationBar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sujay Mohithe | Senior Frontend Engineer & Tech Specialist",
  description:
    "Explore the professional CV of Sujay Mohithe, a Tech Specialist with experience in React, Next.js, Angular and AWS. View my portfolio and recent projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <main className="flex min-h-screen flex-col">
          <NavigationBar />
          <div className="flex-1 px-6">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
