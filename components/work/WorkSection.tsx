"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { films } from "@/data/films";

export default function WorkSection() {
  const [transitioning, setTransitioning] = useState(false);
  const [transitionExpanded, setTransitionExpanded] = useState(false);
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

    setTransitionImage(film.image);
    setTransitionRect(rect);
    setTransitioning(true);

    /*
     * Start the expansion on the next frame.
     * This makes sure the browser first renders
     * the image in its original card position.
     */
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTransitionExpanded(true);
      });
    });

    /*
     * The destination C U Soon hero is 75svh,
     * so the transition now finishes at exactly
     * the same height instead of expanding to 100vh.
     */
    window.setTimeout(() => {
      window.location.href = "/films/cu-soon";
    }, 850);
  };

  return (
    <>
      <section
        id="work"
        className="
          bg-black
          text-white
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-20
          sm:py-24
        "
      >
        {/* =====================================================
            SECTION TITLE
        ===================================================== */}

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


        {/* =====================================================
            FILM GRID

            Mobile: 2 columns
            Tablet: 2 columns
            Desktop: 4 columns
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-2
            lg:grid-cols-4
            gap-x-3
            sm:gap-x-4
            lg:gap-x-5
            gap-y-12
            sm:gap-y-16
          "
        >
          {films.map((film) => {
            const isCUSoon = film.title === "C U Soon";

            const filmContent = (
              <article
                key={film.id}
                className="
                  group
                  min-w-0
                  cursor-pointer
                "
              >

                {/* =================================================
                    FILM IMAGE
                ================================================= */}

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
                      (max-width: 639px) 50vw,
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

                  {/* =================================================
                      IMAGE OVERLAY
                  ================================================= */}

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

                  {/* =================================================
                      VIEW PROJECT
                  ================================================= */}

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
                        px-4
                        py-2.5
                        text-[8px]
                        sm:px-6
                        sm:py-3
                        sm:text-xs
                        uppercase
                        tracking-[0.25em]
                        sm:tracking-[0.3em]
                      "
                    >
                      VIEW PROJECT →
                    </div>
                  </div>
                </div>


                {/* =================================================
                    FILM INFORMATION
                ================================================= */}

                <div className="pt-4 sm:pt-6">

                  {/* YEAR + LANGUAGE */}

                  <p
                    className="
                      text-[8px]
                      sm:text-[10px]
                      uppercase
                      tracking-[0.2em]
                      sm:tracking-[0.3em]
                      text-zinc-500
                    "
                  >
                    {film.year} · {film.language}
                  </p>


                  {/* TITLE */}

                  <h3
                    className="
                      mt-2
                      sm:mt-3
                      text-base
                      sm:text-2xl
                      font-light
                      leading-tight
                      tracking-wide
                    "
                  >
                    {film.title}
                  </h3>


                  {/* ROLE */}

                  <p
                    className="
                      mt-1.5
                      sm:mt-2
                      text-[8px]
                      sm:text-xs
                      uppercase
                      tracking-[0.14em]
                      sm:tracking-[0.18em]
                      text-zinc-500
                    "
                  >
                    {film.role}
                  </p>


                  {/* MOBILE VIEW PROJECT */}

                  <div
                    className="
                      mt-4
                      inline-flex
                      items-center
                      gap-1.5
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
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


            {/* =====================================================
                C U SOON PROJECT LINK
            ===================================================== */}

            if (isCUSoon) {
              return (
                <Link
                  key={film.id}
                  href="/films/cu-soon"
                  onClick={(event) =>
                    handleProjectClick(event, film)
                  }
                  className="block min-w-0"
                >
                  {filmContent}
                </Link>
              );
            }

            return filmContent;
          })}
        </div>
      </section>


      {/* =========================================================
          CINEMATIC IMAGE TRANSITION
      ========================================================= */}

      {transitioning && transitionRect && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            pointer-events-none
            bg-black
          "
        >

          {/* =====================================================
              EXPANDING IMAGE

              Destination:
              - top: 0
              - width: 100vw
              - height: 75svh

              This matches the C U Soon hero.
          ===================================================== */}

          <div
            className="
              absolute
              overflow-hidden
              transition-all
              duration-[850ms]
              ease-[cubic-bezier(0.76,0,0.24,1)]
            "
            style={{
              left: transitionExpanded
                ? "0px"
                : `${transitionRect.left}px`,

              top: transitionExpanded
                ? "0px"
                : `${transitionRect.top}px`,

              width: transitionExpanded
                ? "100vw"
                : `${transitionRect.width}px`,

              height: transitionExpanded
                ? "75svh"
                : `${transitionRect.height}px`,
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
            <div className="absolute inset-0 bg-black/15" />
          </div>


          {/* =====================================================
              LOWER BLACK AREA

              Keeps the transition visually consistent with
              the C U Soon page beneath the 75svh hero.
          ===================================================== */}

          <div
            className="
              absolute
              left-0
              right-0
              bottom-0
              h-[25svh]
              bg-black
            "
          />
        </div>
      )}
    </>
  );
}