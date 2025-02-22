import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Marc Dupont",
    username: "@marc.dupont",
    body: "Service de plomberie exceptionnel ! Intervention rapide et travail soigné. Merci encore.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophie Lambert",
    username: "@sophie.lambert",
    body: "Très satisfaite du remplacement de ma chaudière. Travail efficace et professionnel.",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Julien Moreau",
    username: "@julien.moreau",
    body: "Un vrai expert ! Dépannage en urgence pour une fuite, intervention rapide et impeccable.",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Nathalie Roux",
    username: "@nathalie.roux",
    body: "Installation de ma salle de bain parfaite ! Très bons conseils et finitions impeccables.",
    img: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    name: "Laurent Girard",
    username: "@laurent.girard",
    body: "Entretien annuel de ma chaudière effectué avec sérieux. Entreprise de confiance.",
    img: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    name: "Émilie Caron",
    username: "@emilie.caron",
    body: "Un artisan compétent et ponctuel ! Débouchage rapide de mes canalisations.",
    img: "https://randomuser.me/api/portraits/women/38.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64  cursor-pointer overflow-hidden rounded-xl border p-4 shadow-lg",
        "border-gray-300 bg-white hover:bg-gray-100",
        "dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      )}
    >
      <div className="flex max-w-3xl flex-row items-center gap-3">
        <Image
          width={100}
          height={100}
          className="rounded-full w-12 h-12 object-cover"
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-gray-900 dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs text-gray-600 dark:text-gray-400">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm text-gray-700 dark:text-gray-300">
        "{body}"
      </blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative mt-12 flex w-full flex-col items-center justify-center overflow-hidden   dark:bg-gray-900 py-12">
      <div className="space-y-4 mb-4 text-center">
        <div className="flex items-center justify-center">
          <div className="bg-yellow-500 h-[0.15rem] w-20 mr-3"></div>
          <p className="text-yellow-500 font-bold uppercase">
            TÉMOIGNAGES CLIENTS
          </p>
          <div className="bg-yellow-500 h-[0.15rem] w-20 ml-3"></div>
        </div>
        <h2 className="text-3xl font-extrabold mt-6 max-w-xl mx-auto text-center">
          Des clients plus que satisfait
        </h2>
      </div>

      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Dégradé pour effet visuel */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-gray-50 dark:from-gray-900"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-gray-50 dark:from-gray-900"></div>
    </div>
  );
}
