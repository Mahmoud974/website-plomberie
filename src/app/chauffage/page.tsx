import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import certifications from "../../components/Certifications";
import Certifications from "../../components/Certifications";

export default function page() {
  return (
    <>
      <Menu />
      <div className="relative w-full h-[400px]">
        <Image
          src="/plomb-2.jpg"
          alt="Installation Plomberie"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 pt-12 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl font-extrabold">Chauffage</h1>
          <div className="bg-yellow-500 h-1 w-24 mt-2"></div>
          <p className="text-white text-lg max-w-xl mt-4">
            {` Nos experts en chauffage vous conseillent sur les solutions adaptées
            à vos besoins, que ce soit pour l'installation, l'entretien ou la
            réparation de vos équipements. Obtenez un devis personnalisé et des
            réponses à toutes vos questions.`}
          </p>
        </div>
      </div>

      <div className="flex container mx-auto justify-center items-center mt-12 gap-20">
        <Image
          src="/chauffage.png"
          alt="Installation Plomberie"
          width={500}
          height={500}
          className="w-1/3 h-full object-cover rounded-lg"
        />
        <div className=" space-y-4 max-w-xl">
          <div className="flex items-center">
            <div className="bg-yellow-500 h-[0.15rem] w-20"></div>
            <p className="text-yellow-500 ml-3 font-bold">CHAUDIÈRE</p>
          </div>
          <h2 className="  text-3xl font-extrabold mt-6 max-w-xl">
            Vente et installation de systèmes de chauffage à Valence et dans la
            Drôme.
          </h2>
          <p>
            {` L'entreprise Laurent Junique, située à Valence dans la Drôme (26),
            est spécialisée dans la vente et l'installation de systèmes de
            chauffage et de climatisation.`}
          </p>
          <p>
            Nous fournissons et installons des chaudières à gaz et des pompes à
            chaleur (en moyenne 20 par an). Nos agréments Qualipac,
            Professionnel Gaz, RGE et éco-artisan vous permettent de bénéficier
            des aides et subventions pour les travaux réalisés par notre
            entreprise.
          </p>
          <p>
            Nous nous occupons également des réseaux de chauffage central, du
            remplacement de radiateurs, de vannes de chauffage, et plus encore.
          </p>
          <p>
            Pompes à chaleur, systèmes de chauffage, chaudières, chauffage
            central, vente, installation, dépannage.
          </p>
          <Button>DEMANDER UN DEVIS</Button>
        </div>
      </div>
      <div className="container mx-auto mt-11">
        <div className="flex  justify-center gap-6">
          <div className="border p-6 rounded-lg shadow-lg   max-w-xl bg-white">
            <h3 className="text-2xl font-extrabold text-gray-800 mb-4">
              Installation de chaudières
            </h3>
            <p className="text-gray-600 text-lg">
              {`Le remplacement d'un système de chauffage nécessite une étude préalable de votre habitation. Le choix de la chaudière la mieux adaptée est technique, je vous conseille dans cette étape primordiale.`}
            </p>
            <Button className="mt-3">En savoir +</Button>
          </div>

          <div className="border p-6 rounded-lg shadow-lg flex-1  max-w-xl bg-white">
            <h3 className="text-2xl font-extrabold text-gray-800 mb-4">
              Installation de Pompes
            </h3>
            <p className="text-gray-600 text-lg">
              {`Une étude préalable de votre habitation est essentielle pour déterminer si une pompe à chaleur est la solution la plus adaptée. Nous vous guidons dans le choix de la pompe la mieux adaptée à vos besoins de chauffage.`}
            </p>
            <Button className="mt-3">En savoir +</Button>
          </div>
        </div>
      </div>

      {/* <Certifications /> */}
      <Footer />
    </>
  );
}
