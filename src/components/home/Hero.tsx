
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-mathdev-primary/10 to-transparent z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-5xl">
            Transforme sua <span className="text-mathdev-primary">Presença Digital</span> com Soluções Web Profissionais
          </h1>
          
          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            Desenvolvimento de websites, landing pages, e-commerce e mais. 
            Crie uma experiência digital que impressiona e converte.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link 
              to="/servicos" 
              className="btn-primary px-8 py-3 flex items-center justify-center"
            >
              Nossos Serviços
              <ArrowRight size={18} className="ml-2" />
            </Link>
            
            <a 
              href="https://wa.me/+5534997638331" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outlined px-8 py-3"
            >
              Fale Comigo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
