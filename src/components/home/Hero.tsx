
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 relative">
      {/* Background gradient simplificado */}
      <div className="absolute inset-0 bg-gradient-to-b from-mathdev-primary/10 to-transparent z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            Transforme sua <span className="text-mathdev-primary">Presença Digital</span>
          </h1>

          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Desenvolvimento de website, landing page, e-commerce/loja virtual e muito mais.
            <br />
            Crie uma experiência digital que impressiona.
          </p>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link
              to="/servicos"
              className="btn-primary px-6 py-2 flex items-center justify-center"
            >
              Serviços
              <ArrowRight size={16} className="ml-2" />
            </Link>

            <Link
              to="/portfolio"
              className="btn-outlined px-6 py-2 flex items-center justify-center"
            >
              Ver Portfólio
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
