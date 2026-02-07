import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <footer className="py-16 bg-white border-t border-gray-100 text-center">
        <div className="max-container flex flex-col items-center gap-6">
          <img src="/logo.svg" alt="Aprende+ Logo" className="h-12 w-auto opacity-80 grayscale hover:grayscale-0 transition-all" />
          <p className="text-gray-400 font-sans">© {new Date().getFullYear()} Aprende+ Club Educativo Integral. Casi todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
