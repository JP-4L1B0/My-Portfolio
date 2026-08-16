import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "../components/NavBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio",
  description: "This is my project portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col">
        <NavBar/>

        {children}

        <footer className="sticky bottom-0 z-50 bg-green-900 text-white p-1 shadow-md">
          <p className="flex justify-center text-sm">© 2026 My Portfolio</p>
        </footer>
      </body>
    </html>
  );
}
