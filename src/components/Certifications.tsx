import Image from "next/image";
import React from "react";

export default function Certifications() {
  const certifications = [
    {
      src: "/certifs/certification-rge-qualipac-2025-svb-presta-valence.webp",
      alt: "Certification RGE QualiPAC 2025 obtenue par SVB PRESTA, installateur de pompes à chaleur à Valence",
      width: 180,
    },
    {
      src: "/certifs/partenaire-frisquet-installateur-chaudiere-valence-svb-presta.webp",
      alt: "Partenaire Frisquet – Installation de chaudières par SVB PRESTA à Valence",
      width: 160,
    },
    {
      src: "/certifs/certification-rge-qualibat-svb-presta-valence.webp",
      alt: "Certification RGE Qualibat – SVB PRESTA à Valence, entreprise qualifiée en rénovation énergétique",
      width: 100,
    },
    {
      src: "/certifs/professionnel-du-gaz-agree-installateur-svb-presta-valence.webp",
      alt: "Label Professionnel du Gaz – Installateur agréé SVB PRESTA à Valence",
      width: 100,
    },
    {
      src: "/certifs/partenaire-viessmann-installateur-chaudiere-svb-presta-valence.webp",
      alt: "Partenaire Viessmann – Installation de chaudières et pompes à chaleur par SVB PRESTA à Valence",
      width: 200,
    },
  ];

  return (
    <section className="bg-slate-50">
      <div className="container mx-auto h-auto my-12 py-5">
        <h3 className="text-center text-2xl font-bold">
          Nos partenaires et certifications
        </h3>
        <div className="flex items-center lg:flex-row flex-col gap-10 my-6 justify-between mx-10 lg:mx-44">
          {certifications.map((cert, index) => (
            <Image
              key={index}
              src={cert.src}
              alt={cert.alt}
              width={cert.width}
              height={cert.width}
              className="object-contain rounded-lg"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}