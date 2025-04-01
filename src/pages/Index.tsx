
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/home/Hero';
import ServiceCard from '@/components/services/ServiceCard';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { ServiceItem } from '@/types/cart';

// Usando versões otimizadas das imagens com parâmetros de tamanho e qualidade
const featuredServices: ServiceItem[] = [
  {
    id: 'landing-page',
    title: 'Landing Page',
    description: 'Página única e objetiva, ideal para apresentação rápida de empresas ou profissionais.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 'e-commerce',
    title: 'E-commerce',
    description: 'Lojas online completas com integração de pagamento e gestão de produtos.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 'website-institucional',
    title: 'Website Institucional',
    description: 'Sites completos para empresas que desejam uma presença digital profissional.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=60&w=600',
  }
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Services Section */}
      <section className="py-12 bg-mathdev-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              Serviços <span className="text-mathdev-primary">Destacados</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Soluções web personalizadas para todas as necessidades do seu negócio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/servicos" className="inline-flex items-center text-mathdev-primary hover:underline">
              Ver todos os serviços
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section - versão mais leve */}
      <section className="py-12 bg-mathdev-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Por que escolher a <span className="text-mathdev-primary">MatheusDev</span>?
              </h2>
              
              <ul className="space-y-3">
                {[
                  'Design responsivo para todos os dispositivos',
                  'Código limpo e otimizado para performance',
                  'Suporte técnico contínuo após a entrega',
                  'SEO otimizado para melhor visibilidade',
                  'Integrações com sistemas e APIs'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={18} className="text-mathdev-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <Link to="/sobre" className="btn-primary inline-flex items-center">
                  Conheça mais sobre nós
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=60&w=800" 
                alt="MatheusDev" 
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section - versão simplificada */}
      <section className="py-12 bg-mathdev-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Pronto para transformar sua presença digital?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/+5534997638331" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary px-6 py-2"
            >
              Fale Comigo no WhatsApp
            </a>
            
            <Link to="/contato" className="btn-outlined px-6 py-2">
              Formulário de Contato
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
