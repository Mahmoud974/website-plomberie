import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Image from "next/image";
import React from "react";

export default function ContactPage() {
  return (
    <>
      <Menu />

      {/* Bannière */}
      <div className="">
        <div className="relative w-full h-[400px]">
          <Image
            src="/contact.jpg"
            alt="Contact Eco Thermes"
            fill
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-4xl font-bold">Nous Contacter</h1>
            <div className="bg-yellow-500 h-1 w-24 mt-2"></div>
            <p className="text-white text-lg max-w-xl mt-4">
              {`Besoin d'un devis ou d'informations ? Remplissez notre formulaire
              et nous vous répondrons rapidement !`}
            </p>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="max-w-4xl mx-auto mt-10 p-8 bg-gray-100 shadow-lg rounded-lg">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nom */}
            <div className="col-span-1">
              <label className="block font-medium">Nom *</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Votre nom"
                required
              />
            </div>

            {/* Téléphone */}
            <div className="col-span-1">
              <label className="block font-medium">Téléphone *</label>
              <input
                type="tel"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Votre téléphone"
                required
              />
            </div>

            {/* Email */}
            <div className="col-span-2">
              <label className="block font-medium">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Votre email"
              />
            </div>

            {/* Type de service */}
            <div className="col-span-1">
              <label className="block font-medium">Type de service</label>
              <div className="flex flex-col space-y-2">
                <label>
                  <input type="checkbox" className="mr-2" /> Installation
                </label>
                <label>
                  <input type="checkbox" className="mr-2" /> Entretien
                </label>
                <label>
                  <input type="checkbox" className="mr-2" /> Dépannage
                </label>
              </div>
            </div>

            {/* Type de produit */}
            <div className="col-span-1">
              <label className="block font-medium">Type de produit</label>
              <div className="flex flex-col space-y-2">
                <label>
                  <input type="checkbox" className="mr-2" /> Chauffage
                </label>
                <label>
                  <input type="checkbox" className="mr-2" /> Climatisation
                </label>
                <label>
                  <input type="checkbox" className="mr-2" /> Pompe à chaleur
                </label>
                <label>
                  <input type="checkbox" className="mr-2" /> Plomberie
                </label>
                <label>
                  <input type="checkbox" className="mr-2" /> VMC
                </label>
                <label>
                  <input type="checkbox" className="mr-2" /> Puits canadien
                </label>
              </div>
            </div>

            {/* Adresse */}
            <div className="col-span-2">
              <label className="block font-medium">Adresse *</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Rue, ville, code postal"
                required
              />
            </div>

            {/* Date du projet */}
            <div className="col-span-1">
              <label className="block font-medium">Date du projet</label>
              <input
                type="date"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Disponibilités */}
            <div className="col-span-1">
              <label className="block font-medium">Vos disponibilités</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Indiquez vos créneaux"
              />
            </div>

            {/* Message */}
            <div className="col-span-2">
              <label className="block font-medium">Message</label>
              <textarea
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                rows={4}
                placeholder="Votre message..."
              ></textarea>
            </div>

            {/* Politique de confidentialité */}
            <div className="col-span-2 flex items-center">
              <input type="checkbox" className="mr-2" required />
              <span>{`J'accepte les conditions particulières du site.`}</span>
            </div>

            {/* Bouton Envoyer */}
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white font-bold py-2 rounded-md hover:bg-yellow-600 transition"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>

        {/* Coordonnées */}
        <div className="max-w-4xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg text-center">
          <h3 className="text-xl font-bold mb-4">Coordonnées</h3>
          <p>
            <strong>Adresse :</strong> 1 Rue Claude Bernard, 26100
            Romans-sur-Isère, France
          </p>
          <p>
            <strong>Téléphone :</strong> Appelez-nous
          </p>
          <p>
            <strong>Email :</strong> Envoyez-nous un e-mail
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
