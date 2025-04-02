
import React from 'react';
import Layout from '@/components/Layout';
import ServiceCard from '@/components/services/ServiceCard';
import { ServiceItem } from '@/types/cart';
import imgHandsOnNote from "@/assets/img/imgHandsOnNote.avif";

const services: ServiceItem[] = [
  {
    id: 'landing-page',
    title: 'Landing Page',
    description: 'Página única e objetiva, ideal para apresentação rápida de empresas ou profissionais, contendo informações essenciais, botão de contato e elementos de conversão.',
    image: imgHandsOnNote,
  },
  {
    id: 'e-commerce',
    title: 'E-commerce',
    description: 'Desenvolvimento de lojas online completas, com estrutura para vendas de produtos e serviços, layout responsivo e integração com métodos de pagamento.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80',
  },
  {
    id: 'loja-online',
    title: 'Loja Online',
    description: 'Solução para empresas e empreendedores que querem vender online sem a complexidade de um e-commerce robusto, focando na experiência simples e direta do usuário.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
  },
  {
    id: 'pagina-links',
    title: 'Página de Links',
    description: 'Página compacta para reunir e organizar todos os links importantes em um só lugar, ideal para bios de redes sociais e personal branding.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80',
  },
  {
    id: 'website-institucional',
    title: 'Website Institucional',
    description: 'Criação de sites completos para empresas que desejam apresentar seus serviços, história, equipe e formas de contato de maneira profissional.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
  },
  {
    id: 'website-pessoal',
    title: 'Website Pessoal ou Profissional',
    description: 'Desenvolvimento de um site personalizado para destacar sua trajetória, portfólio e serviços, seja para um profissional autônomo ou empresa.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80',
  },
  {
    id: 'portfolio-interativo',
    title: 'Portfólio Interativo',
    description: 'Site personalizado para artistas, designers e fotógrafos exibirem seus trabalhos de maneira visualmente impactante e profissional.',
    image: 'https://images.unsplash.com/photo-1527256671300-cbe10882f030?auto=format&fit=crop&q=80',
  },
  {
    id: 'site-eventos',
    title: 'Site para Eventos',
    description: 'Página dedicada para eventos, conferências ou festas, incluindo agenda, localização, RSVP e informações relevantes.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80',
  }
];


const Services = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-mathdev-primary/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Nossos <span className="text-mathdev-primary">Serviços</span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Desenvolvemos soluções digitais personalizadas para atender às
            necessidades específicas do seu negócio ou projeto pessoal.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-mathdev-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-mathdev-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Nosso <span className="text-mathdev-primary">Processo</span>
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Do conceito ao lançamento, seguimos um processo estruturado
              para garantir o sucesso do seu projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Análise e Briefing',
                description: 'Entendemos suas necessidades, objetivos e público-alvo para criar um plano personalizado.'
              },
              {
                number: '02',
                title: 'Design e Prototipagem',
                description: 'Criamos layouts e protótipos interativos para visualizar o resultado final antes do desenvolvimento.'
              },
              {
                number: '03',
                title: 'Desenvolvimento',
                description: 'Codificamos seu projeto com as melhores práticas e tecnologias adequadas às suas necessidades.'
              },
              {
                number: '04',
                title: 'Lançamento e Suporte',
                description: 'Publicamos seu projeto e oferecemos suporte contínuo para garantir seu funcionamento perfeito.'
              }
            ].map((step, index) => (
              <div key={index} className="bg-mathdev-dark p-6 rounded-lg border border-mathdev-primary/10">
                <div className="text-mathdev-primary text-3xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-mathdev-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">
            Pronto para começar seu projeto?
          </h2>

          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Entre em contato hoje mesmo para discutirmos como podemos
            ajudar a transformar sua ideia em realidade.
          </p>

          <div className="mt-8">
            <a
              href="https://wa.me/+5534997638331"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
