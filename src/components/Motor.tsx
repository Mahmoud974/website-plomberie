import Image from "next/image";
import { Settings } from "lucide-react";

export default function Motor() {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-1/2">
          <div className="relative">
            <Image
              src="/chauffage-1.jpg"
              alt="Mechanic working on motorcycle"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="relative">
            <Image
              src="/chauffage-1.jpg"
              alt="Metalworking sparks"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Texte et contenu */}
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-blue-400 font-semibold tracking-wide flex items-center">
            <span className="h-1 w-8 bg-blue-400 mr-2"></span> WHO WE ARE
          </p>
          <h2 className="text-4xl font-bold leading-tight">
            AWESOME MOTORCYCLE <span className="text-gray-600">BUILDER</span>
          </h2>
          <p className="text-gray-400">
            Sed orci enim, dignissim eget aliquet eu hendrerit efficitur neque.
            Donec lacinia quam non lorem gravida, vitae eleifend sapien.
          </p>

          {/* Liste des points clés */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            {[
              "Tailored Design",
              "Unique Fabrication",
              "Exclusive Materials",
              "Artistic Elements",
              "Attention to Detail",
              "Skilled Builder",
            ].map((item, index) => (
              <p key={index} className="flex items-center space-x-2">
                <Settings className="h-4 w-4 text-blue-400" />
                <span className="font-semibold">{item}</span>
              </p>
            ))}
          </div>

          {/* Statistique de projet */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg text-center">
            <p className="text-3xl font-bold">
              1,250<span className="text-blue-400">+</span>
            </p>
            <p className="text-gray-400 uppercase text-xs tracking-wider">
              Projects Done
            </p>
          </div>

          {/* Bouton */}
          <button className="mt-4 border border-blue-400 text-white py-2 px-6 rounded-lg hover:bg-blue-400 hover:text-black transition">
            MORE ABOUT US
          </button>
        </div>
      </div>
    </section>
  );
}
