import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md. Sanaullah Asif | Senior FinTech Engineer",
  description: "Senior FinTech Engineer & Automation Specialist with 9+ years building payment infrastructure. Make.com Certified, Laravel Expert. Available for remote work.",
  keywords: ["FinTech", "Payment Gateway", "Laravel", "Make.com", "Automation", "Bangladesh", "shurjoPay", "PCI DSS", "Backend Developer"],
  authors: [{ name: "Md. Sanaullah Asif" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Md. Sanaullah Asif | Senior FinTech Engineer",
    description: "Senior FinTech Engineer & Automation Specialist with 9+ years building payment infrastructure.",
    url: "https://abefimrs.github.io/portfolio/",
    siteName: "Md. Sanaullah Asif Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Sanaullah Asif | Senior FinTech Engineer",
    description: "Senior FinTech Engineer & Automation Specialist with 9+ years building payment infrastructure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
