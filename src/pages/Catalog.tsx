import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import FloatingButton from '../components/FloatingButton';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Catalog = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 1,
      name: "Saco Plástico Cinza 35x45",
      image: "/lovable-uploads/f21ae426-1b43-4196-86a1-58c6d2725e73.png"
    },
    {
      id: 2,
      name: "Sacola Verde com Alça",
      image: "/lovable-uploads/dd8fe9ee-56fb-4678-a78c-32b4684dd839.png"
    },
    {
      id: 3,
      name: "Sacolas Douradas com Alça",
      image: "/lovable-uploads/8d19388e-0535-4328-b9e3-a7d910bf18ef.png"
    },
    {
      id: 4,
      name: "Sacola Transparente com Alça",
      image: "/lovable-uploads/4427d482-4685-416f-89a7-b914878d5402.png"
    },
    {
      id: 5,
      name: "Sacola Preta Reforçada",
      image: "/lovable-uploads/ec4f3906-8fbe-4fbe-8631-1b98f5c6dba9.png"
    },
    {
      id: 6,
      name: "Sacola Amarela com Alça",
      image: "/lovable-uploads/fb398ed7-7174-469f-883f-2c526f329c53.png"
    },
    {
      id: 7,
      name: "Sacola Preta com Alça",
      image: "/lovable-uploads/00d2ca43-1b20-4db5-b221-ff6781295ffd.png"
    },
    {
      id: 8,
      name: "Sacola Branca com Alça",
      image: "/lovable-uploads/1dc642e5-1b1e-4da3-aa97-f617bf782388.png"
    },
    {
      id: 9,
      name: "Sacola Preta Grande",
      image: "/lovable-uploads/d65d1b8b-a7fd-4e59-9b40-3c10c59a887a.png"
    },
    {
      id: 10,
      name: "Sacola Preta Extra Grande",
      image: "/lovable-uploads/4cb139f8-9672-45bd-be6c-b2812f0bebda.png"
    },
    {
      id: 11,
      name: "Saco Plástico Verde Industrial",
      image: "/lovable-uploads/d25a6694-0ae7-4721-a043-e2a3e3b368c3.png"
    },
    {
      id: 12,
      name: "Sacola Plástica Transparente",
      image: "/lovable-uploads/10afad40-3e15-4991-8eb7-5fb52f8ec6d0.png"
    },
    {
      id: 13,
      name: "Saco de Lixo Branco Reforçado",
      image: "/lovable-uploads/2bd73b6a-aba9-40e3-8226-060f053cfd8b.png"
    },
    {
      id: 15,
      name: "Saco de Gelo Personalizado",
      image: "/lovable-uploads/653a3495-395e-4a09-adee-c633ad55f5e9.png"
    }
  ];

  const handleWhatsAppClick = (productName: string) => {
    const message = `Olá! Gostaria de solicitar um orçamento para: ${productName}`;
    const whatsappUrl = `https://wa.me/5521992137582?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16 sm:pt-20 lg:pt-24">
        {/* Hero Section with background image */}
        <section className="relative bg-[url('/lovable-uploads/184a8e1b-366d-469f-8080-3a9caf90469c.png')] bg-cover bg-center py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="absolute inset-0 bg-black/60" />
          <div className="container-custom relative z-10">
            <div className="text-center text-white px-2 sm:px-4">
              <Link 
                to="/" 
                className="inline-flex items-center mb-6 sm:mb-8 md:mb-10 text-white hover:text-gray-200 transition-colors"
              >
                <ArrowLeft size={16} className="mr-2" />
                <span className="text-sm sm:text-base">Voltar ao Início</span>
              </Link>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                Catálogo de Produtos
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                Confira nossa linha completa de embalagens plásticas de alta qualidade
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
              {products.map(product => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 max-w-sm mx-auto w-full"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                      loading="lazy" 
                    />
                  </div>
                  <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 text-center min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem] flex items-center justify-center leading-tight px-1">
                      {product.name}
                    </h3>
                    <Button 
                      onClick={() => handleWhatsAppClick(product.name)} 
                      className="w-full text-white text-xs sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3 bg-gray-600 hover:bg-gray-500 transition-colors duration-300 font-medium"
                    >
                      Solicite um Orçamento
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Catalog;
