
import React from 'react';
import { Truck, Recycle, Box, FileSpreadsheet, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Sacos para Gelo',
    description: 'Embalagens especializadas para armazenamento e transporte de gelo, mantendo a qualidade e higiene.',
    icon: Box,
    delay: '0s'
  },
  {
    id: 2,
    title: 'Sacolas Reforçadas',
    description: 'Sacolas com alta resistência para diversos segmentos, garantindo durabilidade e funcionalidade.',
    icon: Truck,
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'Reaproveitamento de Plásticos',
    description: 'Soluções sustentáveis de reciclagem e reaproveitamento de materiais plásticos.',
    icon: Recycle,
    delay: '0.2s'
  },
  {
    id: 4,
    title: 'Embalagens Personalizadas',
    description: 'Criação de embalagens sob medida para atender às necessidades específicas de cada cliente.',
    icon: FileSpreadsheet,
    delay: '0.3s'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-corporate-blue/10 text-corporate-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Soluções em Embalagens Plásticas
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos soluções completas em embalagens plásticas, com foco em qualidade, 
            sustentabilidade e personalização para diversos segmentos.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              <div className="bg-corporate-blue/10 p-4 rounded-lg inline-block mb-5">
                <service.icon className="text-corporate-blue" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="bg-black hover:bg-neutral-800 text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex"
          >
            <span>Entre em contato</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

