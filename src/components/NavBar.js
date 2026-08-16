"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function NavBar() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["about", "project", "cert"];
            let current = "";

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);

            if (window.scrollY < 100) {
                setActiveSection("");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="sticky top-0 z-50 bg-green-900 text-white p-6 shadow-md">
            <nav className="flex justify-between items-center max-w-4xl mx-auto">
                <div className="text-2xl font-bold">
                    <Link href="/">JP.Dev</Link>
                </div>
                <ul className="flex space-x-6">
                    <li>
                        <a href="#about" className={`transition ${activeSection === "about" ? "text-green-400 font-bold" : "hover:text-green-400"}`}>About Me</a>
                    </li>
                    <li>
                        <a href="#project" className={`transition ${activeSection === "project" ? "text-green-400 font-bold" : "hover:text-green-400"}`}>Project</a>
                    </li>
                    <li>
                        <a href="#cert" className={`transition ${activeSection === "cert" ? "text-green-400 font-bold" : "hover:text-green-400"}`}>Certification</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}