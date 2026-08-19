import Link from "next/link";
// Project details stay in an array so adding the next project is a small, repeatable change.
const projects = [
    { 
        title: "STALA", 
        repoName: "stala_app",
        label: "Thesis application", 
        description: "An Android OMR system built with Flutter and Python that converts Grand Staff piano notation into guitar tablature.", 
        technologies: ["Flutter", "Python", "OpenCV"] 
    },
    { 
        title: "Vanessa on the Loose", 
        repoName: "Vanessa-on-the-Loose",
        label: "Collaborative game project", 
        description: "A collaborative 2D/3D game made with Godot, focused on object-oriented game-loop logic and interactive gameplay.", 
        technologies: ["Godot", "GDScript"] 
    },
];

export default function ProjectSection() {
    return (
        <section id="projects" className="section-shell scroll-mt-20 bg-emerald-50/60">
            <div className="section-content" data-reveal>
                <p className="section-kicker">Selected work</p>
                <h3 className="section-title">Two projects, with more on the way.</h3>
                <p className="mt-4 max-w-2xl leading-7 text-slate-600">These projects reflect the areas I&apos;ve been actively exploring: mobile applications, computer vision, and games.</p>
                <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
                    {projects.map((project) => (
                        <Link 
                            href={`/projects/${project.repoName}`}
                            key={project.title}
                            className="card flex min-h-64 flex-col hover:-translate-y-2 hover:shadow-xl transition-all"
                        >
                            <article key={project.title} className="card flex min-h-64 flex-col">
                                <p className="text-sm font-medium text-emerald-700">{project.label}</p>
                                <h4 className="mt-2 text-2xl font-bold text-slate-900">{project.title}</h4>
                                <p className="mt-4 leading-7 text-slate-600">{project.description}</p>
                                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                                    {project.technologies.map((technology) => <span key={technology} className="rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-800">{technology}</span>)}
                                </div>
                            </article>
                        </Link>
                        
                    ))}
                </div>
            </div>
        </section>
    );
}