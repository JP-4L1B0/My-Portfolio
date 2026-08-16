export default function ProjectSection() {
    return (
        <section id="project" className="w-full flex flex-col justify-center items-center min-h-[calc(100vh-100px)] scroll-m-[100px] py-12 px-6 md:px-12">
            <div className="flex flex-col max-w-3xl w-full">
                <h3 className="text-3xl font-bold mb-12 text-center">First Projects</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                
                    <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg hover:-translate-y-5 transition">
                        <h4 className="text-xl font-bold text-green-700 mb-2">STALA (Thesis App)</h4>
                        <p className="text-gray-600 mb-4">
                            An Android OMR system built with Flutter and Python that converts Grand Staff piano notation to guitar tablature.
                        </p>
                        <div className="flex space-x-2 text-sm text-gray-500">
                            <span className="bg-gray-100 px-2 py-1 rounded">Flutter</span>
                            <span className="bg-gray-100 px-2 py-1 rounded">Python</span>
                            <span className="bg-gray-100 px-2 py-1 rounded">OpenCV</span>
                        </div>
                    </div>

                    <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg hover:-translate-y-5 transition">
                        <h4 className="text-xl font-bold text-green-700 mb-2">Vanessa on the Loose</h4>
                        <p className="text-gray-600 mb-4">
                            A collaborative 2D/3D game developed using the Godot Engine demonstrating object-oriented game loop logic.
                        </p>
                        <div className="flex space-x-2 text-sm text-gray-500">
                            <span className="bg-gray-100 px-2 py-1 rounded">Godot</span>
                            <span className="bg-gray-100 px-2 py-1 rounded">GDScript</span>
                        </div>
                    </div>

                </div>
                <button className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition">View My Projects</button>
            </div>
        </section>
    );
}