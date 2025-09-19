import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Image from "next/image";
import React from "react";
import HeatingSolutions from "@/components/HeatingSolutions";
import Certifications from "@/components/Certifications";
import HomeIcons from "@/components/HomeIcons";
import { QuestionsReponses } from "@/components/QuestionsReponses";
import Avantage from "@/components/Avantage";
import { MarqueeDemo } from "@/components/AvisClients";
import Banner from "@/components/Banner";

export default function page() {
  return (
    <>
      <Menu />
      <Banner
        name="/home/home.webp"
        alt="Image d'accueil parlant avec une femme de la prestation "
        title="Accueil"
        text="L’été arrive à grands pas ! Préparez-vous aux fortes chaleurs en installant un système de climatisation adapté à votre maison. ☀️❄️"
      />

      <HomeIcons />

      <div className="container lg:mx-auto lg:px-0 px-8">
        <h5 className="text-2xl font-extrabold mt-6 mx-auto text-center">
          Le climatiseur gainable : le choix de la quasi-invisibilités
        </h5>
        <p className="text-center text-gray-400 max-w-6xl mt-3 mx-auto">
          {`Il s’agit sans conteste de la solution esthétique la plus respectueuse de votre décoration intérieure. Intégrée dans les murs ou les conduits, elle ne laisse apparaître que les grilles par lesquelles l’air climatisé est diffusé dans vos pièces. Grâce à son invisibilité le climatiseur gainable offre un gain de place non négligeable. Très silencieuse et avec peu de mouvement d'air, elle apporte également un confort supérieur à la climatisation réversible classique. Les performances sont très bonnes et les consommations d’énergie sont maîtrisées grâce au pilotage par télécommande individualisé dans chaque pièce.`}
        </p>
      </div>

      <div className="flex lg:flex-row lg:px-0 px-8 flex-col container mx-auto justify-center items-center mt-12 lg:gap-28 gap-12">
        <Image
          src="/home/man-works.webp"
          alt="Image d'un homme qui répare la plomberie"
          width={500}
          height={500}
          className="lg:w-[36%] h-full object-cover rounded-lg"
        />
        <QuestionsReponses />
      </div>

      <Certifications />
      <MarqueeDemo />
      <Avantage />
      <div className="flex container mx-auto justify-center items-center my-12 gap-14"></div>
      <HeatingSolutions />

      <Footer />
    </>
  );
}
