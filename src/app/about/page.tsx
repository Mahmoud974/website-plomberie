import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import HeatingSolutions from "@/components/HeatingSolutions";
import Menu from "@/components/Menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <>
      <Menu />
      <div className="relative w-full h-[400px]">
        <Image
          src="/plomb-2.jpg"
          alt="Plombier Chauffagiste Valence"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl font-extrabold">À Propos</h1>
          <div className="bg-yellow-500 h-1 w-24 mt-2"></div>
        </div>
      </div>

      <div className="container text-center mx-auto px-6 py-12 space-y-8">
        {/* Introduction */}
        <div className="flex items-center justify-center">
          <div className="bg-yellow-500 h-[0.15rem] w-20 mr-3"></div>
          <p className="text-yellow-500 font-bold uppercase">
            QUI SOMMES-NOUS ?
          </p>
          <div className="bg-yellow-500 h-[0.15rem] w-20 ml-3"></div>
        </div>
        <h2 className="text-3xl -mt-3 font-bold text-gray-800">
          Plombier chauffagiste à Valence
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="mt-4 text-lg text-gray-700">
            Installé depuis 1999 en tant qu’artisan, je suis spécialisé dans la
            vente et l’installation de systèmes de chauffage et de
            climatisation. Passionné par les énergies renouvelables, je réponds
            à vos demandes pour l’installation de pompes à chaleur (PAC) et
            chaudières à condensation.
          </p>
          <p className="mt-2 text-lg text-gray-700">
            Vous recherchez un professionnel qualifié pour vos travaux ? Je suis
            à votre disposition pour vous proposer des solutions adaptées à vos
            besoins, dans un rayon de 30 km autour de Valence.
          </p>
        </div>

        {/* Accompagnement personnalisé */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800">
            Un accompagnement personnalisé
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Mon objectif est de vous conseiller au mieux à chaque étape de votre
            projet, du devis à la réalisation des travaux. Je privilégie des
            solutions offrant un excellent rapport qualité-prix, avec honnêteté
            et réactivité.
          </p>
          <Link href="/contact">
            {" "}
            <Button className="mt-5 mx-auto">Contactez-nous</Button>
          </Link>
        </div>

        {/* Prestations */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800">Prestations</h2>
          <ul className="flex flex-wrap gap-4 justify-center list-inside mt-4 text-lg text-gray-700">
            <li className="bg-[#e3f4ff] px-3 py-2 rounded">Pompes à chaleur</li>
            <li className="bg-[#e3f4ff] px-3 py-2 rounded">
              Chaudières gaz à condensation
            </li>
            <li className="bg-[#e3f4ff] px-3 py-2 rounded">
              Chaudières fuel ou gaz
            </li>
            <li className="bg-[#e3f4ff] px-3 py-2 rounded">Climatisations</li>
            <li className="bg-[#e3f4ff] px-3 py-2 rounded">
              Chauffe-eaux thermodynamiques
            </li>
            <li className="bg-[#e3f4ff] px-3 py-2 rounded">
              Création ou modification d’installations de plomberie
            </li>
            <li className="bg-[#e3f4ff] px-3 py-2 rounded">
              Installation de chauffe-eaux solaires
            </li>
            <li className="bg-[#e3f4ff] px-3 py-2 rounded">
              Maintenance et entretien de chaudières
            </li>
            <li className="bg-[#e3f4ff] px-3 py-2 rounded">
              Système de récupération d’eau de pluie
            </li>
            <li className="bg-[#e3f4ff] px-3 py-2 rounded">
              Installation de radiateurs et planchers chauffants
            </li>
            <li className="bg-[#e3f4ff] px-3 py-2 rounded">
              Rénovation de système de chauffage
            </li>
          </ul>
        </div>

        {/* Zones d'intervention */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800">
            Zones d’intervention
          </h2>
          <ul className="mt-4 flex flex-wrap gap-4 justify-center text-lg text-gray-700 list-inside">
            <li className="bg-[#e3f4ff] px-3 py-2 rounded">
              Portes-lès-Valence
            </li>
            <li className="bg-[#e3f4ff] px-3 py-2 rounded">
              Bourg-lès-Valence
            </li>
            <li className="bg-[#e3f4ff] px-3 py-2 rounded">
              Saint-Marcel-lès-Valence
            </li>
            <li className="bg-[#e3f4ff] px-3 py-2 rounded">Romans-sur-Isère</li>
            <li className="bg-[#e3f4ff] px-3 py-2 rounded">Chabeuil</li>
            <li className="bg-[#e3f4ff] px-3 py-2 rounded">Étoile-sur-Rhône</li>
            <li className="bg-[#e3f4ff] px-3 py-2 rounded">
              Guilherand-Granges
            </li>
            <li className="bg-[#e3f4ff] px-3 py-2 rounded">Saint-Péray</li>
            <li className="bg-[#e3f4ff] px-3 py-2 rounded">Cornas</li>
            <li className="bg-[#e3f4ff] px-3 py-2 rounded">Valence</li>
          </ul>
        </div>
      </div>

      <Certifications />
      <HeatingSolutions />
      <Footer />
    </>
  );
}
