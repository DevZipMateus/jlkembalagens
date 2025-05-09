
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container-custom">
        {/* Top bar */}
        <div className={`hidden lg:flex justify-between items-center mb-4 text-sm ${
          isScrolled ? 'text-gray-700' : 'text-white'
        }`}>
          <div className="flex items-center space-x-6">
            <a href="tel:+5521992137582" className={`flex items-center transition-colors ${
              isScrolled ? 'hover:text-gray-900' : 'hover:text-gray-200'
            }`}>
              <Phone size={16} className="mr-2" />
              (21) 99213-7582
            </a>
            <a href="mailto:jefinhojlk@gmail.com" className={`flex items-center transition-colors ${
              isScrolled ? 'hover:text-gray-900' : 'hover:text-gray-200'
            }`}>
              <Mail size={16} className="mr-2" />
              jefinhojlk@gmail.com
            </a>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2" />
              Rua Guaiuba, 359
            </div>
          </div>
          <a href="https://www.instagram.com/jlkembalagens" 
             target="_blank" 
             rel="noopener noreferrer"
             className={`transition-colors ${
               isScrolled ? 'hover:text-gray-900' : 'hover:text-gray-200'
             }`}>
            @jlkembalagens
          </a>
        </div>

        {/* Main navigation */}
        <nav className="flex items-center justify-end">
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <a href="#home" className={`nav-link ${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
            }`}>Início</a>
            <a href="#about" className={`nav-link ${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
            }`}>Sobre</a>
            <a href="#products" className={`nav-link ${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
            }`}>Produtos</a>
            <a href="#contact" className={`nav-link ${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
            }`}>Contato</a>
            <a href="https://wa.me/5521992137582" 
               target="_blank" 
               rel="noopener noreferrer"
               className="btn-primary ml-4">
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 hover:bg-white/10 rounded-md ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}>
          <div className="container-custom py-4 space-y-4">
            <a href="#home" className="block nav-link">Início</a>
            <a href="#about" className="block nav-link">Sobre</a>
            <a href="#products" className="block nav-link">Produtos</a>
            <a href="#contact" className="block nav-link">Contato</a>
            <div className="pt-4 space-y-3 border-t border-gray-100">
              <a href="tel:+5521992137582" className="block text-sm text-gray-600 hover:text-gray-900">
                <Phone size={16} className="inline mr-2" />
                (21) 99213-7582
              </a>
              <a href="mailto:jefinhojlk@gmail.com" className="block text-sm text-gray-600 hover:text-gray-900">
                <Mail size={16} className="inline mr-2" />
                jefinhojlk@gmail.com
              </a>
              <a href="https://www.instagram.com/jlkembalagens" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="block text-sm text-gray-600 hover:text-gray-900">
                @jlkembalagens
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
