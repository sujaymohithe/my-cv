import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationBar, Footer } from "@/components/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sujay Mohithe | Senior Frontend Engineer & Tech Specialist",
    template: "Sujay Mohithe | %s",
  },
  description:
    "Explore my CV, a Tech Specialist with experience in React, Next.js, Angular and AWS. View my portfolio and recent projects.",
};

/**
 * The root layout component wraps the entire app with a HTML structure, global CSS classes and a main element.
 * It also renders the navigation bar and footer components.
 * @param props - The props for the component.
 * @param props.children - The children of the root layout.
 * @returns - A JSX element representing the root layout.
 */
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
        <main className="flex min-h-screen flex-col pb-10">
          <NavigationBar />
          <div className="container mt-16 flex-1 py-16">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
