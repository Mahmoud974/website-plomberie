import Image from "next/image";
import Link from "next/link";

export default function HeatingSolutions() {
  const solutions = [
    {
      title: "Pompe à chaleur",
      image: "/mini-menu/pompe-a-chaleur.jpg",
      link: "/pompes-a-chaleur",
      description:
        "Profitez de l’aérothermie pour chauffer efficacement votre intérieur en utilisant l’air, une énergie renouvelable. Que ce soit une pompe à chaleur air/air ou air/eau, trouvez la solution adaptée à votre logement.",
    },
    {
      title: "Chauffage",
      image: "/mini-menu/chauffage.jpg",
      link: "/chauffage",
      description:
        "Profitez d’un chauffage performant et économique, alliant confort et efficacité énergétique. Que vous optiez pour une solution au bois, au gaz ou aux énergies renouvelables, bénéficiez d’une chaleur douce et homogène tout en réduisant votre empreinte carbone.",
    },
    {
      title: "Climatisation",
      image: "/mini-menu/clim.webp",
      link: "/climatisation",
      description:
        "Optimisez votre confort en toute saison avec une climatisation performante et écoénergétique. Rafraîchissez votre intérieur en été et bénéficiez d’un air sain et agréable grâce aux dernières technologies adaptées à votre espace.",
    },
    {
      title: "Plomberie",
      image: "/mini-menu/plomberie.jpg",
      link: "/plomberie",
      description:
        "Assurez un réseau de plomberie fiable et performant pour votre confort au quotidien. De l’installation à l’entretien, nous vous accompagnons pour garantir une distribution efficace en eau et des équipements adaptés à vos besoins.",
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
                alt={"image de " + solution.title}
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
