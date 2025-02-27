import Image from "next/image";
import React from "react";

interface BannerProps {
  name: string;
  alt: string;
  text: string;
  title: string;
}

const Banner: React.FC<BannerProps> = ({ name, alt, text, title }) => {
  return (
    <div className="relative w-full h-[400px]">
      <Image src={name} alt={alt} fill className="w-full h-full object-cover" />
      <div className="absolute inset-0 pt-12 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-4xl font-extrabold">{title}</h1>{" "}
        <div className="bg-yellow-500 h-1 w-24 mt-2"></div>
        <p className="text-white text-lg max-w-xl mt-4">{text}</p>
      </div>
    </div>
  );
};

export default Banner;
