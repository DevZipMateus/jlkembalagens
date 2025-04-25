
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633354624102-fc5e3265afcc?q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-up">
            Excelência em embalagens plásticas
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Fabricação e reaproveitamento de plásticos com qualidade e compromisso desde 2016
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a 
              href="#products" 
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-md transition-all duration-300 flex items-center justify-center gap-2 font-medium"
            >
              Conheça nossos produtos
              <ArrowRight size={20} />
            </a>
            <a 
              href="https://wa.me/5521992137582"
              target="_blank"
              rel="noopener noreferrer" 
              className="btn-primary flex items-center justify-center gap-2"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
