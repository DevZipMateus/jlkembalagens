
import React, { useEffect } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Hero from '../components/Hero';
import ProductCarousel from '../components/ProductCarousel';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Values from '../components/Values';
import Contact from '../components/Contact';
import FloatingButton from '../components/FloatingButton';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* SEO Meta Tags */}
      <head>
        <title>JLK Embalagens Plásticas | Fabricação de Embalagens no Rio de Janeiro</title>
        <meta name="description" content="Empresa especializada em fabricação e reaproveitamento de embalagens plásticas no Rio de Janeiro. Sacos para gelo, sacolas reforçadas e embalagens personalizadas." />
        <meta name="keywords" content="embalagens plásticas recicláveis, produção de embalagens Rio de Janeiro, embalagens personalizadas, sacos para gelo, sacolas reforçadas, sacos para cesta básica" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="JLK Embalagens Plásticas | Fabricação de Embalagens no Rio de Janeiro" />
        <meta property="og:description" content="Empresa especializada em fabricação e reaproveitamento de embalagens plásticas no Rio de Janeiro. Sacos para gelo, sacolas reforçadas e embalagens personalizadas." />
        <meta property="og:image" content="/lovable-uploads/184a8e1b-366d-469f-8080-3a9caf90469c.png" />
        <meta property="og:url" content="https://jlkembalagens.com.br" />
        <link rel="canonical" href="https://jlkembalagens.com.br" />
      </head>
      
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <ProductCarousel />
        <Services />
        <AboutUs />
        <Values />
        <Contact />
      </main>
      
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;
