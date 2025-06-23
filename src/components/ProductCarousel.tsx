import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
      image: "/lovable-uploads/ac891e3c-e4ba-4c0f-b67e-b50b3e922da1.png"
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
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
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
              {products.map((product, index) => (
                <CarouselItem 
                  key={product.id} 
                  className={`transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden mx-auto">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover" 
                        loading="lazy" 
                      />
                    </div>
                    <div className="p-4 sm:p-6 text-center">
                      <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Indicators */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
            {products.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Ir para produto ${index + 1}`}
              />
            ))}
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
    </section>
  );
};

export default ProductCarousel;
