import Image from "next/image";
import { films } from "@/data/films";

export default function WorkSection() {
  return (
    <section
      id="work"
      className="bg-[#111] text-white py-24"
    >
      {/* Title */}
      <div className="px-8 md:px-12 mb-12">
        <h2 className="text-5xl md:text-6xl font-extralight tracking-[0.4em] uppercase">
          WORK
        </h2>
      </div>

      {/* Film Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-zinc-800">

        {films.map((film) => (

          <div
            key={film.id}
            className="group bg-[#111] cursor-pointer"
          >

            {/* Poster */}
            <div className="relative aspect-[2/3] overflow-hidden">

              <Image
                src={film.image}
                alt={film.title}
                fill
                sizes="(max-width:768px) 100vw,
                       (max-width:1024px) 50vw,
                       25vw"
               className="object-contain bg-black transition-transform duration-700 group-hover:scale-105"
              />

            </div>

            {/* Details */}

            <div className="px-6 py-7">

              <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">
                {film.year} · {film.language}
              </p>

              <h3 className="mt-4 text-2xl font-light leading-snug">
                {film.title}
              </h3>

              <p className="mt-4 text-sm tracking-[0.15em] uppercase text-zinc-500">
                {film.role}
              </p>

            </div>

          </div>

        ))}

      </div>
    </section>
  );
}