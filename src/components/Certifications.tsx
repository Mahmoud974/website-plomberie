import Image from "next/image";
import React from "react";

export default function Certifications() {
  return (
    <div className="bg-slate-50 ">
      <div className="container mx-auto  h-auto my-12 py-5">
        <h3 className="text-center  text-2xl font-bold">
          Nos partenaires et certifications
        </h3>
        <div className="flex items-center lg:flex-row flex-col gap-10 my-6 justify-between mx-44">
          <Image
            src="/certifs/rge.webp"
            alt="Installation Plomberie"
            width={500}
            height={500}
            className="w-44 h-full object-cover rounded-lg"
          />
          <Image
            src="/certifs/frisquet.webp"
            alt="Installation Plomberie"
            width={800}
            height={800}
            className="w-36 h-full object-cover rounded-lg"
          />
          <Image
            src="/certifs/qualibat.webp"
            alt="Installation Plomberie"
            width={800}
            height={800}
            className="w-20 h-full object-cover rounded-lg"
          />
          <Image
            src="/certifs/gaz.webp"
            alt="Installation Plomberie"
            width={800}
            height={800}
            className="w-20 h-full object-cover rounded-lg"
          />
          <Image
            src="/certifs/viessmann.webp"
            alt="Installation Plomberie"
            width={800}
            height={800}
            className="w-40 h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
