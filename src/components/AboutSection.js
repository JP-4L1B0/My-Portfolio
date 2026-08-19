// This section turns the short introduction into easy-to-scan details.
export default function AboutSection() {
    const skills = ["Flutter", "Python", "OpenCV", "React", "Next.js", "GDScript", "Java", "C++"];

    return (
        <section id="about" className="section-shell scroll-mt-20">
            <div className="section-content" data-reveal>
                <p className="section-kicker">About me</p>
                <h3 className="section-title">Curious, practical, and still learning.</h3>
                <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
                    <div className="card md:col-span-2">
                        <h4 className="text-xl font-bold text-emerald-800">Who I am</h4>
                        <p className="mt-4 leading-7 text-slate-600">I am an aspiring software engineer who enjoys solving problems across mobile development, machine learning, and web applications. I value clear, useful solutions and keep improving through hands-on projects.</p>
                    </div>
                    <div className="card flex flex-col items-center justify-center text-center">
                        <div className="text-5xl font-bold text-emerald-700">2+</div>
                        <div className="mt-2 text-sm leading-6 text-slate-600">Years of coding experience</div>
                    </div>
                    <div className="rounded-2xl bg-emerald-800 p-7 text-white md:col-span-3">
                        <h4 className="text-xl font-bold">Tools I&apos;ve worked with</h4>
                        <div className="mt-5 flex flex-wrap gap-2.5">
                            {skills.map((skill) => <span key={skill} className="rounded-full bg-emerald-950/45 px-3 py-1.5 text-sm">{skill}</span>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}