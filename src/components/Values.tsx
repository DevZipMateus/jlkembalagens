
import React from 'react';

const Values = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Valores
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Imagem dos valores */}
          <div className="mb-8 sm:mb-12">
            <img 
              src="/lovable-uploads/0210b891-433e-46e1-9a24-fc5cde99118b.png" 
              alt="Tabela de valores - JLK Embalagens Plásticas" 
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
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
