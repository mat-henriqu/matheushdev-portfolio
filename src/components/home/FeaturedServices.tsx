
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '@/types/cart';
import ServiceCard from '@/components/services/ServiceCard';

interface FeaturedServicesProps {
  services: ServiceItem[];
}

/**
 * Componente de Serviços Destacados
 * 
 * Exibe uma grade de serviços em destaque na página inicial
 * com um link para a página completa de serviços.
 * 
 * @param services - Lista de serviços a serem exibidos
 */
const FeaturedServices: React.FC<FeaturedServicesProps> = ({ services }) => {
  return (
    <section className="py-12 bg-mathdev-dark">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">
            Serviços <span className="text-mathdev-primary">Destacados</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Soluções web personalizadas para todas as necessidades do seu negócio.
          </p>
        </div>

        {/* Grade de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Link para mais serviços */}
        <div className="text-center mt-8">
          <Link to="/servicos" className="inline-flex items-center text-mathdev-primary hover:underline">
            Ver todos os serviços
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
