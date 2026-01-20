"use client";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-3/4 relative">
                <Image 
                  src="/4.webp" 
                  alt="Especialista MedCore"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-full h-full bg-sky-50 -z-10 rounded-2xl border-2 border-sky-100"></div>
            
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-slate-50 z-20 hidden md:block">
              <p className="text-[#0f172a] font-bold text-sm">Registro Profissional</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0f172a] mb-6">
              Excelência e Inovação em <br />
              <span className="text-medical-secondary">Cuidado com a Saúde</span>
            </h2>
            <p className="text-[#475569] mb-6 leading-relaxed">
              Com mais de 10 anos de atuação, nossa clínica nasceu do desejo de oferecer um diagnóstico preciso aliado a um tratamento humano. Utilizamos o que há de mais moderno em tecnologia médica para garantir sua recuperação e bem-estar.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Equipe de especialistas qualificados",
                "Equipamentos de última geração",
                "Ambiente acolhedor e seguro",
                "Atendimento personalizado por paciente"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#0f172a] font-medium">
                  <FiCheckCircle className="text-emerald-500 shrink-0" /> 
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-8 py-8 border-t border-slate-100">
              <div>
                <p className="text-3xl font-bold text-medical-secondary">15k+</p>
                <p className="text-sm text-[#64748b] font-medium italic">Pacientes Atendidos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-medical-secondary">10+</p>
                <p className="text-sm text-[#64748b] font-medium italic">Anos de Experiência</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}