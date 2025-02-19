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
          src="/clim.jpg"
          alt="Installation Plomberie"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 pt-12 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl font-extrabold">
            Pompes à chaleur
          </h1>
          <div className="bg-yellow-500 h-1 w-24 mt-2"></div>
          <p className="text-white text-lg max-w-xl mt-4">
            {` Nos experts en chauffage vous conseillent sur les solutions adaptées
            à vos besoins, que ce soit pour l'installation, l'entretien ou la
            réparation de vos équipements. Obtenez un devis personnalisé et des
            réponses à toutes vos questions.`}
          </p>
        </div>
      </div>

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
            <p className="text-yellow-500 font-bold">INSTALLATIONS</p>
            <div className="bg-yellow-500 h-[0.15rem] w-20 ml-3"></div>
          </div>
          <h2 className="text-3xl font-extrabold mt-6 max-w-xl mx-auto text-center">
            Installation de tous les types de climatisations murales réversibles
          </h2>
          <p className="text-center">
            {`Vous souhaitez vous orienter vers la pose d’un climatiseur mural réversible ? Ces systèmes pompe à chaleur air-air sont considérés comme les moins énergivores. Selon le nombre de pièces que vous climatisez, vous pouvez choisir un climatiseur monosplit (une pièce) ou multisplit (plusieurs pièces). `}
          </p>
          <div className="flex">
            <div className="mx-auto flex flex-col justify-center">
              <Image
                src="/multi.png"
                alt="Installation Plomberie"
                width={500}
                height={500}
                className="w-32 h-full object-cover rounded-lg mx-auto"
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
                src="/multi.png"
                alt="Installation Plomberie"
                width={500}
                height={500}
                className="w-32 h-full object-cover rounded-lg mx-auto"
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
        </div>
      </div>
      <HeatingSolutions />

      <Footer />
    </>
  );
}
