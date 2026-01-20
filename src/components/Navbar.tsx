"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-medical-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl">
            M
          </div>
          <span className="text-xl font-bold text-[#0f172a]">Med<span className="text-medical-secondary">Core</span></span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {["Início", "Sobre", "Serviços", "Contato"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[#475569] hover:text-medical-secondary font-medium transition-colors">
              {item}
            </a>
          ))}
          <a 
            href="tel:41997718248" 
            className="flex items-center gap-2 bg-medical-secondary text-white px-6 py-2.5 rounded-full font-bold hover:bg-sky-700 transition-all"
          >
            <FiPhone /> (41) 99771-8248
          </a>
        </div>

        <button className="lg:hidden text-[#0f172a]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white border-t border-slate-100 p-4 absolute w-full shadow-xl"
        >
          <div className="flex flex-col gap-4 text-center">
            {["Início", "Serviços", "Sobre", "Contato"].map((item) => (
              <a key={item} href="#" className="text-[#475569] py-2 font-medium border-b border-slate-50">
                {item}
              </a>
            ))}
            <a href="tel:41997718248" className="bg-medical-secondary text-white py-3 rounded-xl font-bold">
              Ligar Agora
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}