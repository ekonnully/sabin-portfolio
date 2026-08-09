export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      <div className="flex items-center justify-end px-16 py-3">

        <div className="flex gap-12 text-sm uppercase tracking-[0.35em] text-white">

          <a
            href="#about"
            className="transition-all duration-300 hover:opacity-70"
          >
            ABOUT
          </a>

          <a
            href="#work"
            className="transition-all duration-300 hover:opacity-70"
          >
            WORK
          </a>

          <a
            href="#contact"
            className="transition-all duration-300 hover:opacity-70"
          >
            CONTACT
          </a>

        </div>

      </div>
    </nav>
  );
}