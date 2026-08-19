"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
];

// The navigation highlights the section currently passing below the sticky header.
export default function NavBar() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", ...navItems.map((item) => item.id)];
            let current = "home";

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (!element) return;
                const rect = element.getBoundingClientRect();
                if (rect.top <= 125 && rect.bottom >= 125) current = section;
            });
            setActiveSection(current);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/90 px-6 py-4 shadow-sm backdrop-blur">
            <nav className="mx-auto flex max-w-5xl items-center justify-between gap-5">
                <Link href="#home" className="shrink-0 text-xl font-bold tracking-tight text-emerald-800">JP<span className="text-slate-900">.dev</span></Link>
                <ul className="flex items-center gap-3 text-sm font-medium sm:gap-6">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a href={`#${item.id}`} className={`transition-colors ${activeSection === item.id ? "text-emerald-700" : "text-slate-600 hover:text-emerald-700"}`}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}