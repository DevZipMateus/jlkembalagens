import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = [{
    id: 1,
    name: "Sacola Preta Reforçada",
    image: "/lovable-uploads/aa807dba-fc3d-40da-a9bc-04acef9536b3.png"
  }, {
    id: 2,
    name: "Sacola Amarela com Alça",
    image: "/lovable-uploads/9fbf0481-158f-4ae8-add2-680cce54822e.png"
  }, {
    id: 3,
    name: "Sacola Branca com Alça",
    image: "/lovable-uploads/1ad9495d-1cda-45d3-afcf-d62c5f06c0ec.png"
  }, {
    id: 4,
    name: "Sacola Plástica Preta",
    image: "/lovable-uploads/10571974-9cb4-4a97-882c-17a01ae5b259.png"
  }, {
    id: 5,
    name: "Sacola Plástica Amarela",
    image: "/lovable-uploads/37a3fe8f-721d-4410-89f0-116d1c4fab14.png"
  }, {
    id: 6,
    name: "Saco para Gelo 5kg",
    image: "/lovable-uploads/e4838593-9272-4bb7-bf3d-98816751963a.png"
  }, {
    id: 7,
    name: "Sacos para Cesta Básica",
    image: "/lovable-uploads/d964abd8-ac7a-4b7a-b4bb-bc6178194264.png"
  }, {
    id: 8,
    name: "Sacola Metalizada",
    image: "/lovable-uploads/19d538ef-80c8-456b-a776-002aca714676.png"
  }, {
    id: 9,
    name: "Sacola Plástica Branca",
    image: "/lovable-uploads/765c8ba8-19c8-4af2-9ebf-91b9a626d318.png"
  }, {
    id: 10,
    name: "Sacola Transparente",
    image: "/lovable-uploads/c3628635-3afe-4a06-b7d4-8f58d159c292.png"
  }, {
    id: 11,
    name: "Sacolas Amarelas com Alça",
    image: "/lovable-uploads/0a1ed76d-565a-4a0a-8138-e51720dd595f.png"
  }, {
    id: 12,
    name: "Sacola Verde com Alça",
    image: "/lovable-uploads/201669d5-3f2f-4799-beb8-4815354959a4.png"
  }, {
    id: 13,
    name: "Saco Plástico Cinza 35x45",
    image: "/lovable-uploads/bf40dc32-7638-4702-8a4e-1fc93fc62931.png"
  }, {
    id: 14,
    name: "Sacola Verde Reforçada",
    image: "/lovable-uploads/650dcaee-b217-4aec-858b-6d5e87e45834.png"
  }, {
    id: 15,
    name: "Sacolas Amarelas Bobina",
    image: "/lovable-uploads/b21f3813-80c5-45c9-86c9-528d0ab3306e.png"
  }, {
    id: 16,
    name: "Saco para Gelo Transparente",
    image: "/lovable-uploads/a463b577-38fc-472b-ba40-97bd7bf3e9e1.png"
  }, {
    id: 17,
    name: "Sacola Verde Resistente",
    image: "/lovable-uploads/d747c0ce-c738-4687-b8ae-0151cf4df183.png"
  }];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length]);
  return <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Nossos Produtos
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Confira nossa linha completa de embalagens plásticas de alta qualidade
          </p>
        </div>
        
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="relative">
              {products.map((product, index) => <CarouselItem key={product.id} className={`transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden mx-auto">
                    <div className="aspect-square overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="p-4 sm:p-6 text-center">
                      <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
          </Carousel>
          
          {/* Indicators */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
            {products.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`} aria-label={`Ir para produto ${index + 1}`} />)}
          </div>
        </div>

        {/* Catalog Button */}
        <div className="text-center mt-8 sm:mt-12">
          <Link to="/catalogo">
            <Button className="text-white px-6 py-3 text-lg font-semibold rounded-lg transition-colors duration-300 bg-gray-700 hover:bg-gray-600">
              Confira nosso catálogo
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};
export default ProductCarousel;