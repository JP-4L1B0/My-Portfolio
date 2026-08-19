// This replaces a certification list with an honest snapshot of current learning.
export default function GrowthSection() {
    return (
        <section id="learning" className="section-shell scroll-mt-20">
            <div className="section-content" data-reveal>
                <p className="section-kicker">Growth</p>
                <h3 className="section-title">Currently building experience.</h3>
                <div className="mt-10 grid gap-5 md:grid-cols-[1.35fr_0.65fr]">
                    <div className="card">
                        <h4 className="text-xl font-bold text-emerald-800">Learning by doing</h4>
                        <p className="mt-4 max-w-xl leading-7 text-slate-600">I do not have formal certifications yet. Right now, I&apos;m focusing on strengthening my skills through projects, coursework, and consistent practice.</p>
                    </div>
                    <div className="rounded-2xl bg-slate-900 p-7 text-white">
                        <p className="text-sm font-medium text-emerald-300">Current focus</p>
                        <p className="mt-3 text-lg font-semibold leading-7">Web development, application design, and practical problem-solving.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}