"use client";

import { useEffect } from "react";

// Adds a subtle reveal after a section enters the viewport; reduced-motion users keep instant content.
export default function ScrollReveal() {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const sections = document.querySelectorAll("[data-reveal]");
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
            { threshold: 0.15 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return null;
}