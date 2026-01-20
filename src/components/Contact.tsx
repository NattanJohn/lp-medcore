"use client";
import { motion } from "framer-motion";
import { FiMapPin, FiClock } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row gap-0 bg-white rounded-3xl overflow-hidden shadow-medical-card border border-slate-100"
        >
          
          <div className="flex-1 p-8 lg:p-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#0f172a] mb-6">Estamos prontos para te atender</h2>
              <p className="text-[#475569] mb-8 leading-relaxed">
                Localização privilegiada com infraestrutura moderna para o seu conforto e segurança. Venha nos visitar.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-blue-50 rounded-lg text-medical-secondary group-hover:bg-medical-secondary group-hover:text-white transition-colors duration-300">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a]">Endereço</h4>
                    <p className="text-sm text-[#64748b]">Av. Principal, 1234 - Centro, Matinhos - PR</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-blue-50 rounded-lg text-medical-secondary group-hover:bg-medical-secondary group-hover:text-white transition-colors duration-300">
                    <FiClock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a]">Horário de Funcionamento</h4>
                    <p className="text-sm text-[#64748b]">Segunda a Sexta: 08:00 - 19:00</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/5541997718248"
                  target="_blank"
                  className="w-full py-4 bg-[#25d366] text-white rounded-xl font-bold text-center hover:bg-opacity-90 transition-all shadow-lg shadow-green-100 flex justify-center items-center gap-2"
                >
                  Falar no WhatsApp agora
                </motion.a>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-medical-secondary cursor-pointer text-black rounded-xl font-bold hover:bg-sky-700 hover:text-white transition-all shadow-lg shadow-sky-100"
                >
                  Ver Agenda Online
                </motion.button>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="flex-1 min-h-100 relative"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden border-medical-secondary shadow-lg">
              <iframe
                title="Localização da Clínica"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14371.748641913166!2d-48.54148735!3d-25.8118029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94db90f9e9e1c1e5%3A0x3f0a5f8b0a5f8b0a!2sMatinhos%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1620000000000"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1.5rem', filter: 'none' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}