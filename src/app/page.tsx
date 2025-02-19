import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

import HeatingSolutions from "@/components/HeatingSolutions";
import Certifications from "@/components/Certifications";
import HomeIcons from "@/components/HomeIcons";
import { Comments } from "@/components/Comments";
import { Marquee } from "@/components/magicui/marquee";

export default function page() {
  return (
    <>
      <Menu />
      <div className="relative w-full h-[400px]">
        <Image
          src="/plomb-1.jpg"
          alt="Installation Plomberie"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 pt-12 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl font-extrabold">Home</h1>
          <div className="bg-yellow-500 h-1 w-24 mt-2"></div>
          <p className="text-white text-lg max-w-xl mt-4">
            {` Nos experts en chauffage vous conseillent sur les solutions adaptées
            à vos besoins, que ce soit pour l'installation, l'entretien ou la
            réparation de vos équipements. Obtenez un devis personnalisé et des
            réponses à toutes vos questions.`}
          </p>
        </div>
      </div>
      <HomeIcons />

      <div className="flex container mx-auto justify-center items-center mt-12 gap-14">
        <Image
          src="/clim-2.jpg"
          alt="Installation Plomberie"
          width={500}
          height={500}
          className="w-[36%] h-full object-cover rounded-lg"
        />
        <div className="space-y-6 max-w-xl">
          {/* Titre Section */}
          <div className="flex items-center">
            <p className="text-yellow-500 font-bold uppercase">
              Installation Climatisation à Valence
            </p>
            <div className="bg-yellow-500 h-[0.15rem] w-20 ml-3"></div>
          </div>

          <h2 className="text-3xl font-extrabold mt-4">
            Bien choisir votre climatisation
          </h2>

          <p>
            Le choix de votre climatisation dépend de plusieurs critères :
            superficie et disposition des pièces, isolation, exposition au
            soleil et présence d’ouvertures.
          </p>

          <p>
            Après analyse, je vous propose la solution la plus adaptée :
            puissance optimale, type d’équipement (monosplit, multisplit,
            gainable), emplacement des unités et meilleur rapport qualité-prix.
          </p>

          <p>
            Profitez d’une installation performante et économique, parfaitement
            intégrée à votre intérieur.
          </p>

          <Button className="bg-yellow-500 text-white font-bold py-2 px-6 rounded-md hover:bg-yellow-600 transition">
            Demander un devis
          </Button>
        </div>
      </div>
      <div className="container mx-auto mt-11">
        {" "}
        <h5 className="text-2xl font-extrabold mt-6 max-w-xl mx-auto text-center">
          Le climatiseur gainable : le choix de la quasi-invisibilité
        </h5>
        <p className="text-center">
          {`Il s’agit sans conteste de la solution esthétique la plus respectueuse de votre décoration intérieure. Intégrée dans les murs ou les conduits, elle ne laisse apparaître que les grilles par lesquelles l’air climatisé est diffusé dans vos pièces. Grâce à son invisibilité le climatiseur gainable offre un gain de place non négligeable. Très silencieuse et avec peu de mouvement d'air, elle apporte également un confort supérieur à la climatisation réversible classique. Les performances sont très bonnes et les consommations d’énergie sont maîtrisées grâce au pilotage par télécommande individualisé dans chaque pièce.`}
        </p>
      </div>

      <Certifications />
      <div className="flex container mx-auto justify-center items-center my-12 gap-14">
        <div className="space-y-4  max-w-5xl mx-auto">
          <div className="flex items-center justify-center">
            <div className="bg-yellow-500 h-[0.15rem] w-20 mr-3"></div>
            <p className="text-yellow-500 font-bold uppercase">Avis clients</p>
            <div className="bg-yellow-500 h-[0.15rem] w-20 ml-3"></div>
          </div>
          <h2 className="text-3xl font-extrabold mt-6 max-w-xl mx-auto text-center">
            Installation de tous les types de climatisations murales réversibles
          </h2>
        </div>
      </div>
      <HeatingSolutions />

      <Footer />
    </>
  );
}
