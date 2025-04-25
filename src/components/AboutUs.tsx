import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
const AboutUs = () => {
  return <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="bg-corporate-blue/20 w-full h-full absolute -left-6 -top-6 rounded-lg"></div>
              <img alt="Fábrica de embalagens plásticas" className="relative z-10 rounded-lg shadow-lg w-full object-cover h-[400px]" src="/lovable-uploads/ebf24e07-8173-4906-a81b-fbde88b95e02.png" />
              <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-6 z-20 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-corporate-blue rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Desde 2016</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-corporate-lightBlue rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">+500 Clientes</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">9</div>
                <div className="text-sm text-gray-600">Anos de excelência em embalagens</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-corporate-blue/10 text-corporate-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4 animate-fade-in">
              Sobre a JLK
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              Excelência em Embalagens Plásticas
            </h2>
            <p className="text-gray-600 mb-6 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              Desde 2016, a JLK Embalagens Plásticas se compromete com a excelência na fabricação 
              e reaproveitamento de plásticos. Nossa equipe qualificada está em constante 
              desenvolvimento técnico para a entrega de produtos de alta qualidade.
            </p>
            <p className="text-gray-600 mb-8 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              Nossa busca é incessante por materiais de qualidade e inovação de máquinas, 
              garantindo produtos que atendem às mais diversas necessidades de nossos clientes e parceiros.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.4s'
            }}>
                <div className="bg-corporate-blue/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-corporate-blue" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Fabricação Especializada</h4>
                  <p className="text-gray-600">Sacos para gelo, sacolas reforçadas e embalagens personalizadas</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.5s'
            }}>
                <div className="bg-corporate-blue/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-corporate-blue" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Sustentabilidade</h4>
                  <p className="text-gray-600">Foco em reaproveitamento e reciclagem de plásticos</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.6s'
            }}>
                <div className="bg-corporate-blue/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-corporate-blue" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Qualidade Garantida</h4>
                  <p className="text-gray-600">Produtos que atendem aos mais altos padrões de qualidade</p>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="bg-black hover:bg-neutral-800 text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex animate-fade-in" style={{
            animationDelay: '0.7s'
          }}>
              <span>Solicite um Orçamento</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutUs;