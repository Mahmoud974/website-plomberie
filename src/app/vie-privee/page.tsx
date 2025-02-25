import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Image from "next/image";
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Menu />
      <div className="relative w-full h-[350px]">
        <Image
          src="/page-mentions-legales/privacy.webp"
          alt="Politique de Confidentialité"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl font-bold">Vie privée</h1>
          <div className="bg-yellow-500 h-1 w-24 mt-3"></div>
        </div>
      </div>

      <div className="container mx-auto mt-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Protection de la vie privée
        </h2>
        <div className="  p-6 rounded-lg   max-w-1xl mx-auto space-y-4">
          <p>
            <strong>Dernière mise à jour :</strong> 27/10/2023
          </p>
          <p>
            {`La protection de la vie privée de l'entreprise SVB PRESTA, chauffage
            à Valence.`}
          </p>
          <p>
            <strong>Hébergement :</strong> Ce site est hébergé par Amazon Web
            Services, dans un centre de données européen situé à Francfort en
            Allemagne.
          </p>
          <h3 className="text-2xl font-semibold mt-4">
            1. Identité du responsable du traitement
          </h3>
          <p>
            Les données personnelles sont collectées par l’Annonceur du site tel
            qu’identifié dans les mentions légales.
          </p>
          <h3 className="text-2xl font-semibold mt-4">
            2. Les traitements relatifs à vos données personnelles
          </h3>
          <p>
            {` Notre site ne demande pas d'enregistrement nominatif à ses visiteurs
            et ne procède à aucun enregistrement nominatif pour la simple
            consultation de ses pages.`}
          </p>
          <p>
            Cependant, dans certains cas (formulaire de contact, fonctionnalités
            de partage et modules sociaux, création de compte, paiement en
            ligne...), vous pouvez être invité à laisser des données
            personnelles.
          </p>
          <p>Nous ne collectons aucune donnée sensible.</p>
          <p>
            Lors de la consultation de notre site web et de l’utilisation de nos
            services, nous pouvons collecter des données de navigation et de
            votre terminal.
          </p>
          <p>
            Avec votre consentement, nous réalisons également une
            géolocalisation approximative de votre ville d’origine à partir de
            votre adresse IP.
          </p>
          <h3 className="text-2xl font-semibold mt-4">
            Finalités et base légale du traitement
          </h3>
          <ul className="list-disc pl-6">
            <li>{`Permettre l'utilisation de nos services`}</li>
            <li>Répondre à vos demandes</li>
            <li>Établir des statistiques anonymes</li>
            <li>Assurer la sécurité du site</li>
          </ul>
          <h3 className="text-2xl font-semibold mt-4">Cookies</h3>
          <p>
            Pour en savoir plus sur les cookies et vos droits, vous pouvez
            consulter notre page dédiée.
          </p>
          <h3 className="text-2xl font-semibold mt-4">Durée de conservation</h3>
          <p>
            Les données sont conservées pendant la durée strictement nécessaire
            aux finalités du traitement et en accord avec la réglementation en
            vigueur.
          </p>
          <h3 className="text-2xl font-semibold mt-4">
            3. Quels sont vos droits ?
          </h3>
          <p>
            Vous disposez de droits d’accès, de rectification, d’effacement,
            d’opposition et de limitation du traitement de vos données.
          </p>
          <p>
            Vous pouvez exercer ces droits auprès de l’Annonceur via les
            coordonnées indiquées dans les mentions légales.
          </p>
          <p>
            En cas de réclamation, vous pouvez également contacter l’autorité de
            contrôle compétente.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
