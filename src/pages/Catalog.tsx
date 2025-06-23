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
      name: "Sacola Preta Reforçada",
      image: "/lovable-uploads/aa807dba-fc3d-40da-a9bc-04acef9536b3.png"
    },
    {
      id: 2,
      name: "Sacola Amarela com Alça",
      image: "/lovable-uploads/9fbf0481-158f-4ae8-add2-680cce54822e.png"
    },
    {
      id: 3,
      name: "Sacola Branca com Alça",
      image: "/lovable-uploads/1ad9495d-1cda-45d3-afcf-d62c5f06c0ec.png"
    },
    {
      id: 4,
      name: "Sacola Plástica Preta",
      image: "/lovable-uploads/10571974-9cb4-4a97-882c-17a01ae5b259.png"
    },
    {
      id: 5,
      name: "Sacola Plástica Amarela",
      image: "/lovable-uploads/37a3fe8f-721d-4410-89f0-116d1c4fab14.png"
    },
    {
      id: 6,
      name: "Saco para Gelo 5kg",
      image: "/lovable-uploads/e4838593-9272-4bb7-bf3d-98816751963a.png"
    },
    {
      id: 7,
      name: "Sacos para Cesta Básica",
      image: "/lovable-uploads/d964abd8-ac7a-4b7a-b4bb-bc6178194264.png"
    },
    {
      id: 8,
      name: "Sacola Preta reforçada",
      image: "/lovable-uploads/19d538ef-80c8-456b-a776-002aca714676.png"
    },
    {
      id: 9,
      name: "Sacola Plástica Branca",
      image: "/lovable-uploads/765c8ba8-19c8-4af2-9ebf-91b9a626d318.png"
    },
    {
      id: 10,
      name: "Sacola Transparente",
      image: "/lovable-uploads/c3628635-3afe-4a06-b7d4-8f58d159c292.png"
    },
    {
      id: 11,
      name: "Sacolas Amarelas com Alça",
      image: "/lovable-uploads/0a1ed76d-565a-4a0a-8138-e51720dd595f.png"
    },
    {
      id: 12,
      name: "Sacola Verde com Alça",
      image: "/lovable-uploads/201669d5-3f2f-4799-beb8-4815354959a4.png"
    },
    {
      id: 13,
      name: "Saco Plástico Cinza 35x45",
      image: "/lovable-uploads/bf40dc32-7638-4702-8a4e-1fc93fc62931.png"
    },
    {
      id: 14,
      name: "Sacola Verde Reforçada",
      image: "/lovable-uploads/650dcaee-b217-4aec-858b-6d5e87e45834.png"
    },
    {
      id: 15,
      name: "Sacolas Amarelas Bobina",
      image: "/lovable-uploads/b21f3813-80c5-45c9-86c9-528d0ab3306e.png"
    },
    {
      id: 16,
      name: "Saco para Gelo Transparente",
      image: "/lovable-uploads/a463b577-38fc-472b-ba40-97bd7bf3e9e1.png"
    },
    {
      id: 17,
      name: "Sacola Verde Resistente",
      image: "/lovable-uploads/d747c0ce-c738-4687-b8ae-0151cf4df183.png"
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
