import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <>
      <Menu />
      {/* Bannière */}
      <div className="relative w-full h-[400px] ">
        <Image
          src="/plomb-2.jpg"
          alt="Installation Plomberie"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl font-bold">Contactez-nous</h1>
          <div className="bg-yellow-500 h-1 w-24 mt-2"></div>
          <p className="text-white text-lg max-w-xl mt-4">
            Nos conseillers sont à votre écoute pour vous fournir un devis ou
            répondre à toutes vos questions concernant notre offre complète et
            nos solutions personnalisées.
          </p>
        </div>
      </div>

      {/* Formulaire de contact */}
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-100   shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">
          Envoyez-nous un message
        </h2>
        <form className="space-y-4">
          {/* Nom */}
          <div>
            <label className="block font-medium">Nom</label>
            <input
              type="text"
              className="w-full p-2 border  focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Votre nom"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 border  focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Votre email"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block font-medium">Message</label>
            <textarea
              className="w-full p-2 border  focus:outline-none focus:ring-2 focus:ring-yellow-500"
              rows={4}
              placeholder="Votre message..."
              required
            ></textarea>
          </div>

          {/* Bouton Envoyer */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-bold py-2  hover:bg-yellow-600 transition"
          >
            Envoyer
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
