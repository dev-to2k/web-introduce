import type { Metadata } from "next";
import { Be_Vietnam_Pro, Geist_Mono } from "next/font/google";
import "./globals.css";
import Topbar from "./components/topbar";
import Header from "./components/header";
import Background from "./components/background";
import Footer from "./components/footer";

const vietSans = Be_Vietnam_Pro({
  variable: "--font-geist-sans",
  subsets: ["vietnamese", "latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ATQ Alliance – Landing",
  description: "Trang landing chuyển từ index.html sang Next.js App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${vietSans.variable} ${geistMono.variable} antialiased relative bg-gradient-to-b from-slate-50 to-slate-100 text-ink font-sans scroll-smooth`}
      >
        <Background />
        <Topbar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
