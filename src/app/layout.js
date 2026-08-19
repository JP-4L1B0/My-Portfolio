import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "../components/NavBar";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "John Philip Alibo | Portfolio",
  description: "Portfolio of John Philip Alibo, an aspiring software engineer and application developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col">
        <NavBar />
        {children}
        {/* A simple footer keeps the focus on the portfolio content. */}
        <footer className="border-t border-emerald-100 bg-white px-6 py-5 text-center text-sm text-slate-500">
          <p>Copyright 2026 John Philip Alibo. Built with Next.js.</p>
        </footer>
      </body>
    </html>
  );
}