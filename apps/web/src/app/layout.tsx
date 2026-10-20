
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Icons from "./icon";

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
    default: "TheInfotik — Latest News & Updates",
    template: "%s | TheInfotik",
  },
  description:
    "TheInfotik-এ পড়ুন সর্বশেষ খবর, প্রযুক্তি, রাজনীতি, খেলাধুলা ও বিশ্বের গুরুত্বপূর্ণ আপডেট।",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Icons />
        {children}
      </body>
    </html>
  );
}
