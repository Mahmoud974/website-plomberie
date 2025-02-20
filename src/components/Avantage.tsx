import React from "react";
import { FaTools, FaHandSparkles, FaShieldAlt } from "react-icons/fa";

export default function Avantage() {
  return (
    <div className="container mx-auto max-w-6xl ">
      <div className="bg-white py-12">
        <div className="mx-auto">
          <div className="flex lg:flex-row lg:px-0 px-8 flex-col gap-6">
            <div className="bg-[#f2faff] text-[#0A2A3D] p-6 shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <FaTools className="text-4xl " />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Réactivité et efficacité
              </h3>
              <p className="text-gray-600">
                Une panne ? Un problème de plomberie ? Nous intervenons sans
                attendre pour une solution rapide et durable.
              </p>
            </div>
            <div className="bg-[#f2faff] text-[#0A2A3D] p-6 shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <FaHandSparkles className="text-4xl  " />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Finition impeccable
              </h3>
              <p className="text-gray-600">
                Chaque projet est réalisé avec soin et précision pour un
                résultat propre, durable et esthétique.
              </p>
            </div>
            <div className="bg-[#f2faff] text-[#0A2A3D] p-6 shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <FaShieldAlt className="text-4xl  " />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Garantie qualité
              </h3>
              <p className="text-gray-600">
                Avec des années d’expérience, nous vous assurons des prestations
                fiables et conformes aux normes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
