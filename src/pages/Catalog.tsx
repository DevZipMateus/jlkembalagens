
import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import FloatingButton from '../components/FloatingButton';
import { Button } from '@/components/ui/button';

const Catalog = () => {
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
      name: "Sacola Metalizada",
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
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container-custom">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Catálogo de Produtos
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Confira nossa linha completa de embalagens plásticas de alta qualidade
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                      {product.name}
                    </h3>
                    <Button
                      onClick={() => handleWhatsAppClick(product.name)}
                      className="w-full bg-[#25D366] hover:bg-[#1EA952] text-white"
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
