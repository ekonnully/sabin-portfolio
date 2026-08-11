"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CUSoonPage() {
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);
  const [showBackArrow, setShowBackArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 250) {
        setBackgroundOpacity(0);
      } else if (scrollY < 650) {
        const progress = (scrollY - 250) / 400;
        setBackgroundOpacity(progress * 0.38);
      } else if (scrollY < 2200) {
        setBackgroundOpacity(0.38);
      } else if (scrollY < 4000) {
        const progress = (scrollY - 2200) / 1800;
        setBackgroundOpacity(0.38 - progress * 0.22);
      } else {
        setBackgroundOpacity(0.16);
      }

      // Show floating arrow after the user starts scrolling
      setShowBackArrow(scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="relative bg-black text-white">

      {/* =====================================================
          FIXED CINEMATIC BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          transition-opacity
          duration-500
          ease-out
        "
        style={{
          opacity: backgroundOpacity,
        }}
      >
        <Image
          src="/images/films/cu-soon.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/20
            via-black/35
            to-black/80
          "
        />
      </div>


      {/* =====================================================
          FLOATING BACK ARROW
      ===================================================== */}

      <Link
        href="/#work"
        aria-label="Back to Work"
        className={`
          fixed
          bottom-6
          left-6
          z-50
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-black/40
          text-lg
          font-light
          text-white/70
          backdrop-blur-sm
          transition-all
          duration-500
          hover:border-white/50
          hover:bg-white
          hover:text-black
          sm:bottom-8
          sm:left-8
          ${
            showBackArrow
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-3 opacity-0"
          }
        `}
      >
        ←
      </Link>


      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}

      <div className="relative z-10">


        {/* ===================================================
            HERO
        =================================================== */}

        <section
          className="
            relative
            min-h-[75svh]
            w-full
          "
        >
          <Image
            src="/images/films/cu-soon.png"
            alt="C U Soon"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-[55%]
              bg-gradient-to-t
              from-black
              via-black/50
              to-transparent
            "
          />
        </section>


        {/* ===================================================
            PROJECT INFORMATION
        =================================================== */}

        <section
          className="
            bg-transparent
            px-6
            py-7
            sm:px-8
            md:px-16
            md:py-10
          "
        >
          <div className="mx-auto max-w-[1500px]">

            {/* YEAR / LANGUAGE */}

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.32em]
                text-zinc-500
                sm:text-xs
              "
            >
              2020 · Malayalam
            </p>


            {/* TITLE */}

            <h1
              className="
                mt-5
                max-w-5xl
                text-[64px]
                font-light
                leading-[0.88]
                tracking-[-0.045em]
                text-zinc-100
                sm:text-[90px]
                md:text-[120px]
                lg:text-[150px]
              "
              style={{
                fontFamily:
                  '"Bodoni Moda", "Didot", "Bodoni MT", "Times New Roman", serif',
              }}
            >
              C U Soon
            </h1>


            {/* ROLE */}

            <p
              className="
                mt-6
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-zinc-400
                sm:text-xs
              "
            >
              Director of Photography
            </p>


            {/* =================================================
                ABOUT + CREDITS
            ================================================= */}

            <div
              className="
                mt-12
                grid
                grid-cols-1
                gap-8
                md:mt-14
                md:grid-cols-12
                md:gap-12
              "
            >

              {/* ABOUT */}

              <div className="md:col-span-7">

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.35em]
                    text-zinc-500
                  "
                >
                  About the Film
                </p>

                <p
                  className="
                    mt-4
                    max-w-3xl
                    text-base
                    font-normal
                    leading-[1.75]
                    tracking-normal
                    text-zinc-400
                    sm:text-lg
                    md:text-[18px]
                  "
                >
                  C U Soon is a Malayalam screenlife mystery thriller
                  that unfolds almost entirely through computer and
                  smartphone screens, following a young man who becomes
                  involved in the search for his cousin&apos;s missing
                  fiancée.
                </p>

              </div>


              {/* CREDITS */}

              <div className="md:col-span-5">

                <div
                  className="
                    grid
                    grid-cols-1
                    gap-x-10
                    gap-y-5
                    sm:grid-cols-2
                  "
                >

                  {/* DIRECTOR */}

                  <div>
                    <p
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.32em]
                        text-zinc-500
                      "
                    >
                      Director
                    </p>

                    <p
                      className="
                        mt-1.5
                        text-sm
                        font-light
                        text-zinc-200
                        sm:text-base
                      "
                    >
                      Mahesh Narayanan
                    </p>
                  </div>


                  {/* PRODUCERS */}

                  <div>
                    <p
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.32em]
                        text-zinc-500
                      "
                    >
                      Producers
                    </p>

                    <p
                      className="
                        mt-1.5
                        text-sm
                        font-light
                        text-zinc-200
                        sm:text-base
                      "
                    >
                      Fahadh Faasil · Nazriya Nazim
                    </p>
                  </div>


                  {/* FORMAT */}

                  <div>
                    <p
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.32em]
                        text-zinc-500
                      "
                    >
                      Format
                    </p>

                    <p
                      className="
                        mt-1.5
                        text-sm
                        font-light
                        text-zinc-200
                        sm:text-base
                      "
                    >
                      Feature Film
                    </p>
                  </div>


                  {/* RELEASE */}

                  <div>
                    <p
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.32em]
                        text-zinc-500
                      "
                    >
                      Release
                    </p>

                    <p
                      className="
                        mt-1.5
                        text-sm
                        font-light
                        text-zinc-200
                        sm:text-base
                      "
                    >
                      1 September 2020 · OTT
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ===================================================
            RECOGNITION
        =================================================== */}

        <section
          className="
            border-t
            border-zinc-900/80
            bg-transparent
            px-6
            py-7
            sm:px-8
            md:px-16
            md:py-10
          "
        >
          <div className="mx-auto max-w-[1500px]">

            <p
              className="
                mb-5
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-zinc-500
              "
            >
              Recognition
            </p>

            <div
              className="
                grid
                grid-cols-1
                gap-x-16
                gap-y-5
                md:grid-cols-2
              "
            >

              <div>
                <p className="text-sm font-light text-zinc-200">
                  Kerala State Film Awards
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  2021 · Best Editor — Mahesh Narayanan
                </p>
              </div>


              <div>
                <p className="text-sm font-light text-zinc-200">
                  South Indian International Movie Awards
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  2021 · Best Director — Mahesh Narayanan
                </p>
              </div>


              <div>
                <p className="text-sm font-light text-zinc-200">
                  Filmfare Awards South
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  2022 · Nomination — Best Actress (Malayalam)
                </p>
              </div>


              <div>
                <p className="text-sm font-light text-zinc-200">
                  Critics&apos; Choice Film Awards India
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  2021 · Regional recognition
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* ===================================================
            WATCH
        =================================================== */}

        <section
          className="
            border-t
            border-zinc-900/80
            bg-transparent
            px-6
            py-7
            sm:px-8
            md:px-16
            md:py-10
          "
        >
          <div className="mx-auto max-w-[1500px]">

            <p
              className="
                mb-5
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-zinc-500
              "
            >
              Watch
            </p>

            <div
              className="
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:flex-wrap
              "
            >

              {/* WATCH TRAILER */}

              <a
                href="https://www.youtube.com/watch?v=QdpVdxyOMHA"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-4
                  border
                  border-white
                  px-7
                  py-4
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  transition
                  duration-300
                  hover:bg-white
                  hover:text-black
                "
              >
                WATCH TRAILER
                <span>→</span>
              </a>


              {/* WATCH FILM */}

              <a
                href="https://www.primevideo.com/detail/0JTED9TBBJRH2H4B7LTY0OD7QL?ref_=atv_dp_share_cu_r"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-4
                  border
                  border-zinc-700
                  px-7
                  py-4
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-zinc-300
                  transition
                  duration-300
                  hover:border-white
                  hover:bg-white
                  hover:text-black
                "
              >
                WATCH FILM
                <span>→</span>
              </a>


              {/* IMDb */}

              <a
                href="https://www.imdb.com/title/tt12677092/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-4
                  border
                  border-zinc-700
                  px-7
                  py-4
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-zinc-300
                  transition
                  duration-300
                  hover:border-white
                  hover:bg-white
                  hover:text-black
                "
              >
                IMDb
                <span>→</span>
              </a>

            </div>

          </div>
        </section>


        {/* ===================================================
            SELECTED FRAMES
        =================================================== */}

        <section
          className="
            border-t
            border-zinc-900/80
            bg-transparent
            px-6
            py-7
            sm:px-8
            md:px-16
            md:py-10
          "
        >
          <div className="mx-auto max-w-[1500px]">

            <p
              className="
                mb-5
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-zinc-500
              "
            >
              Selected Frames
            </p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              <div
                className="
                  relative
                  aspect-video
                  overflow-hidden
                  bg-black/60
                  md:col-span-2
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-zinc-700
                  "
                >
                  Screen Grab 01
                </div>
              </div>


              <div
                className="
                  relative
                  aspect-video
                  overflow-hidden
                  bg-black/60
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-zinc-700
                  "
                >
                  Screen Grab 02
                </div>
              </div>


              <div
                className="
                  relative
                  aspect-video
                  overflow-hidden
                  bg-black/60
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-zinc-700
                  "
                >
                  Screen Grab 03
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ===================================================
            BEHIND THE SCENES
        =================================================== */}

        <section
          className="
            border-t
            border-zinc-900/80
            bg-transparent
            px-6
            py-7
            sm:px-8
            md:px-16
            md:py-10
          "
        >
          <div className="mx-auto max-w-[1500px]">

            <p
              className="
                mb-5
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-zinc-500
              "
            >
              Behind the Scenes
            </p>

            <div
              className="
                flex
                min-h-[180px]
                items-center
                justify-center
                bg-black/60
              "
            >
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-zinc-700
                "
              >
                BTS Photos
              </p>
            </div>

          </div>
        </section>


        {/* ===================================================
            BACK TO WORK
        =================================================== */}

        <section
          className="
            border-t
            border-zinc-900/80
            bg-transparent
            px-6
            py-7
            sm:px-8
            md:px-16
            md:py-9
          "
        >
          <div className="mx-auto max-w-[1500px]">

            <Link
              href="/#work"
              className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-zinc-500
                transition
                hover:text-white
              "
            >
              ← Back to Work
            </Link>

          </div>
        </section>

      </div>

    </main>
  );
}