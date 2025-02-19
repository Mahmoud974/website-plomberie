import Image from "next/image";
import React from "react";
import { Facebook, Instagram, Twitter, Phone } from "lucide-react";
import { MiniMenu } from "./MiniMenu";
import Link from "next/link";

export default function Menu() {
  return (
    <nav className="relative">
      {/* Menu en haut, position absolue */}
      <div className="absolute top-0 left-0 w-full z-10">
        <div className="bg-[#FFCC2B] h-10 flex items-center justify-between text-black text-sm font-medium px-4">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-800 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-gray-800 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-800 transition">
              <Twitter size={20} />
            </a>
          </div>

          {/* Numéro de téléphone et adresse */}
          <div className="flex">
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span className="font-bold -ml-1">+33 6 12 34 56 78</span>
            </div>
            <span className="mx-3 font-bold">|</span>
            <p>26000 Valence</p>
          </div>
        </div>

        {/* Logo et MiniMenu */}
        <div className="text-white  flex items-center justify-between px-4 py-3">
          <Link href="/">
            <Image
              src="/logo.png"
              width={500}
              height={500}
              alt="Logo"
              className="w-40"
            />
          </Link>
          <MiniMenu />
        </div>
      </div>
    </nav>
  );
}
