"use client";
import Banner from "@/components/Banner";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import HeatingSolutions from "@/components/HeatingSolutions";
import Menu from "@/components/Menu";
import React, { useState } from "react";

export default function ContactPage() {
  // État pour gérer l'envoi du formulaire
  const [submitted, setSubmitted] = useState(false);
  // Référence aux champs du formulaire
  const formRef = React.useRef<HTMLFormElement | null>(null);

  // Fonction de gestion de soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simuler l'envoi du formulaire
    setSubmitted(true);
    // Réinitialiser l'état après 3 secondes (pour simuler un délai de soumission)
    setTimeout(() => {
      setSubmitted(false);
      // Réinitialiser les champs du formulaire
      if (formRef.current) {
        formRef.current.reset();
      }
    }, 3000);
  };

  return (
    <>
      <Menu />

      {/* Bannière */}
      <div>
        <Banner
          name="/contact.jpg"
          alt="Image d'une cliente au téléphone"
          title="Nous contacter"
          text="Besoin d'un devis ou d'informations ? Remplissez notre formulaire et nous vous répondrons rapidement !"
        />

        {/* Formulaire de contact */}
        <div className="max-w-4xl mx-auto mt-10 p-8 bg-gray-100 shadow-lg rounded-lg">
          {!submitted ? (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
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
          ) : (
            // Message de confirmation après envoi
            <div className="max-w-4xl mx-auto mt-6 p-4 bg-green-500 text-white text-center rounded-lg">
              <span className="mr-2">✔️</span> Votre message a été envoyé avec
              succès !
            </div>
          )}
        </div>
        <Certifications />

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
        <HeatingSolutions />
      </div>
      <Footer />
    </>
  );
}
