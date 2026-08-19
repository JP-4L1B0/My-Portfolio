// Add certificates here as they are earned. The layout adapts from one card to a full grid.
const certifications = [
    // {
    //     title: "Certificate name",
    //     issuer: "Issuing organization",
    //     date: "Month Year",
    //     credentialUrl: "https://example.com/verify",
    //     skills: ["Relevant skill", "Another skill"],
    // },
];

function CertificateIcon() {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 4.5 6v5.25c0 4.42 3.05 8.5 7.5 9.75 4.45-1.25 7.5-5.33 7.5-9.75V6L12 3Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.5 12 1.6 1.6 3.5-3.5" />
        </svg>
    );
}

export default function CertificationSection() {
    return (
        <section id="certifications" className="section-shell scroll-mt-20 bg-emerald-50/60">
            <div className="section-content" data-reveal>
                <p className="section-kicker">Professional growth</p>
                <h3 className="section-title">Certifications, as I earn them.</h3>
                <p className="mt-4 max-w-2xl leading-7 text-slate-600">A growing record of the courses and credentials that support my hands-on work.</p>

                {certifications.length > 0 ? (
                    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
                        {certifications.map((certificate) => (
                            <article key={`${certificate.title}-${certificate.issuer}`} className="card flex min-h-64 flex-col">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800"><CertificateIcon /></div>
                                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800">{certificate.date}</span>
                                </div>
                                <p className="mt-6 text-sm font-medium text-emerald-700">{certificate.issuer}</p>
                                <h4 className="mt-2 text-xl font-bold text-slate-900">{certificate.title}</h4>
                                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                                    {certificate.skills.map((skill) => <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">{skill}</span>)}
                                </div>
                                {certificate.credentialUrl && (
                                    <a href={certificate.credentialUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-emerald-800 transition-colors hover:text-emerald-600">View credential <span aria-hidden="true">?</span></a>
                                )}
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="mt-10 grid gap-5 md:grid-cols-[1.35fr_0.65fr]">
                        <div className="card">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800"><CertificateIcon /></div>
                            <h4 className="mt-6 text-xl font-bold text-emerald-800">The first credential is in progress.</h4>
                            <p className="mt-4 max-w-xl leading-7 text-slate-600">I&apos;m currently strengthening my skills through projects, coursework, and consistent practice. Verified credentials will appear here as they are completed.</p>
                        </div>
                        <div className="rounded-2xl bg-slate-900 p-7 text-white">
                            <p className="text-sm font-medium text-emerald-300">Current focus</p>
                            <p className="mt-3 text-lg font-semibold leading-7">Web development, application design, and practical problem-solving.</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}