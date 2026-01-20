"use client";
import { motion } from "framer-motion";
import { FiActivity, FiShield, FiUsers, FiClock } from "react-icons/fi";

const services = [
  {
    title: "Ortopedia Geral",
    description: "Tratamento especializado em lesões ósseas e musculares com tecnologia avançada.",
    icon: <FiActivity className="text-medical-secondary w-8 h-8" />,
  },
  {
    title: "Fisioterapia",
    description: "Reabilitação personalizada para recuperação rápida e segura dos movimentos.",
    icon: <FiShield className="text-medical-secondary w-8 h-8" />,
  },
  {
    title: "Medicina Esportiva",
    description: "Foco em performance e prevenção de lesões para atletas e amadores.",
    icon: <FiUsers className="text-medical-secondary w-8 h-8" />,
  },
  {
    title: "Atendimento Rápido",
    description: "Agendamento ágil para casos urgentes e avaliações imediatas.",
    icon: <FiClock className="text-medical-secondary w-8 h-8" />,
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-medical-primary mb-4">
            Especialidades Médicas
          </h2>
          <p className="text-medical-muted max-w-xl mx-auto">
            Combinamos anos de experiência com as técnicas mais modernas da medicina.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-medical-card hover:border-medical-secondary transition-colors group"
            >
              <div className="mb-6 p-3 bg-blue-50 w-fit rounded-lg transition-colors group-hover:bg-medical-secondary group-hover:text-medical-secondary">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-medical-primary mb-3">
                {service.title}
              </h3>
              <p className="text-medical-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}