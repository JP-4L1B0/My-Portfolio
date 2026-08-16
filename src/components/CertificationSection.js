export default function CertificationSection() {
    return (
        <section id="cert" className="w-full flex flex-col justify-center items-center min-h-[calc(100vh-100px)] scroll-m-[100px] py-12 px-6 md:px-12">
            <div className="w-full max-w-5xl">
                <h3 className="text-3xl font-bold mb-12 text-center">Certifications</h3>

                <div className="grid">
                    <div className="border border-green-700 rounded-2xl p-8">

                        <div className="bg-gray-100 border border-green-700 rounded-2xl p-8 hover:shadow-lg transition mb-5">
                            <h4 className="text-xl font-bold text-green-700 mb-4">Cert 1</h4>
                            <p className="text-gray-700 leading-relaxed">
                                Certificate description.
                            </p>
                        </div>

                        <div className="bg-gray-100 border border-green-700 rounded-2xl p-8 hover:shadow-lg transition mb-5">
                            <h4 className="text-xl font-bold text-green-700 mb-4">Cert 1</h4>
                            <p className="text-gray-700 leading-relaxed">
                                Certificate description.
                            </p>
                        </div>

                        <div className="bg-gray-100 border border-green-700 rounded-2xl p-8 hover:shadow-lg transition mb-5">
                            <h4 className="text-xl font-bold text-green-700 mb-4">Cert 1</h4>
                            <p className="text-gray-700 leading-relaxed">
                                Certificate description.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}