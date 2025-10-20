import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Certifications from "../../components/Certifications";
import HeatingSolutions from "@/components/HeatingSolutions";
import Banner from "@/components/Banner";

export default function Page() {
  return (
    <>
      <Menu />
      <Banner
        name="/page-plomberie/plomberie-installation-reparation-valence-rs-presta.webp"
        alt="Plombier RS PRESTA à Valence effectuant l’installation d’un système de plomberie moderne"
        title="Plomberie"
        text="Nos plombiers experts à Valence interviennent pour l'installation, l'entretien et la réparation de vos équipements sanitaires. Bénéficiez d’un service rapide et fiable, adapté à vos besoins."
      />

      {/* Section présentation */}
      <section className="flex lg:flex-row lg:px-0 px-8 flex-col container mx-auto justify-center items-center mt-12 gap-14">
        <Image
          src="/page-plomberie/plombier-professionnel-installation-tuyauterie-valence-rs-presta.webp"
          alt="Technicien RS PRESTA installant un réseau de plomberie à Valence"
          width={500}
          height={500}
          className="lg:w-[36%] h-full object-cover rounded-lg"
          loading="lazy"
        />

        <div className="space-y-6 max-w-xl">
          <div className="flex items-center">
            <p className="text-yellow-500 font-bold uppercase">
              Installation plomberie à Valence
            </p>
            <div className="bg-yellow-500 h-[0.15rem] w-20 ml-3"></div>
          </div>

          <h2 className="text-3xl font-extrabold mt-4">
            Bien choisir votre installation de plomberie
          </h2>

          <p>
            Le choix de votre installation de plomberie dépend de plusieurs
            critères : la taille de votre habitation, le nombre de points d’eau
            et l’état de votre réseau existant. Une bonne planification garantit
            la fiabilité et la durabilité de votre système.
          </p>

          <p>
            Après une analyse précise, nous vous proposons la solution la plus
            adaptée : sélection des matériaux, type de tuyauterie, et
            positionnement optimal des installations pour allier confort et
            performance.
          </p>

          <p>
            Faites confiance à RS PRESTA pour une installation efficace,
            sécurisée et durable, intégrée harmonieusement à votre logement.
          </p>

          <Button className="bg-yellow-500 text-white font-bold py-2 px-6 rounded-md hover:bg-yellow-600 transition">
            Demander un devis
          </Button>
        </div>
      </section>

      <Certifications />

      {/* Section dépannage et fuites */}
      <section className="container mx-auto mt-12 px-6 lg:px-0">
        <h2 className="text-center text-3xl font-extrabold mb-10">
          Nos interventions rapides en plomberie
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="text-center space-y-5">
            <Image
              src="/page-plomberie/depannage-plomberie-valence-rs-presta.webp"
              alt="Dépannage express de plomberie à Valence par RS PRESTA"
              width={500}
              height={500}
              className="w-full h-48 object-cover rounded-lg"
              loading="lazy"
            />
            <h3 className="text-2xl font-bold">Dépannage express</h3>
            <p>
              Une fuite ou un dysfonctionnement ? Nos plombiers interviennent
              rapidement pour réparer vos installations, éviter les dégâts
              d’eau et garantir votre confort quotidien.
            </p>
          </div>

          <div className="text-center space-y-5">
            <Image
              src="/page-plomberie/detection-fuites-eau-valence-rs-presta.webp"
              alt="Technicien détectant une fuite d’eau avec appareil professionnel à Valence"
              width={500}
              height={500}
              className="w-full h-48 object-cover rounded-lg"
              loading="lazy"
            />
            <h3 className="text-2xl font-bold">Détection de fuites avancée</h3>
            <p>
              Grâce à des outils modernes (caméra thermique, gaz traceur),
              nous localisons les fuites sans destruction et préservons
              l’intégrité de vos installations.
            </p>
          </div>
        </div>
      </section>

      {/* Section services */}
      <section className="container mx-auto my-16 px-6 lg:px-0">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold">
            Nos services de plomberie à Valence
          </h2>
          <p className="mt-3 text-gray-700 max-w-3xl mx-auto">
            RS PRESTA prend en charge tous vos besoins : débouchage de
            canalisations, installation sanitaire, entretien et réparation
            complète de vos équipements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="text-center space-y-5">
            <Image
              src="/page-plomberie/debouchage-canalisations-valence-rs-presta.webp"
              alt="Débouchage de canalisations à Valence par RS PRESTA"
              width={500}
              height={500}
              className="w-full h-48 object-cover rounded-lg"
              loading="lazy"
            />
            <h3 className="text-2xl font-bold">
              Débouchage de canalisations
            </h3>
            <p>
              Nos équipements haute pression permettent de déboucher vos
              canalisations efficacement tout en évitant tout dégât à vos
              installations.
            </p>
          </div>

          <div className="text-center space-y-5">
            <Image
              src="/page-plomberie/pose-equipements-sanitaires-valence-rs-presta.webp"
              alt="Pose de lavabo et douche par RS PRESTA à Valence"
              width={500}
              height={500}
              className="w-full h-48 object-cover rounded-lg"
              loading="lazy"
            />
            <h3 className="text-2xl font-bold">
              Pose d’équipements sanitaires
            </h3>
            <p>
              Installation de douches, lavabos, baignoires et WC, avec des
              matériaux durables et esthétiques pour un rendu fonctionnel et
              harmonieux.
            </p>
          </div>
        </div>
      </section>

      <HeatingSolutions />
      <Footer />
    </>
  );
}