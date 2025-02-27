"use client";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react"; // Import des icônes
import Certifications from "../../components/Certifications";
import HeatingSolutions from "@/components/HeatingSolutions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Banner from "@/components/Banner";

const portfolioImages: string[] = [
  "/page-realisation/portfolios/portfolio-1.webp",
  "/page-realisation/portfolios/portfolio-2.webp",
  "/page-realisation/portfolios/portfolio-3.webp",
  "/page-realisation/portfolios/portfolio-4.webp",
  "/page-realisation/portfolios/portfolio-5.webp",
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
        alt="Image d'un plombier'"
        title="Réalisations"
        text="Nos experts en chauffage vous conseillent sur les solutions adaptées
            à vos besoins, que ce soit pour l'installation, l'entretien ou la
            réparation de vos équipements."
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
            Découvrez mes installations
          </h2>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioImages.map((src, index) => (
              <div
                key={index}
                className="relative w-full h-64 md:h-80 cursor-pointer"
                onClick={() => setSelectedIndex(index)}
              >
                <Image
                  src={src}
                  alt={`Installation ${index + 1}`}
                  fill
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            ))}
          </div>
          <Link href="/contact">
            <Button className="mx-auto flex justify-center mt-10">
              Contactez-nous
            </Button>
          </Link>
        </div>
      </section>
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={portfolioImages[selectedIndex]}
              alt="Aperçu"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
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

            {/* Bouton Fermer */}
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
