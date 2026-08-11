"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CUSoonPage() {
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);
  const [showBackArrow, setShowBackArrow] = useState(false);
  const [expandedSection, setExpandedSection] = useState<
    "grabs" | "bts" | null
  >(null);

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

  const toggleSection = (section: "grabs" | "bts") => {
    setExpandedSection((current) =>
      current === section ? null : section
    );
  };

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
               