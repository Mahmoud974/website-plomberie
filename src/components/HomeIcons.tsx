import Image from "next/image";

export default function HomeIcons() {
  const features = [
    {
      title: "Installation de chauffage",
      image: "/home/icons/key.png",
      description:
        "Pose et remplacement de pompes à chaleur (PAC) et de chaudières gaz à condensation, fuel ou gaz.",
    },
    {
      title: "Climatisation performante",
      image: "/home/icons/clim.png",
      description:
        "Installation et maintenance de climatisations pour assurer un confort thermique optimal toute l'année.",
    },
    {
      title: "Travaux de plomberie",
      image: "/home/icons/piece.png",
      description:
        "Création et modification d’installations : salles de bains, WC, cuisines, robinetterie, douche, baignoire, etc.",
    },
    {
      title: "Dépannage et réparation",
      image: "/home/icons/check.png",
      description:
        "Intervention rapide pour réparer vos pompes à chaleur, chaudières, chauffe-eaux thermodynamiques.",
    },
  ];

  return (
    <div className="text-left py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-start space-y-2">
            <div className="w-16 h-16 ">
              <Image
                src={feature.image}
                alt={feature.title}
                width={150}
                height={150}
                className="object-cover mb-2"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
