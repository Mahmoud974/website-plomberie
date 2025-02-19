import Image from "next/image";
import React from "react";

export default function Certifications() {
  return (
    <div className="bg-slate-800">
      <div className="container mx-auto  h-auto my-12 py-5">
        <h3 className="text-center text-2xl font-bold text-white ">
          Nos partenaires et certifications
        </h3>
        <Image
          src="/certifs/rge.png"
          alt="Installation Plomberie"
          width={500}
          height={500}
          className="w-44 h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
