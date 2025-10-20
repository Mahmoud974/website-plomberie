"use client";
import Banner from "@/components/Banner";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import HeatingSolutions from "@/components/HeatingSolutions";
import Menu from "@/components/Menu";
import React, { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      formRef.current?.reset();
    }, 3000);
  };

  return (
    <>
      <Menu />

      <Banner
        name="/page-contact/contact-plombier-chauffage-valence-rs-presta.webp"
        alt="Téléphone de contact de RS PRESTA, plombier chauffagiste à Valence, pour devis et dépannage rapide"
        title="Contactez RS PRESTA à Valence"
        text="Besoin d’un devis, d’un dépannage ou d’informations sur nos services ? Contactez RS PRESTA, entreprise de plomberie et de chauffage à Valence. Notre équipe réactive vous répond rapidement pour toutes vos demandes dans la Drôme."
      />

      
      <section className="  py-16 px-6">
        <div className="max-w-3xl mx-auto  overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
              Envoyez-nous un message
            </h2>
            <p className="text-gray-600 text-center mb-10">
              Nous vous répondrons sous 24 heures. Vous pouvez aussi nous appeler pour un dépannage rapide.
            </p>

            {!submitted ? (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
               
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-semibold text-gray-700 mb-2">
                      Nom <span className="text-yellow-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Votre nom complet"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-gray-700 mb-2">
                      Téléphone <span className="text-yellow-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Votre numéro"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Votre adresse e-mail (facultatif)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                  />
                </div>

                {/* Type de demande */}
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Type de demande
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Sélectionnez un service
                    </option>
                    <option>Installation</option>
                    <option>Entretien</option>
                    <option>Dépannage</option>
                    <option>Devis général</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Décrivez votre besoin..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                  ></textarea>
                </div>

                {/* RGPD */}
                <div className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    required
                    className="mr-2 accent-yellow-500"
                  />
                  <span className="text-gray-700">
                    J’accepte la{" "}
                    <a
                      href="/mentions-legales"
                      className="text-yellow-600 underline hover:text-yellow-700"
                    >
                      politique de confidentialité
                    </a>
                    .
                  </span>
                </div>

                {/* Bouton */}
                <button
                  type="submit"
                  className="w-full py-3 bg-yellow-500 text-white font-bold rounded-xl hover:bg-yellow-600 transform hover:scale-[1.02] transition"
                >
                  Envoyer le message
                </button>
              </form>
            ) : (
              <div className="text-center bg-green-500 text-white py-6 px-4 rounded-xl font-semibold text-lg shadow-md animate-fadeIn">
                ✅ Merci ! Votre message a bien été envoyé.
              </div>
            )}
          </div>
        </div>
      </section>

      

      <Certifications />
      <HeatingSolutions />
      <Footer />
    </>
  );
}