import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">

      {/* Hero Image */}
      <Image
        src="/images/hero/hero.jpeg"
        alt="Sabin Uralikandy"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent"></div>

      {/* Hero Content */}
      <div className="absolute bottom-24 left-10 md:left-16 text-white">

        <h1 className="text-2xl md:text-4xl font-extralight tracking-[0.45em] uppercase">
          SABIN URALIKANDY
        </h1>

        <p className="mt-3 mb-8 text-sm uppercase tracking-[0.35em] text-gray-300">
          Director of Photography
        </p>

        <button className="border border-white px-8 py-4 text-xs uppercase tracking-[0.35em] transition duration-300 hover:bg-white hover:text-black">
          WATCH SHOWREEL →
        </button>

      </div>

    </section>
  );
}