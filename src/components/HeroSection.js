// The opening section introduces the role and gives visitors two clear paths.
export default function HeroSection() {
    return (
        <section id="home" className="relative flex min-h-[calc(100vh-76px)] w-full items-center overflow-hidden px-6 py-24 md:px-12">
            <div className="hero-glow" aria-hidden="true" />
            <div className="relative mx-auto flex w-full max-w-5xl flex-col" data-reveal>
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Portfolio · 2026</p>
                <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">Hello, I&apos;m <span className="text-emerald-700">John Philip Alibo</span></h1>
                <h2 className="mt-5 text-xl font-medium text-slate-600 sm:text-2xl">Aspiring Software Engineer & Application Developer</h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">I enjoy building practical mobile and web experiences, and exploring how machine learning can help solve real-world problems.</p>
                <div className="mt-9 flex flex-wrap gap-4">
                    <a href="#projects" className="rounded-lg bg-emerald-700 px-5 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">See my projects <span aria-hidden="true">↓</span></a>
                    <a href="mailto:johnphilip.alibo22@gmail.com" className="rounded-lg border border-emerald-700 px-5 py-3 font-medium text-emerald-800 transition hover:-translate-y-0.5 hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">Get in touch</a>
                </div>
            </div>
        </section>
    );
}