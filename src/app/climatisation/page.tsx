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
      <div className="relative w-full h-[400px]">
        <Image
          src="/clima.jpg"
          alt="Installation Plomberie"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 pt-12 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl font-extrabold">Climatisation</h1>
          <div className="bg-yellow-500 h-1 w-24 mt-2"></div>
          <p className="text-white text-lg max-w-xl mt-4">
            {` Nos experts en chauffage vous conseillent sur les solutions adaptées
            à vos besoins, que ce soit pour l'installation, l'entretien ou la
            réparation de vos équipements. Obtenez un devis personnalisé et des
            réponses à toutes vos questions.`}
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row lg:px-0 px-8  flex-col container mx-auto justify-center items-center mt-12 gap-14">
        <Image
          src="/clim-3.jpg"
          alt="Installation Plomberie"
          width={500}
          height={500}
          className="lg:w-[36%] h-full object-cover rounded-lg"
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
            Comment choisir la climatisation idéale pour votre logement
          </h2>

          <p>
            {`Le choix de votre futur système de climatisation repose sur plusieurs critères essentiels. Il est crucial de prendre en compte la taille de votre habitation, la disposition des pièces à climatiser, ainsi que les volumes des espaces concernés. L'isolation de votre logement, les ouvertures présentes et l'exposition au soleil jouent également un rôle clé dans la détermination de la solution la plus adaptée.`}
          </p>

          <p>
            {`Une fois ces éléments analysés, je pourrai vous proposer une installation parfaitement adaptée à vos besoins. Cela inclut la sélection de la puissance optimale pour garantir une climatisation efficace, le choix du type d’équipement (monosplit, multisplit ou gainable), l'emplacement idéal des unités intérieures et extérieures, et enfin un rapport qualité-prix qui correspond à vos attentes.`}
          </p>

          <p>
            {`En anticipant ces critères et en réalisant une étude approfondie de votre logement, je vous assure une installation performante, économique et parfaitement intégrée à votre intérieur, pour un confort optimal tout au long de l'année.`}
          </p>
        </div>
      </div>
      <div className="container lg:px-0 px-8 mx-auto mt-11">
        <h5 className="text-2xl font-extrabold lg:mt-6 mb-3 max-w-xl mx-auto text-center">
          Préparez votre logement aux chaleurs estivales en Drôme Ardèche !
        </h5>
        <p className="text-center">
          {`Les étés deviennent de plus en plus chauds, et l'aération naturelle ne suffit plus à rafraîchir nos habitations. Entre les nuisances sonores et la pollution, il est essentiel de penser à une climatisation efficace. Les systèmes modernes, tels que les climatiseurs gainables, sont plus discrets, moins énergivores et offrent un confort optimal. Ils s’intègrent parfaitement à votre intérieur sans perturber votre décoration.`}
        </p>
        <p className="text-center mt-4">
          {`Que vous optiez pour une climatisation murale, une pompe à chaleur ou un système gainable, notre équipe installe ces équipements dans les meilleurs délais. Anticipez la chaleur et choisissez la solution adaptée à votre logement pour profiter d'une climatisation réversible toute l'année.`}
        </p>
      </div>

      <Certifications />
      <div className="flex container mx-auto justify-center items-center my-12 gap-14">
        <div className="space-y-4 lg:px-0 px-8   max-w-5xl mx-auto">
          <div className="flex items-center justify-center">
            <div className="bg-yellow-500 h-[0.15rem] w-20 mr-3"></div>
            <p className="text-yellow-500 font-bold">INSTALLATIONS</p>
            <div className="bg-yellow-500 h-[0.15rem] w-20 ml-3"></div>
          </div>
          <h2 className="text-3xl font-extrabold mt-6 max-w-xl mx-auto text-center">
            Installation de tous les types de climatisations murales réversibles
          </h2>
          <p className="text-center">
            {`Vous souhaitez vous orienter vers la pose d’un climatiseur mural réversible ? Ces systèmes pompe à chaleur air-air sont considérés comme les moins énergivores. Selon le nombre de pièces que vous climatisez, vous pouvez choisir un climatiseur monosplit (une pièce) ou multisplit (plusieurs pièces). `}
          </p>
          <div className="flex lg:flex-row flex-col">
            <div className="mx-auto flex flex-col justify-center">
              <Image
                src="/page-clim/single-clim.png"
                alt="Installation Plomberie"
                width={500}
                height={500}
                className="w-40 h-40 object-contain   rounded-lg mx-auto"
              />
              <h4 className="text-2xl font-extrabold mt-6 max-w-xl mx-auto text-center">
                Monosplit
              </h4>
              <p className="text-center mt-2">
                Ce système comprend une unité extérieure et une unité intérieure
                pour rafraîchir ou chauffer la pièce.
              </p>
            </div>

            <div className="mx-auto flex flex-col justify-center">
              <Image
                src="/page-clim/multi-clim.png"
                alt="Installation Plomberie"
                width={500}
                height={500}
                className="w-40 h-40  object-contain rounded-lg mx-auto"
              />
              <h4 className="text-2xl font-extrabold mt-6 max-w-xl mx-auto text-center">
                Multisplit
              </h4>
              <p className="text-center mt-2">
                Cet équipement est composé d’une unité extérieure et de
                plusieurs unités intérieures réparties dans votre habitation.
              </p>
            </div>
          </div>

          <h5 className="text-2xl font-extrabold mt-6 max-w-xl mx-auto text-center">
            {`Les 5 étapes clés pour réussir l'installation d'une climatisation`}
          </h5>
          <ol className="list-decimal">
            <li>
              <strong>{`L'analyse des besoins :`}</strong> avant de choisir un
              système de climatisation, il est important de déterminer les
              besoins de refroidissement de votre habitation.
            </li>
            <li>
              <strong>Le choix du système :</strong> une fois les besoins
              évalués, il est temps de choisir le système de climatisation
              adapté à vos attentes de rafraîchissement.
            </li>
            <li>
              <strong>{`L'installation :`}</strong>{" "}
              {`elle doit être réalisée par
              un professionnel qualifié pour garantir votre sécurité. Elle
              consiste en la fixation de l'unité extérieure et de l'unité
              intérieure, le raccordement des tuyaux de réfrigération et des
              conduites d'eau ainsi que le câblage électrique.`}
            </li>
            <li>
              <strong>La mise en service :</strong>{" "}
              {`lors de la mise en service,
              des tests sont effectués pour vérifier l'étanchéité du système, la
              connexion des conduites et les réglages.`}
            </li>
            <li>
              <strong>{`L'entretien :`}</strong> cette dernière étape est
              primordiale pour garantir le bon fonctionnement de votre
              climatisation et prolonger sa durée de vie. Il consiste à changer
              régulièrement les filtres, vérifier les tuyaux de réfrigération,
              nettoyer les unités intérieures et extérieures.
            </li>
          </ol>
          <h5 className="text-2xl font-extrabold mt-6 max-w-xl mx-auto text-center">
            Les avantages de la climatisation réversible
          </h5>
          <ol className="list-decimal">
            <li>
              <strong>
                {`Une consommation d'électricité moins importante que les systèmes
                de chauffage électrique :`}
              </strong>{" "}
              {`  l'utilisation de la chaleur de l'air extérieur plutôt que la
              génération de chaleur à partir de zéro réduit la note.`}
            </li>
            <li>
              <strong>Une solution tout-en-un</strong> pour maintenir une
              {`  température confortable toute l'année dans les zones à climat`}
              modéré.
            </li>
            <li>
              <strong>Une amélioration du confort</strong> grâce à un contrôle
              {` précis de la température, de l'humidité et de la ventilation des
              espaces.`}
            </li>
            <li>
              <strong>Une mise en place plus simple</strong>{" "}
              {`qu'une
              multiplication des systèmes de chauffage et climatisation.`}
            </li>
            <li>
              <strong>
                Une réduction des émissions de gaz à effet de serre
              </strong>{" "}
              grâce au système de pompe à chaleur.
            </li>
            <li>
              <strong>
                Une facilité de programmation et de contrôle à distance
              </strong>{" "}
              {`permettant d'ajuster la température et par conséquent de réaliser
              des économies d'énergie en optimisant les périodes de
              fonctionnement.`}
            </li>
          </ol>
          <Button className="bg-yellow-500 mx-auto justify-center flex mt-4 text-white font-bold py-2 px-6 rounded-md hover:bg-yellow-600 transition">
            Demander un devis
          </Button>
        </div>
      </div>
      <HeatingSolutions />

      <Footer />
    </>
  );
}
