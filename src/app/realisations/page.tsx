"use client";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Certifications from "../../components/Certifications";
import HeatingSolutions from "@/components/HeatingSolutions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Banner from "@/components/Banner";

const portfolioImages: { src: string; alt: string; title: string }[] = [
  {
    src: "/page-realisation/portfolios/installation-chaudiere-viessmann-valence-rs-presta.webp",
    alt: "Installation d’une chaudière Viessmann à condensation à Valence par RS PRESTA, plombier chauffagiste expert.",
    title: "Installation chaudière Viessmann à Valence",
  },
  {
    src: "/page-realisation/portfolios/pose-climatisation-toshiba-valence-rs-presta.webp",
    alt: "Pose d’un climatiseur mural Toshiba Inverter à Valence réalisée par RS PRESTA pour un confort optimal été comme hiver.",
    title: "Pose de climatisation Toshiba à Valence",
  },
  {
    src: "/page-realisation/portfolios/installation-chauffage-ballon-eau-chaude-romans-rs-presta.webp",
    alt: "Installation complète d’un système de chauffage Viessmann avec ballon d’eau chaude à Romans-sur-Isère par RS PRESTA.",
    title: "Installation chauffage et ballon Viessmann à Romans",
  },
  {
    src: "/page-realisation/portfolios/renovation-salle-de-bain-valence-rs-presta.webp",
    alt: "Rénovation d’une salle de bain moderne avec meuble suspendu et vasque, réalisée par RS PRESTA à Valence.",
    title: "Salle de bain moderne à Valence",
  },
  {
    src: "/page-realisation/portfolios/installation-ballon-chaudiere-gaz-drome-rs-presta.webp",
    alt: "Installation d’un ballon d’eau chaude et d’une chaudière gaz à condensation par RS PRESTA dans la Drôme.",
    title: "Installation ballon et chaudière gaz - Drôme",
  },
];

export default function Page() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      } else if (event.key === "ArrowRight" && selectedIndex !== null) {
        setSelectedIndex((prev) =>
          prev !== null ? (prev + 1) % portfolioImages.length : 0
        );
      } else if (event.key === "ArrowLeft" && selectedIndex !== null) {
        setSelectedIndex((prev) =>
          prev !== null
            ? (prev - 1 + portfolioImages.length) % portfolioImages.length
            : portfolioImages.length - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <>
      <Menu />

      <Banner
        name="/page-realisation/plombier.webp"
        alt="RS PRESTA, plombier chauffagiste à Valence, spécialiste en installation, entretien et dépannage."
        title="Nos réalisations"
        text="Découvrez nos réalisations de chauffage, climatisation et rénovation à Valence et dans la Drôme. RS PRESTA met son expertise au service de votre confort au quotidien."
      />

      <section className="py-12 px-4 md:px-12">
        <div className="space-y-4 mb-4 text-center">
          <div className="flex items-center justify-center">
            <div className="bg-yellow-500 h-[0.15rem] w-20 mr-3"></div>
            <p className="text-yellow-500 font-bold uppercase">
              GALERIES PHOTOS
            </p>
            <div className="bg-yellow-500 h-[0.15rem] w-20 ml-3"></div>
          </div>
          <h2 className="text-3xl font-extrabold mt-6 max-w-xl mx-auto text-center">
            Nos installations et rénovations à Valence et dans la Drôme
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Spécialistes du chauffage, de la plomberie et de la climatisation,
            nous réalisons des installations durables et performantes dans toute
            la région de Valence. Découvrez nos dernières réalisations.
          </p>
        </div>

        {/* GALERIE */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioImages.map((img, index) => (
              <div
                key={index}
                className="relative w-full h-64 md:h-80 cursor-pointer group"
                onClick={() => setSelectedIndex(index)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  title={img.title}
                  loading="lazy"
                  fill
                  className="rounded-lg shadow-lg object-cover group-hover:opacity-90 transition"
                />
                <div className="absolute bottom-0 bg-black bg-opacity-50 text-white w-full text-center py-2 text-sm font-medium rounded-b-lg">
                  {img.title}
                </div>
              </div>
            ))}
          </div>

          <Link href="/contact">
            <Button className="mx-auto flex justify-center mt-10 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
              Demandez un devis gratuit
            </Button>
          </Link>
        </div>
      </section>

   
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75   flex items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={portfolioImages[selectedIndex].src}
              alt={portfolioImages[selectedIndex].alt}
              title={portfolioImages[selectedIndex].title}
              width={900}
              height={700}
              className="rounded-lg shadow-lg object-contain"
            />

        
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 p-3 rounded-full transition shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(
                  (prev) =>
                    (prev! - 1 + portfolioImages.length) %
                    portfolioImages.length
                );
              }}
            >
              <ChevronLeft className="text-white w-8 h-8" />
            </button>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 p-3 rounded-full transition shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(
                  (prev) => (prev! + 1) % portfolioImages.length
                );
              }}
            >
              <ChevronRight className="text-white w-8 h-8" />
            </button>

            <button
              className="absolute top-4 right-4 bg-white bg-opacity-30 hover:bg-opacity-50 p-3 rounded-full transition shadow-lg"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="text-white w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      <Certifications />
      <HeatingSolutions />
      <Footer />
    </>
  );
}