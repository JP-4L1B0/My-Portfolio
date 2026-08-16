export default function AboutSection() {
    return (
        <section id="about" className="w-full flex flex-col justify-center items-center min-h-[calc(100vh-100px)] scroll-m-[100px] py-12 px-6 md:px-12">
            <div className="w-full max-w-5xl">
                <h3 className="text-3xl font-bold mb-12 text-center">About Me</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="md:col-span-2 bg-gray-100 border border-green-700 rounded-2xl p-8 hover:shadow-lg transition">
                        <h4 className="text-xl font-bold text-green-700 mb-4">Who I Am</h4>
                        <p className="text-gray-700 leading-relaxed">
                            I am an aspiring Software Engineer. I love solving complex problems, whether that is building cross-platform apps in Flutter, training machine learning models in Python, or optimizing hardware networks.
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center bg-gray-100 border border-green-700 rounded-2xl p-8 hover:shadow-lg transition">
                        <div className="text-5xl font-bold text-green-700 mb-2">2+</div>
                        <div className="text-gray-700 text-center">Years of Coding Experience</div>
                    </div>

                    <div className="md:col-span-3 bg-green-700 text-white rounded-2xl p-8 hover:shadow-lg transition">
                        <h4 className="text-xl font-bold mb-4">Tech Stack</h4>
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-green-900 px-4 py-2 rounded-full text-small">Flutter</span>
                            <span className="bg-green-900 px-4 py-2 rounded-full text-small">Python</span>
                            <span className="bg-green-900 px-4 py-2 rounded-full text-small">OpenCV</span>
                            <span className="bg-green-900 px-4 py-2 rounded-full text-small">React</span>
                            <span className="bg-green-900 px-4 py-2 rounded-full text-small">Next.js</span>
                            <span className="bg-green-900 px-4 py-2 rounded-full text-small">GDScript</span>
                            <span className="bg-green-900 px-4 py-2 rounded-full text-small">Java</span>
                            <span className="bg-green-900 px-4 py-2 rounded-full text-small">C++</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}