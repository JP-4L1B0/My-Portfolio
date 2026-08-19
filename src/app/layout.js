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
        <footer id="contact" className="scroll-mt-20 bg-slate-950 px-6 pt-16 text-white md:px-12 md:pt-20">
          <div className="mx-auto grid max-w-5xl gap-10 pb-40 md:grid-cols-[1.35fr_0.65fr] md:items-end">
            <div>
              <p className="section-kicker text-emerald-300">Get in touch</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">Have a project or idea in mind?</h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-300">I&apos;m always open to discussing thoughtful software projects, collaboration opportunities, and new ways to keep learning.</p>
            </div>
            <div className="md:justify-self-end">
              <a href="mailto:johnphilip.alibo22@gmail.com" className="inline-flex rounded-lg bg-emerald-400 px-5 py-3 font-semibold text-emerald-950 transition hover:-translate-y-0.5 hover:bg-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300">Email me</a>
              <p className="mt-4 text-sm text-slate-400">johnphilip.alibo22@gmail.com</p>
            </div>
          </div>
          <div className="border-t border-white/10 py-5 text-center text-sm text-slate-400">
            <p>Copyright 2026 John Philip Alibo. Built with Next.js.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}