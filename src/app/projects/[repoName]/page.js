import Link from "next/link";
import ReactMD from "react-markdown";
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

// src/app/projects/[repoName]/page.js

export default async function ProjectPage({ params }) {
    // Unpacks the URL parameters
    const awaitParams = await params;
    const repository = awaitParams.repoName;

    //  Fetch the raw Markdown file directly from GitHub 
    const res = await fetch(`https://raw.githubusercontent.com/JP-4L1B0/${repository}/master/README.md`);

    // Handle errors incase the repository name is typed wrong.
    if (!res.ok) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-emerald-50/30">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Project Not Found</h1>
                <Link href="/" className="text-emerald-700 hover:underline">← Back to Portfolio</Link>
            </main>
        );
    }

    // Extract the text from the response
    const markdown = await res.text();

    // Render the page using custom Tailwind styling for the Markdown elements
    return (
        <main className="flex min-h-screen flex-col items-center py-24 px-6 md:px-12 bg-slate-50">
            <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-8 md:p-14">
                
                <Link href="/" className="inline-block mb-10 text-sm font-bold text-emerald-700 hover:text-emerald-500 transition-colors">
                    ← Back to Portfolio
                </Link>

                <ReactMD 
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        h1: ({node, ...props}) => <h1 className="text-4xl font-bold mt-2 mb-6 text-slate-900 border-b pb-4" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-10 mb-4 text-emerald-800" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800" {...props} />,
                        p: ({node, ...props}) => <p className="text-slate-600 leading-relaxed mb-6" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc list-inside mb-6 text-slate-600 space-y-2" {...props} />,
                        li: ({node, ...props}) => <li className="leading-relaxed" {...props} />,
                        code: ({node, ...props}) => <code className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-sm font-mono" {...props} />,
                        pre: ({node, ...props}) => <pre className="bg-slate-900 text-slate-50 p-4 rounded-xl overflow-x-auto mb-6 text-sm" {...props} />,
                        a: ({node, ...props}) => <a className="text-emerald-600 hover:underline font-medium" target="_blank" rel="noreferrer" {...props} />,
                        table: ({node, ...props}) => <div className="overflow-x-auto mb-8"><table className="w-full text-left border-collapse" {...props} /></div>,
                        th: ({node, ...props}) => <th className="border-b-2 border-emerald-200 py-3 px-4 font-bold text-slate-900 bg-emerald-50/50" {...props} />,
                        td: ({node, ...props}) => <td className="border-b border-slate-200 py-3 px-4 text-slate-600" {...props} />,
                        blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-emerald-500 pl-6 italic text-slate-600 bg-emerald-50/30 py-3 my-6 rounded-r-lg" {...props} />,
                        hr: ({node, ...props}) => <hr className="my-10 border-slate-200" {...props} />,
                        img: ({node, ...props}) => <img className="rounded-xl mx-auto max-w-full h-auto my-6 shadow-md" {...props} />
                    }}
                >
                    {markdown}
                </ReactMD>
                
            </div>
        </main>
    );
}