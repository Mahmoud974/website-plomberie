import Image from "next/image";
import Link from "next/link";

export default function HeatingSolutions() {
  const solutions = [
    {
      title: "Pompe à chaleur",
      image: "/mini-menu/installation-pompe-a-chaleur-air-eau-valence-svb-presta.webp",
      link: "/pompes-a-chaleur",
      description:
        "Profitez de l’aérothermie pour chauffer efficacement votre intérieur grâce à une pompe à chaleur air/air ou air/eau. Une solution écologique et économique adaptée à votre logement à Valence et ses environs.",
      alt: "Installation de pompe à chaleur air/eau par SVB PRESTA à Valence",
    },
    {
      title: "Chauffage",
      image: "/mini-menu/systeme-de-chauffage-economique-valence-svb-presta.webp",
      link: "/chauffage",
      description:
        "Bénéficiez d’un chauffage performant et économique, qu’il soit au bois, au gaz ou à énergie renouvelable. SVB PRESTA installe des systèmes de chauffage efficaces à Valence pour un confort optimal.",
      alt: "Système de chauffage performant installé par SVB PRESTA à Valence",
    },
    {
      title: "Climatisation",
      image: "/mini-menu/climatisation-reversible-installation-valence-svb-presta.webp",
      link: "/climatisation",
      description:
        "Rafraîchissez et chauffez votre logement en toute saison avec une climatisation réversible installée par SVB PRESTA à Valence. Alliez confort, économies d’énergie et qualité d’air intérieur.",
      alt: "Climatisation réversible installée par SVB PRESTA à Valence",
    },
    {
      title: "Plomberie",
      image: "/mini-menu/travaux-plomberie-installation-salle-de-bain-valence-svb-presta.webp",
      link: "/plomberie",
      description:
        "De l’installation à la rénovation, confiez vos travaux de plomberie à SVB PRESTA à Valence. Bénéficiez d’une distribution d’eau fiable et d’un entretien complet pour vos équipements sanitaires.",
      alt: "Travaux de plomberie et installation de salle de bain par SVB PRESTA à Valence",
    },
  ];

  return (
    <div className="py-10 px-5">
      <div className="max-w-6xl cursor-pointer mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Link href={solution.link}>
              <Image
                src={solution.image}
                alt={solution.alt}
                width={500}
                height={500}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mt-2">{solution.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}