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

export const metadata = {
  title: "My Portfolio",
  description: "This is my project portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="bg-green-900 text-white p-6 shadow-md">
          <nav className="flex justify-between items-center max-w-4xl mx-auto">
            <div className="text-2xl font-bold">JPAlibo.Dev</div>
            <ul className="flex space-x-6">
              <li>About Me</li>
              <li>Project</li>
              <li>Certification</li>
            </ul>
          </nav>
        </header>

        {children}

        <footer className="bg-green-900 text-white p-1 shadow-md">
          <p className="text-sm">© 2026 My Portfolio</p>
        </footer>
      </body>
    </html>
  );
}
