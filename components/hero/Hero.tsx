import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Hero Image */}
      <Image
        src="/images/hero/hero.jpeg"
        alt="Sabin Uralikandy"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-14 left-6 right-6 md:bottom-24 md:left-16 md:right-auto text-white">

        <h1 className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          font-extralight
          uppercase
          tracking-[0.25em]
          leading-tight
        ">
          SABIN URALIKANDY
        </h1>

        <p className="
          mt-4
          text-xs
          md:text-sm
          uppercase
          tracking-[0.35em]
          text-zinc-300
        ">
          Director of Photography
        </p>

        <button
          className="
            mt-8
            border
            border-white
            px-8
            py-4
            text-xs
            uppercase
            tracking-[0.35em]
            transition
            duration-300
            hover:bg-white
            hover:text-black
          "
        >
          WATCH SHOWREEL →
        </button>

      </div>

    </section>
  );
}