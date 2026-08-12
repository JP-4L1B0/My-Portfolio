import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-between p-12">

      <h1 className="text-5xl font-bold mb-4">
        Hello! I'm <span className="text-green-600">John Philip Alibo</span>
      </h1>

      <h2 className="text-2xl text-gray-500 mb-6">
        Aspiring Software Engineer & Application Developer
      </h2>

      <p className="max-w-2xl text-lg mb-8">
        I build robust mobile applications and integrate complex machine learning models to solve real-world problems. 
      </p>

      <div className="flex space-x-5">
        <button className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition">
          View My Projects
        </button>
        <button className="border border-green-700 text-green-700 px-6 py-3 rounded-md hover:bg-green-600 hover:text-white transition">
          Contact Me
        </button>
      </div>

    </main>
  );
}
