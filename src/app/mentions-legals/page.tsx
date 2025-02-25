import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Image from "next/image";
import React from "react";
import Certifications from "../../components/Certifications";
import HeatingSolutions from "@/components/HeatingSolutions";

export default function page() {
  return (
    <>
      <Menu />
      <div className="relative w-full h-[350px]">
        <Image
          src="/page-mentions-legales/mentions.webp"
          alt="Mentions Légales"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl font-bold">Mentions Légales</h1>
          <div className="bg-yellow-500 h-1 w-24 mt-3"></div>
        </div>
      </div>

      <div className="container mx-auto mt-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Informations Légales
        </h2>
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg max-w-3xl mx-auto space-y-4">
          <p>
            <strong>Raison sociale :</strong> SVB PRESTA
          </p>
          <p>
            <strong>Forme juridique :</strong> Auto-entreprise
          </p>
          <p>
            <strong>Adresse :</strong> 12 rue des artisans, 26000 Valence,
            FRANCE
          </p>
          <p>
            <strong>Email :</strong> contact@martin-chauffage.fr
          </p>
          <p>
            <strong>Téléphone :</strong> 04 78 56 12 34
          </p>
          <p>
            <strong>N° RCS :</strong> 892 456 321
          </p>
          <p>
            <strong>SIRET :</strong> 89245632100014
          </p>
          <p>
            <strong>N° TVA :</strong> FR45892456321
          </p>
        </div>

        <h2 className="text-3xl font-bold text-center mt-12 mb-6">
          Hébergement
        </h2>
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg max-w-3xl mx-auto space-y-4">
          <p>Ce site est hébergé par :</p>
          <p>
            <strong>OVH SAS</strong>
          </p>
          <p>
            <strong>Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France
          </p>
          <p>
            <strong>Site web :</strong>{" "}
            <a
              href="https://www.ovhcloud.com"
              className="text-blue-500 underline"
            >
              www.ovhcloud.com
            </a>
          </p>
          <p>
            <strong>Téléphone :</strong> 1007
          </p>
        </div>
      </div>

      <Certifications />
      <HeatingSolutions />
      <Footer />
    </>
  );
}
