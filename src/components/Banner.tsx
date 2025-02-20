import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="relative w-full h-[600px] pt-[100px]">
      <Image
        src="/plomb-1.jpg"
        fill
        className="object-cover"
        alt="Bannière d'accueil"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl font-bold">Bienvenue sur notre site !</h1>
        <p className="text-lg mt-2">
          Explorez nos services et suivez vos commandes facilement.
        </p>
      </div>
    </div>
  );
}
