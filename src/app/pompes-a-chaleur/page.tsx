import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Certifications from "../../components/Certifications";
import HeatingSolutions from "@/components/HeatingSolutions";
import Link from "next/link";
import ImagesGallery from "@/components/ImagesGallery";

export default function page() {
  return (
    <>
      <Menu />
      <div className="relative w-full h-[400px]">
        <Image
          src="/clim.jpg"
          alt="Installation Plomberie"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 pt-12 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl font-extrabold">
            Pompes à chaleur
          </h1>
          <div className="bg-yellow-500 h-1 w-24 mt-2"></div>
          <p className="text-white text-lg max-w-xl mt-4">
            {` Nos experts en chauffage vous conseillent sur les solutions adaptées
            à vos besoins, que ce soit pour l'installation, l'entretien ou la
            réparation de vos équipements..`}
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col lg:px-0 px-8  container mx-auto justify-center items-center mt-12 gap-14">
        <Image
          src="/clim-2.jpg"
          alt="Installation Plomberie"
          width={500}
          height={500}
          className="lg:w-[36%] h-full object-cover rounded-lg"
        />
        <div className="space-y-6 max-w-xl">
          {/* Titre Section */}
          <div className="flex items-center">
            <p className="text-yellow-500 font-bold uppercase">
              Pompe à Chaleur & Climatisation à Valence
            </p>
            <div className="bg-yellow-500 h-[0.15rem] w-20 ml-3"></div>
          </div>

          <h2 className="text-3xl font-extrabold mt-4">
            Bien choisir votre système de chauffage et de climatisation
          </h2>

          <p>
            Le choix de votre <strong>pompe à chaleur</strong> ou de votre{" "}
            <strong>climatisation</strong> dépend de plusieurs critères :
            superficie et disposition des pièces, isolation, exposition au
            soleil et besoins en confort thermique.
          </p>

          <p>
            Ces travaux constituent un investissement important, soulevant de
            nombreuses questions techniques et financières. En tant qu’**artisan
            qualifié RGE et certifié QualiPAC**, je vous accompagne dans votre
            projet avec une expertise reconnue.
          </p>

          <p>
            Je vous aide à choisir l’équipement le plus adapté : puissance
            optimale, type de système (monosplit, multisplit, gainable),
            emplacement des unités et meilleur **rapport qualité-prix**. Grâce à
            mes certifications, vous pouvez bénéficier des **aides financières
            de l’État et d’EDF**.
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
          Un chauffage plus écologique et efficace
        </h5>
        <p className="text-center mt-3">
          {` Les pompes à chaleur réduisent les émissions de gaz à effet de serre
          en exploitant l'énergie de l'air, du sol ou de l'eau. Elles consomment
          peu et produisent plus d'énergie qu'elles n'en utilisent, offrant
          ainsi une solution économique et durable pour chauffer ou climatiser
          les habitations.`}
        </p>

        <h5 className="text-2xl font-extrabold mt-6 max-w-xl mx-auto text-center">
          Pompe à chaleur : Air-Eau ou hybride ?
        </h5>
        <p className="text-center mt-3">
          Une pompe à chaleur capte l’énergie de l’air extérieur grâce à une
          unité extérieure et la restitue via une unité intérieure, alimentant
          ainsi votre chauffage. Ce procédé thermodynamique permet une chauffe
          efficace et écoresponsable.
        </p>
      </div>

      <ImagesGallery />

      <Certifications />

      <div className="flex container mx-auto justify-center items-center my-12 gap-14 lg:px-0 px-8 ">
        <div className="space-y-4   max-w-5xl mx-auto">
          <div className="flex items-center justify-center">
            <div className="bg-yellow-500 h-[0.15rem] w-20 mr-3"></div>
            <p className="text-yellow-500 font-bold">INSTALLATIONS</p>
            <div className="bg-yellow-500 h-[0.15rem] w-20 ml-3"></div>
          </div>
          <h2 className="text-3xl font-extrabold mt-6 max-w-xl mx-auto text-center">
            Installation de toutes les pompes à chaleur
          </h2>
          <p className="text-center">
            {`Vous souhaitez vous orienter vers l'installation d'une pompe à chaleur ? Ces systèmes sont considérés comme les moins énergivores. Selon vos besoins, vous pouvez choisir une pompe à chaleur aérothermique (air-air ou air-eau) ou géothermique (sol-eau).`}
          </p>
          <div className="flex lg:flex-row flex-col">
            <div className="mx-auto flex flex-col justify-center">
              <Image
                src="/multi.png"
                alt="Installation Pompes à chaleur"
                width={500}
                height={500}
                className="w-32 h-full object-cover rounded-lg mx-auto"
              />
              <h4 className="text-2xl font-extrabold mt-6 max-w-xl mx-auto text-center">
                Pompe à chaleur Air-Air
              </h4>
              <p className="text-center mt-2">
                Ce système comprend une unité extérieure et une ou plusieurs
                unités intérieures pour chauffer ou rafraîchir la pièce.
              </p>
            </div>

            <div className="mx-auto flex flex-col justify-center">
              <Image
                src="/multi.png"
                alt="Installation Pompes à chaleur"
                width={500}
                height={500}
                className="w-32 h-full object-cover rounded-lg mx-auto"
              />
              <h4 className="text-2xl font-extrabold mt-6 max-w-xl mx-auto text-center">
                Pompe à chaleur Air-Eau
              </h4>
              <p className="text-center mt-2">
                Cette solution est idéale pour remplacer une chaudière, elle
                produit de l'eau chaude pour le chauffage et l'eau sanitaire.
              </p>
            </div>
          </div>

          <h5 className="text-2xl font-extrabold mt-6 max-w-xl mx-auto text-center">
            {`Les 5 étapes clés pour réussir l'installation d'une pompe à chaleur`}
          </h5>
          <ol className="list-decimal">
            <li>
              <strong>{`L'analyse des besoins :`}</strong> avant de choisir un
              système de pompe à chaleur, il est important de déterminer les
              besoins de chauffage et de refroidissement de votre habitation.
            </li>
            <li>
              <strong>Le choix du système :</strong> une fois les besoins
              évalués, il est temps de choisir le système de pompe à chaleur
              adapté à vos attentes.
            </li>
            <li>
              <strong>{`L'installation :`}</strong>{" "}
              {`elle doit être réalisée par un professionnel qualifié pour garantir votre sécurité. Elle consiste en la fixation de l'unité extérieure et de l'unité intérieure (si nécessaire), le raccordement des tuyaux et le câblage électrique.`}
            </li>
            <li>
              <strong>La mise en service :</strong>{" "}
              {`lors de la mise en service, des tests sont effectués pour vérifier l'étanchéité du système et la performance du chauffage/refroidissement.`}
            </li>
            <li>
              <strong>{`L'entretien :`}</strong> cette étape est primordiale
              pour garantir le bon fonctionnement de votre pompe à chaleur et
              prolonger sa durée de vie. Il consiste à entretenir régulièrement
              les filtres, vérifier les tuyaux et nettoyer les unités
              intérieures et extérieures.
            </li>
          </ol>
          <h5 className="text-2xl font-extrabold mt-6 max-w-xl mx-auto text-center">
            Les avantages de la pompe à chaleur
          </h5>
          <ol className="list-decimal">
            <li>
              <strong>
                {`Une consommation d'électricité moins importante que les systèmes
          de chauffage électrique :`}
              </strong>{" "}
              {`l'utilisation de la chaleur de l'air extérieur (ou du sol) plutôt que la
        génération de chaleur à partir de zéro réduit considérablement la facture.`}
            </li>
            <li>
              <strong>Une solution tout-en-un</strong> pour chauffer et
              {` rafraîchir l'habitation, ainsi que pour produire de l'eau chaude
              sanitaire.`}
            </li>
            <li>
              <strong>Une amélioration du confort</strong> grâce à une
              température stable, une faible humidité et une ventilation
              optimisée.
            </li>
            <li>
              <strong>Une mise en place plus simple</strong> comparée à un
              ensemble complexe de chauffages électriques et de climatiseurs.
            </li>
            <li>
              <strong>
                Une réduction des émissions de gaz à effet de serre
              </strong>{" "}
              grâce à l'utilisation d'énergies renouvelables dans le processus.
            </li>
            <li>
              <strong>
                Une facilité de programmation et de contrôle à distance
              </strong>{" "}
              {`permettant d'ajuster la température et optimiser la consommation
        énergétique.`}
            </li>
          </ol>
        </div>
      </div>
      <HeatingSolutions />

      <Footer />
    </>
  );
}
