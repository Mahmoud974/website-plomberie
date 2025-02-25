import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Certifications from "../../components/Certifications";
import HeatingSolutions from "@/components/HeatingSolutions";

export default function page() {
  return (
    <>
      <Menu />
      <div className="relative w-full h-[400px]  ">
        <Image
          src="/page-chauffage/chauffage-1.webp"
          alt="Installation Plomberie"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 pt-12 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl font-extrabold">Chauffage</h1>
          <div className="bg-yellow-500 h-1 w-24 mt-2"></div>
          <p className="text-white text-lg max-w-xl mt-4">
            {` Nos experts en chauffage vous conseillent sur les solutions adaptées
            à vos besoins, que ce soit pour l'installation, l'entretien ou la
            réparation de vos équipements.`}
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row lg:px-0 px-8  flex-col container mx-auto justify-center items-center mt-12 gap-14">
        <Image
          src="/page-chauffage/chauffage.webp"
          alt="Installation Plomberie"
          width={500}
          height={500}
          className="lg:w-[36%] h-full object-cover rounded-lg"
        />
        <div className=" space-y-4 max-w-xl">
          <div className="flex items-center">
            <p className="text-yellow-500  font-bold">
              SPÉCIALISTE DANS LA VENTE
            </p>
            <div className="bg-yellow-500 h-[0.15rem] w-20 ml-3"></div>
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
        <div className="flex lg:flex-row flex-col lg:px-0 px-8   justify-center gap-6">
          <div className="border p-6 rounded-lg shadow-lg   max-w-xl bg-white">
            <Image
              src="/page-chauffage/chaudiere.webp"
              alt="Installation Plomberie"
              width={100}
              height={100}
              className="object-cover w-12 mb-5  "
            />
            <h3 className="text-2xl font-extrabold text-gray-800 mb-4">
              Installation de chaudières
            </h3>
            <p className="text-gray-600 text-lg">
              {`Le remplacement d'un système de chauffage nécessite une étude préalable de votre habitation. Le choix de la chaudière la mieux adaptée est technique, je vous conseille dans cette étape primordiale.`}
            </p>
            <Button className="mt-3">En savoir +</Button>
          </div>

          <div className="border p-6 rounded-lg shadow-lg flex-1  max-w-xl bg-white">
            <Image
              src="/page-chauffage/pompes.webp"
              alt="Installation Plomberie"
              width={100}
              height={100}
              className="object-cover w-20 mb-5  "
            />

            <h3 className="text-2xl font-extrabold text-gray-800 mb-4">
              Installation de Pompes à chaleur
            </h3>
            <p className="text-gray-600 text-lg">
              {`Une étude préalable de votre habitation est essentielle pour déterminer si une pompe à chaleur est la solution la plus adaptée. Nous vous guidons dans le choix de la pompe la mieux adaptée à vos besoins de chauffage.`}
            </p>
            <Button className="mt-3">En savoir +</Button>
          </div>
        </div>
      </div>

      <Certifications />
      <div className="flex container mx-auto justify-center items-center my-12 gap-14">
        <div className="space-y-4 lg:px-0 px-8 max-w-5xl mx-auto">
          <div className="flex items-center justify-center">
            <div className="bg-yellow-500 h-[0.15rem] w-20 mr-3"></div>
            <p className="text-yellow-500 font-bold">CHAUDIÈRE</p>
            <div className="bg-yellow-500 h-[0.15rem] w-20 ml-3"></div>
          </div>

          <h2 className="text-3xl font-extrabold mt-6 max-w-xl mx-auto text-center">
            Votre expert en chauffage à Valence et dans la Drôme
          </h2>

          <p className="text-center">
            {`Les pannes de chauffage peuvent survenir à tout moment, mais avec Eco Thermes, vous bénéficiez d'une intervention rapide et efficace. Nos experts chauffagistes se déplacent à Valence et dans les alentours pour réparer vos chaudières, pompes à chaleur ou poêles.`}
          </p>

          <p className="text-center">
            {`L'entretien de vos équipements est essentiel pour garantir leur performance à long terme. Nous effectuons des vérifications complètes pour vous assurer de leur bon fonctionnement et prolonger leur durée de vie.`}
          </p>

          <div className="flex justify-center items-center text-center mt-4">
            <div className="text-xl font-semibold">
              Nos tarifs de dépannage :
            </div>
          </div>

          <ul className="text-center  mt-4">
            <li className="mb-2  ">Chaudières et poêles : 70 € / heure HT</li>
            <li className="mb-2">Pompes à chaleur : 85 € / heure HT</li>
          </ul>

          <p className="text-center mt-6">
            {`Pour une installation ou un dépannage, contactez-nous dès aujourd'hui. Nous sommes là pour vous offrir des solutions adaptées à vos besoins.`}
          </p>
        </div>
      </div>
      <HeatingSolutions />

      <Footer />
    </>
  );
}
