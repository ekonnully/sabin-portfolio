"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
  "/images/hero/hero.jpeg",
  "/images/hero/hero-1.jpeg",
  "/images/hero/hero-2.jpeg",
  "/images/hero/hero-3.png",
];

/*
 * Mobile framing for each image.
 *
 * Desktop remains centered.
 * Mobile gets individual positioning so important
 * parts of each shot stay inside the phone frame.
 */
const mobilePositionClasses = [
  "object-[center_42%]",
  "object-[center_45%]",
  "object-[center_40%]",
  "object-[center_45%]",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(
        (previous) => (previous + 1) % heroImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative
        h-[100dvh]
        min-h-[600px]
        w-full
        overflow-hidden
        bg-black
      "
    >
      {/* =====================================================
          HERO IMAGES
      ===================================================== */}

      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`
            absolute
            inset-0
            transition-opacity
            duration-1000
            ${
              index === currentImage
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        >
          <Image
            src={image}
            alt="Sabin Uralikandy cinematography"
            fill
            priority={index === 0}
            sizes="100vw"
            className={`
              object-cover
              ${mobilePositionClasses[index]}
              transition-transform
              duration-[5000ms]
              ease-linear
              md:object-center
            `}
          />
        </div>
      ))}

      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}

      <div className="absolute inset-0 bg-black/40" />

      {/* =====================================================
          BOTTOM GRADIENT
      ===================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-72
          bg-gradient-to-t
          from-black
          via-black/50
          to-transparent
        "
      />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div
        className="
          absolute
          bottom-10
          left-6
          right-6
          text-white

          sm:bottom-12

          md:bottom-24
          md:left-16
          md:right-auto
        "
      >
        {/* NAME */}

        <h1
          className="
            text-[25px]
            sm:text-3xl
            md:text-5xl

            font-extralight
            uppercase
            tracking-[0.18em]
            sm:tracking-[0.22em]
            md:tracking-[0.25em]

            leading-tight
          "
        >
          SABIN
          <br className="sm:hidden" />

          <span className="sm:ml-3">
            URALIKANDY
          </span>
        </h1>

        {/* PROFESSION */}

        <p
          className="
            mt-3
            text-[10px]
            sm:text-xs
            md:text-sm

            uppercase
            tracking-[0.28em]
            md:tracking-[0.35em]

            text-zinc-300
          "
        >
          Director of Photography
        </p>

        {/* SHOWREEL BUTTON */}

        <button
          className="
            mt-7
            border
            border-white

            px-7
            py-3.5
            sm:px-8
            sm:py-4

            text-[10px]
            sm:text-xs

            uppercase
            tracking-[0.28em]
            md:tracking-[0.35em]

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