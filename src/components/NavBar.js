"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "learning", label: "Learning" },
    { id: "contact", label: "Contact" },
];

// The navigation highlights the section currently passing below the sticky header.
export default function NavBar() {
    const [activeSection, setActiveSection] = useState("home");
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", ...navItems.map((item) => item.id)];
            let current = "home";

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (!element) return;
                const rect = element.getBoundingClientRect();
                if (rect.top <= 150 && rect.bottom >= 80) current = section;
            });
            setActiveSection(current);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    if (pathname.startsWith("/projects/")) return null;
    return (
        <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/90 px-4 py-3 shadow-sm backdrop-blur sm:px-6">
            <nav aria-label="Primary navigation" className="mx-auto flex max-w-5xl items-center justify-between gap-3 sm:gap-5">
                <Link href="#home" className="shrink-0 rounded-md px-1 text-xl font-bold tracking-tight text-emerald-800 transition-colors hover:text-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700">JP<span className="text-slate-900">.dev</span></Link>
                <ul className="-mr-4 flex min-w-0 items-center gap-1 overflow-x-auto pr-4 text-sm font-medium sm:mr-0 sm:gap-2 sm:pr-0" aria-label="Portfolio sections">
                    {navItems.map((item) => (
                        <li key={item.id} className="shrink-0">
                            <a
                                href={`#${item.id}`}
                                aria-current={activeSection === item.id ? "location" : undefined}
                                className={`block rounded-full px-3 py-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${activeSection === item.id ? "bg-emerald-100 text-emerald-800" : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-800"}`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}