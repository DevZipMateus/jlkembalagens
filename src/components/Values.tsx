
import React from 'react';
import { Button } from './ui/button';

const Values = () => {
  const handleAvailabilityCheck = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Valores
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Texto explicativo */}
          <div className="mb-6 sm:mb-8">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-center">
              Valores são negociáveis para revenda e por quantidade. Em caso de pedidos antecipados, pode-se solicitar pacotes com peso diferente do fixo. Pedidos para cores não fixadas na tabela, devem-se consultar valores e disponibilidade.
            </p>
          </div>
          
          {/* Imagem dos valores */}
          <div className="mb-8 sm:mb-12">
            <img 
              src="/lovable-uploads/0210b891-433e-46e1-9a24-fc5cde99118b.png" 
              alt="Tabela de valores - JLK Embalagens Plásticas" 
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          
          {/* Botão Ver Disponibilidade */}
          <div className="text-center mb-8 sm:mb-12">
            <Button 
              onClick={handleAvailabilityCheck}
              className="bg-primary text-white hover:bg-primary/90 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold"
            >
              Ver Disponibilidade
            </Button>
          </div>
          
          {/* Espaço para textos manuais */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              {/* Adicione aqui o primeiro parágrafo de texto sobre os valores */}
            </p>
            
            <p>
              {/* Adicione aqui o segundo parágrafo de texto sobre os valores */}
            </p>
            
            <p>
              {/* Adicione aqui o terceiro parágrafo de texto sobre os valores */}
            </p>
            
            <p>
              {/* Adicione aqui mais parágrafos conforme necessário */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
