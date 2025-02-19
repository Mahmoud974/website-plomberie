import React from "react";

export default function Informations() {
  return (
    <section className=" gap-5 my-6 flex mx-auto justify-center">
      <div className="bg-yellow-400 text-blue-900 py-12 h-auto w-auto px-12 max-w-lg">
        <ul className="flex gap-3 mb-6">
          <li className="flex items-center">
            <p className="text-6xl font-bold">1235</p>
            <p className="text-xs">
              project
              <br /> coopered
            </p>
          </li>
          <li className="flex items-center">
            <p className="text-6xl font-bold">96</p>
            <p className="text-xs">
              project
              <br /> coopered
            </p>
          </li>
          <li className="flex items-center">
            <p className="text-6xl font-bold">65</p>
            <p className="text-xs">
              project
              <br /> coopered
            </p>
          </li>
        </ul>
        <p className="">
          La société L. Junique, à Valence (26), est spécialisée dans
          l’installation de chauffages et climatisations. Depuis 1999, je vous
          aide du devis à la réalisation de vos travaux, seul ou avec de l’aide
          si besoin. Je pose des chaudières, des pompes à chaleur, des
          climatisations, et je fais de la plomberie. Je propose aussi des
          chauffe-eaux thermodynamiques et des solutions en Énergies
          Renouvelables. Je suis agréé Professionnel Gaz, Qualipac, RGE, Éco
          Artisan et Qualibat. Je parle anglais et peux répondre à vos
          questions. Pour en savoir plus, consultez la page À propos.
        </p>
      </div>
      <div className="bg-slate-200 text-blue-900 py-12 h-auto w-auto px-12 max-w-sm">
        <p>NEWS & MEDIA</p>
      </div>
      <div className="bg-slate-200 text-blue-900 py-12 h-auto w-auto px-12 max-w-sm">
        <p>NEWS & MEDIA</p>
      </div>
    </section>
  );
}
