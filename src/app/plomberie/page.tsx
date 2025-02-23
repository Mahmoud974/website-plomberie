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
          src="/tools.jpg"
          alt="Installation Plomberie"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 pt-12 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl font-extrabold">Plomberie</h1>
          <div className="bg-yellow-500 h-1 w-24 mt-2"></div>
          <p className="text-white text-lg max-w-xl mt-4">
            {`Nos experts en plomberie vous conseillent pour l'installation, l'entretien ou la réparation de vos équipements. Demandez un devis personnalisé pour vos besoins spécifiques.`}
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row lg:px-0 px-8  flex-col container mx-auto justify-center items-center mt-12 gap-14">
        <Image
          src="/technical.jpg"
          alt="Installation Plomberie"
          width={500}
          height={500}
          className="lg:w-[36%] h-full object-cover rounded-lg"
        />
        <div className="space-y-6 max-w-xl">
          {/* Titre Section */}
          <div className="flex items-center">
            <p className="text-yellow-500 font-bold uppercase">
              Installation Plomberie à Valence
            </p>
            <div className="bg-yellow-500 h-[0.15rem] w-20 ml-3"></div>
          </div>

          <h2 className="text-3xl font-extrabold mt-4">
            Bien choisir votre installation de plomberie
          </h2>

          <p>
            {`Le choix de votre installation de plomberie dépend de plusieurs critères : la taille de votre habitation, le nombre de points d’eau, ainsi que l’état de votre réseau existant. Il est essentiel de prendre en compte ces éléments pour garantir une installation fiable et durable.`}
          </p>

          <p>
            {`Après une analyse approfondie, je vous proposerai la solution la plus adaptée à vos besoins : matériaux, type de tuyauterie, ainsi que l’emplacement idéal des installations. Nous veillerons également à optimiser le rapport qualité-prix.`}
          </p>

          <p>
            {`Bénéficiez d’une installation de plomberie efficace, sécurisée et parfaitement intégrée à votre logement pour un confort quotidien.`}
          </p>

          <Button className="bg-yellow-500 text-white font-bold py-2 px-6 rounded-md hover:bg-yellow-600 transition">
            Demander un devis
          </Button>
        </div>
      </div>

      <Certifications />

      <div className="flex justify-center container mx-auto mt-8">
        <div className="space-y-6">
          <div className="flex justify-center container mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 space-y-6 lg:space-y-0">
              <div className="flex flex-col items-center space-y-6">
                <Image
                  src="/realisation.jpg"
                  alt="Dépannage de plomberie"
                  width={500}
                  height={500}
                  className="lg:w-96 h-48 object-cover rounded-lg"
                />
                <p className="text-2xl font-bold text-center">
                  Dépannage express
                </p>
                <p className="text-center max-w-md">
                  {`Lorsqu'une panne survient, il est essentiel d'agir rapidement pour éviter des conséquences majeures. Que ce soit pour une fuite, un tuyau bouché ou une installation défectueuse, notre équipe de plombiers est là pour intervenir avec efficacité. Nous offrons un dépannage rapide, professionnel et durable, afin de restaurer le bon fonctionnement de vos installations.`}
                </p>
              </div>

              {/* Deuxième section de détection de fuites */}
              <div className="flex flex-col items-center space-y-6">
                <Image
                  src="/fuites.jpg"
                  alt="Détection de fuites Plomberie"
                  width={500}
                  height={500}
                  className="lg:w-96 h-48 object-cover rounded-lg"
                />
                <p className="text-2xl font-bold text-center">
                  Détection de fuites avancée
                </p>
                <p className="text-center max-w-md">
                  {`La détection précoce des fuites est cruciale pour éviter des dommages coûteux à vos installations. Grâce à notre technologie de pointe, nous localisons les fuites rapidement et précisément, sans causer de dommages à vos murs ou sols. Faites confiance à notre expertise pour une solution rapide et efficace, permettant de préserver l'intégrité de votre système de plomberie.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex container lg:px-0 px-8  mx-auto justify-center items-center my-12 gap-14">
        <div className="space-y-4  max-w-5xl mx-auto">
          <div className="flex items-center justify-center">
            <div className="bg-yellow-500 h-[0.15rem] w-20 mr-3"></div>
            <p className="text-yellow-500 font-bold">NOS SERVICES</p>
            <div className="bg-yellow-500 h-[0.15rem] w-20 ml-3"></div>
          </div>

          <h2 className="text-3xl font-extrabold mt-6 max-w-xl mx-auto text-center">
            Des prestations sur-mesure pour vos besoins en plomberie
          </h2>

          <p className="text-center  mx-auto mt-4">
            {`Notre équipe de plombiers experts est à votre disposition pour tous vos travaux de plomberie, qu'il s'agisse de l'installation de nouveaux équipements, de la réparation de fuites, ou de l'entretien de vos installations. 
  Nous intervenons également pour le débouchage de canalisations, la pose de chauffe-eau et bien plus encore, en garantissant un service rapide et de qualité. 
  Avec Eco Thermes, vous bénéficiez de solutions adaptées à vos besoins, réalisées dans les plus brefs délais.`}
          </p>
          <p className="bg-yellow-100 text-center">
            Nous nous occupons de tous vos travaux de plomberie, qu’il s’agisse
            de débouchage, de réparations ou d’installations de sanitaires.
            Professionnels expérimentés, nous veillons à intervenir rapidement
            et efficacement pour assurer votre confort au quotidien.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 space-y-6 lg:space-y-0">
            {/* Section Débouchage de canalisations */}
            <div className="flex flex-col items-center space-y-6">
              <Image
                src="/canalisations.jpg"
                alt="Dépannage de plomberie"
                width={500}
                height={500}
                className="lg:w-96 h-48 object-cover rounded-lg"
              />
              <p className="text-2xl font-bold text-center">
                Débouchage de canalisations
              </p>
              <p className="text-center max-w-md">
                {`Les canalisations bouchées peuvent causer des désagréments majeurs, affectant le confort et la sécurité de votre habitation. Nous utilisons des équipements adaptés et des techniques modernes pour déboucher vos canalisations de manière rapide et efficace. Qu’il s’agisse d’un dépannage urgent ou d’une intervention de maintenance préventive, nous assurons un service fiable pour éviter tout risque de dégât. Faites appel à nous pour un travail soigné et durable.`}
              </p>
            </div>

            {/* Section Pose d'équipements sanitaires */}
            <div className="flex flex-col items-center space-y-6">
              <Image
                src="/pose.webp"
                alt="Pose d’équipements sanitaires"
                width={500}
                height={500}
                className="lg:w-96 h-48 object-cover rounded-lg"
              />
              <p className="text-2xl font-bold text-center">
                Pose d’équipements sanitaires
              </p>
              <p className="text-center max-w-md">
                {`Nous prenons en charge l’installation de vos équipements sanitaires, qu’il s’agisse de lavabos, douches, baignoires ou WC. Grâce à notre expertise et à l’utilisation de matériaux de qualité, nous garantissons des installations durables et esthétiques, parfaitement adaptées à vos besoins. Notre priorité est de créer des espaces fonctionnels, pratiques et agréables, tout en veillant à la sécurité et à l’harmonie de votre intérieur.`}
              </p>
            </div>
          </div>

          <h5 className="text-2xl font-extrabold mt-6 max-w-xl mx-auto text-center">
            {` Les 5 étapes clés pour réussir l'installation de vos équipements de
            plomberie`}
          </h5>
          <ol className="list-decimal">
            <li>
              <strong>{`L'analyse des besoins :`}</strong>{" "}
              {`Avant de procéder à
              l'installation de vos équipements sanitaires, il est essentiel de
              comprendre les besoins en termes d'espace, de fonctionnalité et de
              consommation d'eau de votre habitation.`}
            </li>
            <li>
              <strong>Le choix des équipements :</strong>{" "}
              {`En fonction des
              besoins, nous sélectionnons les équipements les mieux adaptés à
              vos attentes, qu'il s'agisse de lavabos, de douches, de WC ou de
              chauffe-eau.`}
            </li>
            <li>
              <strong>{`L'installation :`}</strong>{" "}
              {`Cette étape doit être réalisée
              par un plombier qualifié pour garantir la sécurité et la
              durabilité de vos installations. Elle comprend le raccordement des
              canalisations, le montage des équipements sanitaires et la
              vérification des systèmes d'alimentation en eau.`}
            </li>
            <li>
              <strong>La mise en service :</strong>{" "}
              {`Après installation, nous
              effectuons des tests pour vérifier l'étanchéité des installations
              et assurer leur bon fonctionnement, sans fuites ni anomalies.`}
            </li>
            <li>
              <strong>{`L'entretien :`}</strong> Pour garantir la longévité de
              vos installations, un entretien régulier est essentiel. Cela
              comprend le nettoyage des canalisations, la vérification des
              joints et des raccords, et la maintenance des chauffe-eaux et
              autres systèmes de plomberie.
            </li>
          </ol>
        </div>
      </div>
      <HeatingSolutions />

      <Footer />
    </>
  );
}
