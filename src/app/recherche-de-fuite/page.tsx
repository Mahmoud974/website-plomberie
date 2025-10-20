import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Certifications from "../../components/Certifications";
import HeatingSolutions from "@/components/HeatingSolutions";
import Link from "next/link";
import Banner from "@/components/Banner";

export const metadata = {
  title: "Recherche de fuite d’eau à Valence | SVB PRESTA",
  description:
    "Détection de fuite d’eau à Valence sans destruction. SVB PRESTA localise vos fuites rapidement grâce à des appareils de haute précision : caméras thermiques, gaz traceurs, etc.",
  keywords:
    "recherche de fuite Valence, détection de fuite d’eau, plombier Valence, gaz traceur, caméra thermique, fuite invisible, SVB PRESTA",
  alternates: {
    canonical: "https://www.svbpresta.fr/recherche-fuite",
  },
};

export default function Page() {
  return (
    <>
      <Menu />

      <Banner
        name="/page-recherche-fuite/recherche-fuite-eau-plombier-valence-svb-presta.webp"
        alt="Recherche de fuite d’eau effectuée par SVB PRESTA à Valence"
        title="Recherche de fuite"
        text="Nos experts localisent vos fuites d’eau avec précision grâce à des technologies de pointe, sans destruction. Protégez vos installations et évitez des dégâts coûteux grâce à une intervention rapide et efficace."
      />

      <div className="flex lg:flex-row flex-col lg:px-0 px-8 container mx-auto justify-center items-center mt-12 gap-14">
        <Image
          src="/page-recherche-fuite/appareil-detection-fuite-eau-svb-presta-valence.webp"
          alt="Appareil professionnel utilisé pour la détection de fuites d’eau à Valence"
          width={500}
          height={500}
          className="lg:w-[36%] h-full object-cover rounded-lg"
          loading="lazy"
        />

        <div className="space-y-6 max-w-xl">
          <div className="flex items-center">
            <p className="text-yellow-500 font-bold uppercase">
              Appareil de détection de fuite
            </p>
            <div className="bg-yellow-500 h-[0.15rem] w-20 ml-3"></div>
          </div>

          <h2 className="text-3xl font-extrabold mt-4">
            Protégez votre logement grâce à une détection de fuites efficace
          </h2>

          <p>
            La recherche de fuites est essentielle pour préserver vos
            installations et éviter des dégâts d’eau. En cas de fuite invisible,
            une intervention rapide permet d’éviter des dommages majeurs.
          </p>

          <p>
            Grâce à nos technologies de pointe — caméras thermiques, gaz traceurs
            et outils à ultrasons — nous localisons les fuites avec précision,
            sans abîmer vos murs ni vos sols. Vous bénéficiez d’un service rapide,
            fiable et non destructif.
          </p>

          <p>
            Nous assurons également un accompagnement préventif pour réduire le
            risque de fuites futures et maintenir l’intégrité de vos réseaux de plomberie.
          </p>

          <Link href="/contact">
            <Button className="bg-yellow-500 mt-3 text-white font-bold py-2 px-6 rounded-md hover:bg-yellow-600 transition">
              Demander un devis
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto mt-11 lg:px-0 px-8 mb-10 max-w-6xl">
        <h5 className="text-2xl font-extrabold mt-6 text-center">
          Des solutions de détection de fuites fiables et précises
        </h5>
        <p className="text-center mt-3">
          Grâce à des équipements modernes, nous localisons les fuites d’eau
          avec une grande précision, sans causer de dommages à vos installations.
          Que ce soit pour des canalisations visibles ou encastrées, nos méthodes
          de détection non destructives garantissent un diagnostic rapide et fiable.
        </p>
      </div>

      <Certifications />

      <div className="flex container mx-auto justify-center items-center my-12 gap-14 lg:px-0 px-8">
        <div className="space-y-4 max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center">
            <div className="bg-yellow-500 h-[0.15rem] w-20 mr-3"></div>
            <p className="text-yellow-500 font-bold">DÉTECTION DE FUITES</p>
            <div className="bg-yellow-500 h-[0.15rem] w-20 ml-3"></div>
          </div>

          <h2 className="text-3xl font-extrabold mt-6">
            Les avantages de la recherche de fuites
          </h2>

          <p>
            La détection de fuites permet de localiser précisément les
            défaillances dans vos canalisations et d’éviter des réparations
            coûteuses. En utilisant des outils modernes et non destructifs,
            nous identifions rapidement l’origine des fuites et limitons
            les travaux nécessaires.
          </p>

          <p>
            En intervenant rapidement, nous préservons la structure de vos
            installations, évitons les infiltrations d’eau et limitons
            le gaspillage. Une approche préventive et durable pour votre confort
            et la sécurité de votre logement à Valence.
          </p>
        </div>
      </div>

      <HeatingSolutions />
      <Footer />
    </>
  );
}