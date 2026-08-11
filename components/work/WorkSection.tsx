"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { films } from "@/data/films";

export default function WorkSection() {
  const [transitioning, setTransitioning] = useState(false);
  const [transitionImage, setTransitionImage] = useState("");
  const [transitionRect, setTransitionRect] = useState<DOMRect | null>(null);

  const handleProjectClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    film: (typeof films)[number]
  ) => {
    event.preventDefault();

    const imageElement = event.currentTarget.querySelector(
      "[data-film-image]"
    ) as HTMLElement | null;

    if (!imageElement) {
      window.location.href = "/films/cu-soon";
      return;
    }

    const rect = imageElement.getBoundingClientRect();

    setTransitionRect(rect);
    setTransitionImage(film.image);
    setTransitioning(true);

    /*
     * Give the expansion animation time to complete
     * before navigating to the project page.
     */
    window.setTimeout(() => {
      window.location.href = "/films/cu-soon";
    }, 850);
  };

  return (
    <>
      <section
        id="work"
        className="bg-black text-white px-4 sm:px-6 md:px-8 lg:px-10 py-20 sm:py-24"
      >
        {/* Section Title */}
        <div className="mb-10 sm:mb-14 md:mb-16">
          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-extralight
              tracking-[0.28em]
              sm:tracking-[0.35em]
              md:tracking-[0.4em]
              uppercase
            "
          >
            WORK
          </h2>
        </div>

        {/* Film Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-x-3
            sm:gap-x-4
            lg:gap-x-5
            gap-y-14
            sm:gap-y-16
          "
        >
          {films.map((film) => {
            const isCUSoon = film.title === "C U Soon";

            const filmContent = (
              <article
                key={film.id}
                className="group min-w-0 cursor-pointer"
              >
                {/* Film Image */}
                <div
                  data-film-image
                  className="
                    relative
                    w-full
                    aspect-[3/4]
                    overflow-hidden
                    bg-zinc-900
                  "
                >
                  <Image
                    src={film.image}
                    alt={film.title}
                    fill
                    sizes="
                      (max-width: 639px) 100vw,
                      (max-width: 1023px) 50vw,
                      25vw
                    "
                    className="
                      object-cover
                      object-center
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.03]
                    "
                  />

                  {/* Image Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/0
                      group-hover:bg-black/35
                      transition-colors
                      duration-500
                    "
                  />

                  {/* View Project */}
                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                    "
                  >
                    <div
                      className="
                        border
                        border-white
                        px-6
                        py-3
                        text-[10px]
                        sm:text-xs
                        uppercase
                        tracking-[0.3em]
                      "
                    >
                      VIEW PROJECT →
                    </div>
                  </div>
                </div>

                {/* Film Information */}
                <div className="pt-5 sm:pt-6">

                  {/* Year + Language */}
                  <p
                    className="
                      text-[9px]
                      sm:text-[10px]
                      uppercase
                      tracking-[0.25em]
                      sm:tracking-[0.3em]
                      text-zinc-500
                    "
                  >
                    {film.year} · {film.language}
                  </p>

                  {/* Title */}
                  <h3
                    className="
                      mt-3
                      text-xl
                      sm:text-2xl
                      font-light
                      leading-tight
                      tracking-wide
                    "
                  >
                    {film.title}
                  </h3>

                  {/* Role */}
                  <p
                    className="
                      mt-2
                      text-[10px]
                      sm:text-xs
                      uppercase
                      tracking-[0.18em]
                      text-zinc-500
                    "
                  >
                    {film.role}
                  </p>

                  {/* Mobile View Project */}
                  <div
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      text-[10px]
                      uppercase
                      tracking-[0.28em]
                      text-white
                      sm:hidden
                    "
                  >
                    VIEW PROJECT
                    <span>→</span>
                  </div>

                </div>
              </article>
            );

            /*
             * C U Soon gets the cinematic page transition.
             */
            if (isCUSoon) {
              return (
                <Link
                  key={film.id}
                  href="/films/cu-soon"
                  onClick={(event) =>
                    handleProjectClick(event, film)
                  }
                  className="block"
                >
                  {filmContent}
                </Link>
              );
            }

            return filmContent;
          })}
        </div>
      </section>


      {/* =====================================================
          CINEMATIC IMAGE EXPANSION
      ===================================================== */}

      {transitioning && transitionRect && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            pointer-events-none
          "
        >
          {/* Dark background */}
          <div
            className="
              absolute
              inset-0
              bg-black
              transition-opacity
              duration-700
              ease-out
            "
            style={{
              opacity: 1,
            }}
          />

          {/* Expanding image */}
          <div
            className="
              absolute
              overflow-hidden
              transition-all
              duration-[850ms]
              ease-[cubic-bezier(0.76,0,0.24,1)]
            "
            style={{
              left: transitionRect.left,
              top: transitionRect.top,
              width: transitionRect.width,
              height: transitionRect.height,
            }}
            ref={(element) => {
              if (!element) return;

              requestAnimationFrame(() => {
                element.style.left = "0px";
                element.style.top = "0px";
                element.style.width = "100vw";
                element.style.height = "100vh";
              });
            }}
          >
            <Image
              src={transitionImage}
              alt=""
              fill
              sizes="100vw"
              className="
                object-cover
                object-center
              "
            />

            {/* Cinematic darkening */}
            <div
              className="
                absolute
                inset-0
                bg-black/15
              "
            />
          </div>
        </div>
      )}
    </>
  );
}