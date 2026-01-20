"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCalendar, FiArrowRight, FiCheck } from "react-icons/fi";
import Image from "next/image";

export default function Hero() {
  const images = ["/1.webp", "/2.webp", "/3.webp"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handleBooking = () => {
    const whatsappNumber = "5541997718248";
    const message = encodeURIComponent("Olá! Gostaria de agendar uma consulta na MedCore.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="relative bg-white overflow-hidden pt-28 pb-12 lg:pt-40 lg:pb-24">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 transform translate-x-1/2 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-medical-secondary uppercase bg-sky-50 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              Atendimento Humanizado & Moderno
            </span>

            <h1 className="text-4xl lg:text-6xl font-bold text-[#0f172a] leading-tight mb-6">
              Sua saúde em boas mãos com <span className="text-medical-secondary">tecnologia de ponta.</span>
            </h1>

            <p className="text-lg text-[#475569] mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Especialistas em Ortopedia e Fisioterapia dedicados a devolver sua qualidade de vida com diagnósticos precisos e tratamentos avançados.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={handleBooking}
                className="group w-full sm:w-auto px-8 py-4 bg-medical-secondary text-black rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#0369a1] hover:text-white transition-all shadow-xl shadow-blue-100 active:scale-95"
              >
                Agendar Consulta 
                <FiCalendar className="group-hover:rotate-12 transition-transform" />
              </button>

              <a 
                href="#serviços"
                className="w-full sm:w-auto px-8 py-4 border-2 border-slate-200 text-[#0f172a] rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all text-center"
              >
                Ver Especialidades <FiArrowRight />
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-[#64748b]">
              <div className="flex items-center gap-1.5">
                <FiCheck className="text-emerald-500 font-bold" /> +15k Pacientes
              </div>
              <div className="flex items-center gap-1.5">
                <FiCheck className="text-emerald-500 font-bold" /> ISO 9001
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative w-full max-w-125 lg:max-w-none"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-12 border-white bg-white">
              <div className="relative aspect-4/5 lg:aspect-4/3 bg-slate-100 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image 
                      src={images[currentImage]} 
                      alt={`Clinica MedCore ${currentImage + 1}`}
                      fill
                      priority
                      className="object-cover transition-opacity duration-700"
                    />
                  </motion.div>
                </AnimatePresence>
                
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl z-20 hidden sm:flex items-center gap-4 border border-slate-50"
            >
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                <FiCheck size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-[#0f172a]">Atendimento Hoje</p>
                <p className="text-xs text-emerald-600 font-medium">Horários disponíveis agora</p>
              </div>
            </motion.div>

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-100/50 rounded-full blur-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}