import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Geist_Mono } from "next/font/google";
import Background from "./components/background";
import Footer from "./components/footer/footer";
import Header from "./components/header";
import Topbar from "./components/topbar";
import "./globals.css";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
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
        <main className="w-full max-w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
