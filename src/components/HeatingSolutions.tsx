import Image from "next/image";

export default function HeatingSolutions() {
  const solutions = [
    {
      title: "Pompe à chaleur",
      image: "/clim.jpg",
      description:
        "Profitez de l’aérothermie pour chauffer efficacement votre intérieur en utilisant l’air, une énergie renouvelable. Que ce soit une pompe à chaleur air/air ou air/eau, trouvez la solution adaptée à votre logement.",
    },
    {
      title: "Poêle à bois / granulés",
      image: "/poele.jpg",
      description:
        "Les poêles à bois et à granulés offrent une chaleur naturelle et un excellent rendement. Associez esthétisme et performance avec des modèles modernes, économiques et écologiques.",
    },
    {
      title: "Chaudière gaz",
      image: "/chaudiere.png",
      description:
        "Optez pour une chaudière gaz afin d’assurer un chauffage performant et un approvisionnement constant en eau chaude. Nous vous aidons à choisir l’équipement le mieux adapté à votre consommation.",
    },
    {
      title: "Énergie solaire",
      image: "/home.jpg",
      description:
        "Passez à l’énergie solaire pour réduire votre empreinte carbone ! De l’étude à l’installation, nous vous accompagnons pour maximiser l’efficacité de vos panneaux photovoltaïques.",
    },
  ];

  return (
    <div className=" py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <Image
              src={solution.image}
              alt={solution.title}
              width={500}
              height={500}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900">
                {solution.title}
              </h3>
              <p className="text-gray-600 mt-2">{solution.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
