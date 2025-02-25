import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Certifications from "../../components/Certifications";
import HeatingSolutions from "@/components/HeatingSolutions";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Menu />
      <div className="relative w-full h-[400px]">
        <Image
          src="/page-recherche-fuite/fuites-2.webp"
          alt="Image recherchant une fuite"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 pt-12 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl font-extrabold">
            Recherche de fuite
          </h1>
          <div className="bg-yellow-500 h-1 w-24 mt-2"></div>
          <p className="text-white text-lg max-w-xl mt-4">
            {`Nos experts localisent rapidement les fuites grâce à des technologies avancées. Protégez vos installations et évitez des dégâts coûteux en nous faisant confiance pour un diagnostic précis et rapide.`}
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col lg:px-0 px-8  container mx-auto justify-center items-center mt-12 gap-14">
        <Image
          src="/page-recherche-fuite/device.webp"
          alt="Image d'appreil recherchant des fuites"
          width={500}
          height={500}
          className="lg:w-[36%] h-full object-cover rounded-lg"
        />
        <div className="space-y-6 max-w-xl">
          <div className="flex items-center">
            <p className="text-yellow-500 font-bold uppercase">
              Appareil pour detecter les fuites
            </p>
            <div className="bg-yellow-500 h-[0.15rem] w-20 ml-3"></div>
          </div>

          <h2 className="text-3xl font-extrabold mt-4">
            Protégez votre logement grâce à une détection de fuites efficace
          </h2>

          <p>
            La détection de fuites est essentielle pour préserver vos
            installations et éviter des dégâts d’eau. En cas de fuite invisible,
            l’intervention précoce est cruciale pour éviter des dommages
            majeurs.
          </p>

          <p>
            Grâce à des technologies de pointe, nous localisons les fuites avec
            précision, sans causer de dommages à vos murs ou sols. Vous
            bénéficiez ainsi d’une intervention rapide et fiable, réalisée par
            des experts qualifiés.
          </p>

          <p>
            Nous vous accompagnons dans la prévention de fuites futures et vous
            aidons à maintenir l’intégrité de vos installations de plomberie.
          </p>

          <Link href="/contact">
            <Button className="bg-yellow-500 mt-3 text-white font-bold py-2 px-6 rounded-md hover:bg-yellow-600 transition">
              Demander un devis
            </Button>
          </Link>
        </div>
      </div>
      <div className="container mx-auto mt-11 lg:px-0 px-8 mb-10 max-w-6xl">
        <h5 className="text-2xl font-extrabold mt-6 max-w-xl mx-auto text-center">
          Des solutions de détection de fuites fiables et précises
        </h5>
        <p className="text-center mt-3">
          {` Grâce à des équipements modernes, nous localisons les fuites d’eau
          avec une grande précision, sans causer de dommages à vos
          installations. Que ce soit pour des canalisations visibles ou cachées,
          nous utilisons des technologies avancées, telles que des caméras
          thermiques, des gaz traceurs et des fumigateurs. Ces outils nous
          permettent d'identifier rapidement et efficacement les fuites, tout en
          préservant l'intégrité de vos installations. Avec cette approche non
          destructive, nous minimisons les travaux nécessaires et vous
          garantissons une solution rapide et fiable pour résoudre votre
          problème de fuite.`}
        </p>
      </div>

      <Certifications />

      <div className="flex container mx-auto justify-center items-center my-12 gap-14 lg:px-0 px-8 ">
        <div className="space-y-4 max-w-5xl mx-auto">
          <div className="flex items-center justify-center">
            <div className="bg-yellow-500 h-[0.15rem] w-20 mr-3"></div>
            <p className="text-yellow-500 font-bold">DETECTION DE FUITES</p>
            <div className="bg-yellow-500 h-[0.15rem] w-20 ml-3"></div>
          </div>
          <h2 className="text-3xl font-extrabold mt-6 max-w-xl mx-auto text-center">
            Les avantages de la recherche de fuites
          </h2>
          <p className="text-center">
            La recherche de fuites permet de localiser précisément les
            défaillances dans vos canalisations et d’éviter des réparations
            coûteuses. Grâce à des outils modernes et des méthodes non
            destructives, nous identifions rapidement l’origine des fuites, ce
            qui réduit les risques de détériorations supplémentaires et de
            travaux invasifs.
          </p>
          <p className="text-center">
            En agissant vite, nous préservons l’intégrité de vos installations
            et évitons des infiltrations d’eau susceptibles d’affaiblir vos
            structures. Cette approche préventive permet aussi de limiter le
            gaspillage d’eau et de maintenir un environnement sain dans votre
            logement.
          </p>
        </div>
      </div>
      <HeatingSolutions />

      <Footer />
    </>
  );
}
