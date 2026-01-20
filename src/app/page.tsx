import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Seção Hero com ID para âncora */}
      <div id="início">
        <Hero />
      </div>

      {/* Seção Sobre com ID para âncora */}
      <div id="sobre">
        <About />
      </div>

      {/* Seção Serviços com ID para âncora */}
      <div id="serviços">
        <Services />
      </div>

      {/* Seção Contato com ID para âncora */}
      <div id="contato">
        <Contact />
      </div>

      {/* Rodapé Simples e Profissional */}
      <footer className="bg-[#0f172a] py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6 flex justify-center items-center gap-2">
            <div className="w-8 h-8 bg-medical-secondary rounded flex items-center justify-center font-bold">M</div>
            <span className="text-xl font-bold">MedCore</span>
          </div>
          <p className="text-slate-400 text-sm mb-4">
            Desenvolvido por Nattan John - Especialista em Performance Web
          </p>
          <div className="flex justify-center gap-6 text-slate-400">
            <span className="text-xs uppercase tracking-widest">Next.js 15</span>
            <span className="text-xs uppercase tracking-widest">Tailwind CSS</span>
            <span className="text-xs uppercase tracking-widest">Framer Motion</span>
          </div>
        </div>
      </footer>
    </main>
  );
}