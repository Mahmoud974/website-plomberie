import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Certifications from "../../components/Certifications";
import HeatingSolutions from "@/components/HeatingSolutions";
import Banner from "@/components/Banner";

export const metadata = {
  title: "Installation et entretien de chauffage à Valence | SVB PRESTA",
  description:
    "SVB PRESTA, chauffagiste certifié RGE à Valence (Drôme), installe et entretient vos chaudières, pompes à chaleur et systèmes de chauffage pour un confort durable et économique.",
  keywords:
    "chauffage Valence, chauffagiste Valence, installation chaudière, pompe à chaleur Valence, entretien chauffage, dépannage chaudière, SVB PRESTA, RGE Qualipac",
  alternates: {
    canonical: "https://www.svbpresta.fr/chauffage",
  },
};

export default function Page() {
  return (
    <>
      <Menu />

      <Banner
        name="/page-chauffage/chauffage-installation-entretien-svb-presta-valence.webp"
        alt="Installation de chauffage à Valence par SVB PRESTA"
        title="Chauffage"
        text="Nos experts en chauffage vous accompagnent dans le choix, l'installation et l'entretien de votre système de chauffage pour un confort optimal et des économies d'énergie."
      />

     
      <div className="flex lg:flex-row lg:px-0 px-8 flex-col container mx-auto justify-center items-center mt-12 gap-14">
        <Image
          src="/page-chauffage/radiateur-chauffage-installation-rs-presta-valence.webp"
          alt="Radiateur de chauffage installé par SVB PRESTA à Valence"
          width={500}
          height={500}
          className="lg:w-[36%] h-full object-cover rounded-lg"
          loading="lazy"
        />

        <div className="space-y-4 max-w-xl">
          <div className="flex items-center">
            <p className="text-yellow-500 font-bold uppercase">
              Spécialiste du chauffage à Valence
            </p>
            <div className="bg-yellow-500 h-[0.15rem] w-20 ml-3"></div>
          </div>

          <h2 className="text-3xl font-extrabold mt-6 max-w-xl">
            Installation, vente et entretien de systèmes de chauffage dans la
            Drôme (26)
          </h2>

          <p>
            {`Basée à Valence, l'entreprise SVB PRESTA est spécialisée dans la
            vente, l'installation et l'entretien de systèmes de chauffage et de
            climatisation pour particuliers et professionnels.`}
          </p>

          <p>
            Nos techniciens installent des chaudières à gaz et des pompes à
            chaleur de haute performance, tout en assurant leur maintenance
            annuelle. Grâce à nos certifications QualiPAC, Professionnel du Gaz,
            RGE et Éco-artisan, vous pouvez bénéficier des aides financières de
            l’État pour vos travaux d’amélioration énergétique.
          </p>

          <p>
            Nous intervenons également sur les réseaux de chauffage central, le
            remplacement de radiateurs, les vannes thermostatiques, ainsi que la
            régulation thermique de votre habitation.
          </p>

          <Button className="bg-yellow-500 text-white hover:bg-yellow-600 transition font-semibold">
            Demander un devis
          </Button>
        </div>
      </div>

     
      <div className="container mx-auto mt-11">
        <div className="flex lg:flex-row flex-col lg:px-0 px-8 justify-center gap-6">
           
          <div className="border p-6 rounded-lg shadow-lg max-w-xl bg-white">
            <Image
              src="/page-chauffage/chaudiere.webp"
              alt="Installation de chaudière gaz à Valence par SVB PRESTA"
              width={100}
              height={100}
              className="object-contain w-16 mb-5"
              loading="lazy"
            />
            <h3 className="text-2xl font-extrabold text-gray-800 mb-4">
              Installation de chaudières gaz
            </h3>
            <p className="text-gray-600 text-lg">
              Avant toute installation, une étude thermique de votre logement
              est réalisée pour choisir la chaudière la mieux adaptée à vos
              besoins. Nos experts vous conseillent sur les modèles les plus
              performants et économiques.
            </p>
            <Button className="mt-3 bg-yellow-500 text-white hover:bg-yellow-600 transition font-semibold">
              En savoir +
            </Button>
          </div>

          {/* Bloc Pompe à chaleur */}
          <div className="border p-6 rounded-lg shadow-lg max-w-xl bg-white">
            <Image
              src="/page-chauffage/pompes.webp"
              alt="Installation de pompe à chaleur à Valence par SVB PRESTA"
              width={100}
              height={100}
              className="object-contain w-20 mb-5"
              loading="lazy"
            />
            <h3 className="text-2xl font-extrabold text-gray-800 mb-4">
              Installation de pompes à chaleur
            </h3>
            <p className="text-gray-600 text-lg">
              Nous réalisons une analyse complète de votre habitation pour
              déterminer le type de pompe à chaleur le plus adapté (air/air ou
              air/eau). Profitez d’un confort durable tout en réduisant vos
              dépenses énergétiques.
            </p>
            <Button className="mt-3 bg-yellow-500 text-white hover:bg-yellow-600 transition font-semibold">
              En savoir +
            </Button>
          </div>
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <Certifications />

      {/* SECTION TARIFS */}
      <div className="flex container mx-auto justify-center items-center my-12 gap-14">
        <div className="space-y-4 lg:px-0 px-8 max-w-5xl mx-auto">
          <div className="flex items-center justify-center">
            <div className="bg-yellow-500 h-[0.15rem] w-20 mr-3"></div>
            <p className="text-yellow-500 font-bold uppercase">Chauffage & Chaudières</p>
            <div className="bg-yellow-500 h-[0.15rem] w-20 ml-3"></div>
          </div>

          <h2 className="text-3xl font-extrabold mt-6 text-center">
            Votre chauffagiste de confiance à Valence et dans la Drôme
          </h2>

          <p className="text-center">
            {`Les pannes de chauffage peuvent survenir à tout moment. Avec SVB PRESTA, 
            bénéficiez d'une intervention rapide et efficace. Nos chauffagistes 
            interviennent à Valence et dans les alentours pour réparer chaudières, 
            pompes à chaleur et poêles.`}
          </p>

          <p className="text-center">
            {`L'entretien régulier de vos équipements prolonge leur durée de vie 
            et optimise leur rendement énergétique. Nous assurons des vérifications 
            complètes pour garantir leur bon fonctionnement toute l’année.`}
          </p>

          <div className="text-center mt-6 font-semibold text-xl">
            Nos tarifs de dépannage :
          </div>
          <ul className="text-center mt-4">
            <li>Chaudières et poêles : <strong>70 € / heure HT</strong></li>
            <li>Pompes à chaleur : <strong>85 € / heure HT</strong></li>
          </ul>

          <p className="text-center mt-6">
            {`Contactez-nous dès aujourd'hui pour une installation, un dépannage ou un entretien. 
            Nous vous accompagnons avec des solutions adaptées et performantes.`}
          </p>
        </div>
      </div>

      {/* SOLUTIONS COMPLÉMENTAIRES */}
      <HeatingSolutions />
      <Footer />
    </>
  );
}