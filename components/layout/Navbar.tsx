"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 z-50 w-full">

        <div className="flex items-center justify-end px-6 md:px-16 py-6">

          <div className="hidden md:flex gap-12 text-sm uppercase tracking-[0.35em] text-white">

            <a href="#about" className="hover:opacity-70 transition">
              ABOUT
            </a>

            <a href="#work" className="hover:opacity-70 transition">
              WORK
            </a>

            <a href="#contact" className="hover:opacity-70 transition">
              CONTACT
            </a>

          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white"
          >
            <Menu size={28} />
          </button>

        </div>

      </nav>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 z-[100] bg-black transition-all duration-500 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >

        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 text-white"
        >
          <X size={30} />
        </button>

        <div className="flex h-full flex-col items-center justify-center gap-10">

          <a
            href="#about"
            onClick={closeMenu}
            className="text-4xl uppercase tracking-[0.25em] text-white"
          >
            ABOUT
          </a>

          <a
            href="#work"
            onClick={closeMenu}
            className="text-4xl uppercase tracking-[0.25em] text-white"
          >
            WORK
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="text-4xl uppercase tracking-[0.25em] text-white"
          >
            CONTACT
          </a>

        </div>

      </div>
    </>
  );
}