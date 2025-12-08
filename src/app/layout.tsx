import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/left-navbar/navbar";
import TopNavbar from "../components/topnavbar";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Whatsapp clone",
  description: "full stack whatsapp clone",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ThemeProvider>
             <TopNavbar />
        <Sidebar />
        <main className="ml-16">{children}</main> {/* leave space for sidebar */}
          </ThemeProvider>
      </body>
    </html>
  );
}
