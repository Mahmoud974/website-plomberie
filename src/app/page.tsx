import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Image from "next/image";
import React from "react";
import HeatingSolutions from "@/components/HeatingSolutions";
import Certifications from "@/components/Certifications";
import HomeIcons from "@/components/HomeIcons";
import { QuestionsReponses } from "@/components/QuestionsReponses";

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
          <p className="text-white text-lg max-w-xl mt-4 ">
            {`L’été arrive à grands pas ! Préparez-vous aux fortes chaleurs en installant un système de climatisation adapté à votre maison. ☀️❄️`}
          </p>
        </div>
      </div>
      <HomeIcons />

      <div className="container lg:mx-auto lg:px-0 px-8   ">
        {" "}
        <h5 className="text-2xl font-extrabold mt-6   mx-auto text-center">
          Le climatiseur gainable : le choix de la quasi-invisibilité
        </h5>
        <p className="text-center text-gray-400 max-w-6xl mt-3 mx-auto">
          {`Il s’agit sans conteste de la solution esthétique la plus respectueuse de votre décoration intérieure. Intégrée dans les murs ou les conduits, elle ne laisse apparaître que les grilles par lesquelles l’air climatisé est diffusé dans vos pièces. Grâce à son invisibilité le climatiseur gainable offre un gain de place non négligeable. Très silencieuse et avec peu de mouvement d'air, elle apporte également un confort supérieur à la climatisation réversible classique. Les performances sont très bonnes et les consommations d’énergie sont maîtrisées grâce au pilotage par télécommande individualisé dans chaque pièce.`}
        </p>
      </div>

      <div className="flex lg:flex-row lg:px-0 px-8  flex-col container mx-auto justify-center items-center mt-12 lg:gap-28 gap-12">
        <Image
          src="/clim-2.jpg"
          alt="Installation Plomberie"
          width={500}
          height={500}
          className="lg:w-[36%]  h-full object-cover rounded-lg"
        />
        <QuestionsReponses />
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
