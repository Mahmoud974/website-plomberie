import { FaMousePointer, FaRocket, FaChartLine, FaUsers } from "react-icons/fa";

export default function HomeIcons() {
  const features = [
    {
      title: "Concevoir et construire",
      icon: <FaMousePointer className="text-yellow-500 text-3xl" />,
      description:
        "Prenez le contrôle du HTML, CSS et JavaScript grâce à une interface visuelle intuitive, tout en bénéficiant de blocs de construction prêts à l'emploi.",
    },
    {
      title: "Publier et éditer",
      icon: <FaRocket className="text-yellow-500 text-3xl" />,
      description:
        "Ajoutez, modifiez et mettez à jour votre contenu en toute simplicité avec notre CMS, visuellement ou via nos API headless.",
    },
    {
      title: "Analyser et optimiser",
      icon: <FaChartLine className="text-yellow-500 text-3xl" />,
      description:
        "Transformez votre site en un puissant levier marketing avec des outils natifs d’optimisation SEO, de personnalisation IA et d'A/B testing.",
    },
    {
      title: "Évoluer et collaborer",
      icon: <FaUsers className="text-yellow-500 text-3xl" />,
      description:
        "Déployez et sécurisez votre site avec des outils d’hébergement performants et connectez-vous facilement à votre stack technologique.",
    },
  ];

  return (
    <div className=" text-left   py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
        {features.map((feature, index) => (
          <div key={index} className="space-y-4">
            <div>{feature.icon}</div>
            <h3 className="text-lg font-bold">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
