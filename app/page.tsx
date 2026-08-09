import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import WorkSection from "@/components/work/WorkSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WorkSection />

      <section
        id="about"
        className="min-h-screen bg-zinc-950 text-white flex items-center justify-center"
      >
        <h2 className="text-5xl tracking-[0.3em] uppercase">
          About
        </h2>
      </section>

      <section
        id="contact"
        className="min-h-screen bg-black text-white flex items-center justify-center"
      >
        <h2 className="text-5xl tracking-[0.3em] uppercase">
          Contact
        </h2>
      </section>
    </>
  );
}