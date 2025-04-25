import React from 'react';
import { Linkedin, Mail, Instagram } from 'lucide-react';

const team = [
  {
    id: 1,
    name: 'Jefferson Nobre',
    role: 'Fundador',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    delay: '0s'
  }
];

const Team = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-corporate-blue/10 text-corporate-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nosso Time
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Conheça o responsável por trás da JLK Embalagens
          </h2>
          <p className="text-gray-600 text-lg">
            Nossa equipe é comprometida com a excelência na fabricação e reaproveitamento de embalagens plásticas.
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {team.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in max-w-sm mx-auto"
              style={{ animationDelay: member.delay }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-72">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-corporate-blue mb-4">{member.role}</p>
                
                {/* Social Icons */}
                <div className="flex space-x-3">
                  <a 
                    href="https://www.instagram.com/jlkembalagens" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-corporate-blue/10 text-gray-600 hover:text-corporate-blue p-2 rounded-full transition-colors duration-300"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
