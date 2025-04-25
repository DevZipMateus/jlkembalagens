
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Contact = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="contact" className="section bg-neutral-100">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-[#c1c8d1] text-[#3c3f46] font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3c3f46] mb-6">
            Entre em contato conosco
          </h2>
          <p className="text-[#4a4e58] text-lg">
            Estamos prontos para atender às suas necessidades através dos nossos canais de atendimento.
          </p>
        </div>
        
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* WhatsApp Card */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <div className="bg-[#4a4e58] p-6 flex items-center justify-center">
              <img 
                src="/lovable-uploads/1fa16bc1-908d-4a63-9c7f-88a25f117f80.png" 
                alt="WhatsApp" 
                className="w-16 h-16"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-[#3c3f46] mb-2">WhatsApp</h3>
              <p className="text-[#4a4e58] mb-4">Atendimento rápido e prático</p>
              <a 
                href="https://wa.me/5521992137582" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#4a4e58] hover:bg-[#3c3f46] text-white px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium"
              >
                <span>Enviar mensagem</span>
              </a>
            </div>
          </div>
          
          {/* Phone Card */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <div className="bg-[#4a4e58] p-6 flex items-center justify-center">
              <Phone className="w-16 h-16 text-[#c1c8d1]" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-[#3c3f46] mb-2">Telefone</h3>
              <p className="text-[#4a4e58] mb-4">Fale diretamente conosco</p>
              <a 
                href="tel:+5521992137582"
                className="bg-[#4a4e58] hover:bg-[#3c3f46] text-white px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium"
              >
                <span>(21) 99213-7582</span>
              </a>
            </div>
          </div>
          
          {/* Email Card */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <div className="bg-[#4a4e58] p-6 flex items-center justify-center">
              <Mail className="w-16 h-16 text-[#c1c8d1]" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-[#3c3f46] mb-2">E-mail</h3>
              <p className="text-[#4a4e58] mb-4">Envie sua mensagem</p>
              <a 
                href="mailto:jefinhojlk@gmail.com"
                className="bg-[#4a4e58] hover:bg-[#3c3f46] text-white px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium"
              >
                <span>jefinhojlk@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Address and Hours Card */}
        <div className="mt-12 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Address */}
            <div className="flex items-start">
              <div className="bg-[#c1c8d1] p-3 rounded-full mr-4 flex-shrink-0">
                <MapPin className="text-[#4a4e58]" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#3c3f46] mb-2">Endereço</h4>
                <p className="text-[#4a4e58]">Rua Guaiuba, 359 - Rio de Janeiro</p>
                <a
                  href="https://g.co/kgs/feAgKXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4a4e58] hover:text-[#3c3f46] mt-2 inline-block"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
            
            {/* Working Hours */}
            <div>
              <h4 className="text-lg font-semibold text-[#3c3f46] mb-4">Horário de Atendimento</h4>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#4a4e58]">Segunda - Sexta:</span>
                  <span className="font-medium text-[#3c3f46]">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4a4e58]">Sábado:</span>
                  <span className="font-medium text-[#3c3f46]">09:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4a4e58]">Domingo:</span>
                  <span className="font-medium text-[#3c3f46]">Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
