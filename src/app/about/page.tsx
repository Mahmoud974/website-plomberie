import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import HeatingSolutions from "@/components/HeatingSolutions";
import Menu from "@/components/Menu";

import Image from "next/image";
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
        <div className="flex items-center justify-center">
          <div className="bg-yellow-500 h-[0.15rem] w-20 mr-3"></div>
          <p className="text-yellow-500 font-bold uppercase">
            QUI SOMMES-NOUS ?
          </p>
          <div className="bg-yellow-500 h-[0.15rem] w-20 ml-3"></div>
        </div>
        <h2 className="text-3xl -mt-3 font-bold text-gray-800">
          Plombier chauffagiste à Valence dans la Drôme
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="mt-4 text-lg text-gray-700">
            Installé depuis 1999 en tant qu’artisan, je suis spécialisé dans la
            vente et l’installation de systèmes de chauffage et de
            climatisation. Je réalise également la création et la modification
            d’installations de plomberie. Passionné par les énergies
            renouvelables depuis plus de 20 ans, je réponds à toutes vos
            demandes pour l’installation de pompes à chaleur (PAC) et de
            chaudières à condensation.
          </p>
          <p className="mt-2 text-lg text-gray-700">
            {` Vous recherchez un professionnel qualifié pour vous accompagner dans
            la réalisation de vos travaux ? Je suis à votre disposition pour
            vous proposer les meilleures solutions adaptées à vos besoins.
            J'interviens dans un rayon de 30 km autour de Valence, notamment sur
            les secteurs de Valence Romans Agglomération et Rhône Crussol, avec
            la possibilité d'échanger en anglais si nécessaire.`}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800">
            Un accompagnement personnalisé
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            {` De l’établissement du devis à la réalisation des travaux, mon
            objectif est de vous conseiller au mieux. Chaque projet est étudié
            avec soin pour garantir la faisabilité technique et esthétique. Une
            offre sur mesure vous est proposée après analyse des contraintes et
            des meilleures solutions.`}
          </p>
          <p className="mt-2 text-lg text-gray-700">
            {` La transparence et la confiance sont essentielles dans mon travail.
            Je privilégie les solutions offrant le meilleur rapport
            qualité-prix, et je mets un point d'honneur à garantir honnêteté,
            service, réactivité et sérieux dans chaque intervention.`}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800">Nos prestations</h2>
          <p className="mt-4 text-lg text-gray-700">
            J’interviens pour l’installation et la réparation de :
          </p>
          <ul className="  list-inside mt-4 text-lg text-gray-700">
            <li>Pompes à chaleur</li>
            <li>Chaudières gaz à condensation</li>
            <li>Chaudières fuel ou gaz</li>
            <li>Climatisations</li>
            <li>Chauffe-eaux thermodynamiques</li>
            <li>Création ou modification d’installations de plomberie</li>
          </ul>
          <p className="mt-4 text-lg text-gray-700">
            Grâce à des fournisseurs partenaires de confiance, je vous garantis
            du matériel de qualité et une réactivité optimale pour toutes vos
            demandes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800">
            Zones d’intervention
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Basé à Valence, j’interviens sur toutes les communes de Valence
            Romans Agglo et Rhône Crussol, notamment :
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Portes-lès-Valence, Bourg-lès-Valence, Saint-Marcel-lès-Valence,
            Châteauneuf-sur-Isère, Romans-sur-Isère, Chabeuil, Étoile-sur-Rhône,
            Beauvallon, Montoison, Beaumont-lès-Valence, Montéléger, Montmeyran,
            Upie, Vaunaveys-la-Rochette, La Baume-Cornillane, Combovin, Allex,
            Guilherand-Granges, Saint-Péray, Cornas, Charmes-sur-Rhône,
            Livron-sur-Drôme, Loriol, Fiancey.
          </p>
        </div>
      </div>
      <Certifications />
      <HeatingSolutions />

      <Footer />
    </>
  );
}
