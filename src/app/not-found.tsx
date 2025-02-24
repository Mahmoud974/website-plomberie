import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-[#0A2A3D] text-gray-800 gap-4">
      <div className="text-center">
        <div>
          <Image
            src="/404.png"
            alt="Page non trouvée"
            className="w-2/3 h-auto mx-auto"
            width={700}
            height={700}
          />
        </div>
        <p className="text-xl text-yellow-500 mt-4">Page non trouvée</p>
        <Link
          href="/"
          className="mt-4 inline-block bg-yellow-500 text-[#0A2A3D] px-6 py-2   shadow hover:bg-[#020a0e] transition"
        >
          {`Retour à l'accueil`}
        </Link>
      </div>
    </div>
  );
}
