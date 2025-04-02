
import React from 'react';
import Layout from '@/components/Layout';

// Componentes da página inicial
import Hero from '@/components/home/Hero';
import FeaturedServices from '@/components/home/FeaturedServices';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CallToAction from '@/components/home/CallToAction';

// Imagens e tipos
import { ServiceItem } from '@/types/cart';
import img2152 from "@/assets/img/IMG_2152.png";
import imgHandsOnNote from "@/assets/img/imgHandsOnNote.avif";

/**
 * Página Inicial
 * 
 * Esta é a página principal do site, exibindo uma visão geral
 * dos serviços e informações sobre o desenvolvedor.
 */
const Index: React.FC = () => {
  // Serviços em destaque
  const featuredServices: ServiceItem[] = [
    {
      id: 'landing-page',
      title: 'Landing Page',
      description: 'Página única e objetiva, ideal para apresentação rápida de empresas ou profissionais.',
      image: imgHandsOnNote,
    },
    {
      id: 'e-commerce',
      title: 'E-commerce',
      description: 'Lojas online completas com integração de pagamento e gestão de produtos.',
      image: imgHandsOnNote,
    },
    {
      id: 'website-institucional',
      title: 'Website Institucional',
      description: 'Sites completos para empresas que desejam uma presença digital profissional.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=60&w=600',
    }
  ];

  // Benefícios/razões para escolher
  const benefits = [
    { text: 'Design responsivo para todos os dispositivos' },
    { text: 'Código limpo e otimizado para performance' },
    { text: 'Suporte técnico contínuo após a entrega' },
    { text: 'SEO otimizado para melhor visibilidade' },
    { text: 'Integrações com sistemas e APIs' }
  ];

  return (
    <Layout>
      {/* Seção Hero - Apresentação principal */}
      <Hero />
      
      {/* Seção de serviços em destaque */}
      <FeaturedServices services={featuredServices} />
      
      {/* Seção "Por que nos escolher" */}
      <WhyChooseUs benefits={benefits} imageSrc={img2152} />
      
      {/* Seção de chamada para ação */}
      <CallToAction />
    </Layout>
  );
};

export default Index;
