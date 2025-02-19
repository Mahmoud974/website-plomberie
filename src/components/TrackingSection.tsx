import Image from "next/image";

export default function TrackingSection() {
  return (
    <section className=" bg-green-950 -mt-12 relative max-w-7xl mx-auto py-10 px-6 md:px-20 flex flex-col md:flex-row gap-6  ">
      <div className="bg-[#0A2A3D] text-white p-6  w-full md:w-1/4">
        <h3 className="font-semibold text-lg mb-4">Suivi d’intervention</h3>
        <p className="text-gray-300 text-sm mb-3">
          Suivez l’état de votre intervention ou commande en entrant votre
          numéro.
        </p>
        <input
          type="text"
          placeholder="Numéro de suivi"
          className="w-full p-2 mb-3 bg-gray-800 text-white border border-gray-600 focus:border-yellow-500 outline-none"
        />
        <button className="w-full bg-yellow-400 text-blue-900 font-semibold py-2 hover:bg-yellow-600 transition">
          SUIVRE
        </button>
      </div>

      <div className="  flex-1 bg-re flex gap-4">
        <div className="bg-white shadow-lg  p-4 flex-1">
          <Image
            src="/plomb-2.jpg"
            alt="Installation Plomberie"
            width={300}
            height={200}
            className="w-full h-40 object-cover"
          />
          <h4 className="font-semibold mt-3">Installation Plomberie</h4>
          <p className="text-gray-600 text-sm">
            Nous installons et réparons vos équipements de plomberie avec un
            service rapide et fiable.
          </p>
        </div>

        <div className="bg-white shadow-lg  p-4 flex-1">
          <Image
            src="/plomb-1.jpg"
            alt="Climatisation & Chauffage"
            width={300}
            height={200}
            className="w-full h-40 object-cover "
          />
          <h4 className="font-semibold mt-3">Climatisation & Chauffage</h4>
          <p className="text-gray-600 text-sm">
            Installation et entretien de climatiseurs, pompes à chaleur et
            chaudières.
          </p>
        </div>
      </div>

      <div className="bg-yellow-500 text-black p-6  w-full md:w-1/4 flex flex-col justify-center items-center">
        <p className="font-semibold text-lg mb-2 ">
          Découvrez tous nos services
        </p>
        <div className="flex item-center ">
          <p className="text-6xl text-center mb-3">36</p>
          <p>solutions efficaces et adaptées à vos besoins.</p>
        </div>
        <Image src="/chauffage.jpg" alt="Nos services" width={80} height={80} />
      </div>
    </section>
  );
}
