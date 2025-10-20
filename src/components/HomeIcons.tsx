import Image from "next/image";

export default function HomeIcons() {
  const features = [
    {
      title: "Installation de chauffage",
      image: "/home/icons/depannage-plomberie-rs-presta-valence.webp",
      description:
        "Pose et remplacement de pompes à chaleur (PAC) et de chaudières gaz à condensation, fuel ou gaz.",
      keywords: "installation chauffage, pompe à chaleur, chaudière gaz",
    },
    {
      title: "Climatisation performante",
      image: "/home/icons/installation-chauffage-rs-presta-valence.webp",
      description:
        "Installation et maintenance de climatisations réversibles pour un confort thermique optimal toute l'année.",
      keywords: "climatisation, clim réversible, confort thermique",
    },
    {
      title: "Travaux de plomberie",
      image: "/home/icons/installation-salle-de-bain-rs-presta-valence.webp",
      description:
        "Création et rénovation de salles de bains, cuisines, robinetterie, douches et baignoires.",
      keywords: "plomberie, salle de bain, robinetterie",
    },
    {
      title: "Dépannage et réparation",
      image: "/home/icons/robinet-plomberie-rs-presta-valence.webp",
      description:
        "Intervention rapide pour réparer vos pompes à chaleur, chaudières ou chauffe-eaux thermodynamiques.",
      keywords: "dépannage chaudière, réparation pompe à chaleur",
    },
  ];

  return (
    <section
      className="text-left py-16 px-6"
      itemScope
      itemType="https://schema.org/Service"
    >
      <meta itemProp="provider" content="RS Presta" />
      <h2 className="sr-only">
        Nos services de plomberie, chauffage et climatisation
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <article
            key={index}
            className="flex flex-col items-start space-y-2"
            itemScope
            itemType="https://schema.org/Service"
          >
            <div className="w-16 h-16">
              <Image
                src={feature.image}
                alt={`${feature.title} - ${feature.description}`}
                width={150}
                height={150}
                className="object-cover mb-2"
                priority={index === 0}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-bold" itemProp="name">
                {feature.title}
              </h3>
              <p className="text-gray-400" itemProp="description">
                {feature.description}
              </p>
              <meta itemProp="serviceType" content={feature.keywords} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
