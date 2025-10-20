"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Twitter, Phone } from "lucide-react";
import { MiniMenu } from "./MiniMenu";
import { MenuMobile } from "./MenuMobile";

export default function Menu() {
  return (
    <>
       
      <nav className="lg:hidden flex flex-col justify-between absolute top-0 left-0 w-full z-10">
     
        <div className="bg-[#FFCC2B] h-10 flex items-center justify-between text-black text-sm font-medium px-4">
          <div className="container flex items-center justify-between mx-auto">
      
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="hover:text-gray-800 transition">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-800 transition">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-800 transition">
                <Twitter size={20} />
              </a>
            </div>

     
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span className="font-bold -ml-1">+33 6 12 34 56 78</span>
            </div>
          </div>
        </div>
 
        <div className="flex justify-between items-center mt-2 px-3">
          <Link href="/">
            <Image
               src="/logo-svb-presta-plomberie-chauffage-climatisation-valence.webp"
              width={500}
              height={500}
               alt="Logo de SVB PRESTA, entreprise de plomberie, chauffage et climatisation à Valence"
              priority
              className="w-40"
            />
          </Link>
          <MenuMobile />
        </div>
      </nav>

      {/* ----- DESKTOP ----- */}
      <nav className="relative hidden lg:flex">
        <div className="absolute top-0 left-0 w-full z-10">
          {/* Bande jaune du haut */}
          <div className="bg-[#FFCC2B] h-10 flex items-center justify-between text-black text-sm font-medium px-4">
            <div className="container flex items-center justify-between mx-auto">
              {/* Réseaux sociaux */}
              <div className="flex items-center gap-4">
                <a href="#" aria-label="Facebook" className="hover:text-gray-800 transition">
                  <Facebook size={20} />
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-gray-800 transition">
                  <Instagram size={20} />
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-gray-800 transition">
                  <Twitter size={20} />
                </a>
              </div>

              {/* Téléphone + localisation */}
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <Phone size={20} />
                  <span className="font-bold -ml-1">+33 6 12 34 56 78</span>
                </div>
                <span className="mx-3 font-bold">|</span>
                <p>26000 Valence</p>
              </div>
            </div>
          </div>

      
          <div className="text-white flex items-center justify-between py-3">
            <div className="container flex items-center justify-between mx-auto">
              <Link href="/">
              <Image
  src="/logo-svb-presta-plomberie-chauffage-climatisation-valence.webp"
  width={500}
  height={500}
  alt="Logo de SVB PRESTA, entreprise de plomberie, chauffage et climatisation à Valence"
  className="w-56"
  priority
/>
              </Link>
              <MiniMenu />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}