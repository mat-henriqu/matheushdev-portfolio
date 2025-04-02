
import React from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { ExternalLink, ArrowRight } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'E-commerce de Moda',
    type: 'E-commerce',
    description: 'Loja online completa para uma marca de moda emergente, com integração de pagamentos e gestão de estoque.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80',
    link: '#'
  },
  {
    id: 2,
    title: 'Landing Page Corporativa',
    type: 'Landing Page',
    description: 'Página de conversão para uma empresa de consultoria financeira, aumentando as taxas de lead em 35%.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
    link: '#'
  },
  {
    id: 3,
    title: 'Site Institucional',
    type: 'Website Institucional',
    description: 'Website completo para uma clínica médica, incluindo sistema de agendamento online.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    link: '#'
  },
  {
    id: 4,
    title: 'Página de Links para Influenciador',
    type: 'Página de Links',
    description: 'Solução centralizada para um influenciador digital gerenciar todos os seus links em um só lugar.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80',
    link: '#'
  }
];

const Portfolio = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-mathdev-primary/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Nosso <span className="text-mathdev-primary">Portfólio</span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos e como ajudamos
            nossos clientes a alcançarem seus objetivos.
          </p>
        </div>
      </section>
      
      {/* Portfolio Grid */}
      <section className="py-16 bg-mathdev-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="bg-mathdev-secondary border-mathdev-primary/20 overflow-hidden card-hover">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <div className="text-mathdev-primary text-sm font-medium mb-2">
                    {item.type}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4">
                    {item.description}
                  </p>
                  
                  <a 
                    href={item.link} 
                    className="inline-flex items-center text-mathdev-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver projeto
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-mathdev-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              O que nossos <span className="text-mathdev-primary">Clientes</span> dizem
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              A satisfação dos nossos clientes é a nossa maior conquista.
              Confira o que eles têm a dizer sobre nossos serviços.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Maria Silva',
                role: 'CEO, Empresa de Moda',
                testimonial: 'O MatheushDev superou todas as expectativas. Nosso e-commerce teve um aumento de 40% nas vendas após o lançamento do novo site.'
              },
              {
                name: 'João Pereira',
                role: 'Consultor Financeiro',
                testimonial: 'A landing page desenvolvida pelo MatheushDev transformou meu negócio. A taxa de conversão aumentou significativamente.'
              },
              {
                name: 'Ana Costa',
                role: 'Médica, Clínica Saúde Plena',
                testimonial: 'Profissionalismo e qualidade do início ao fim. O site institucional da nossa clínica ficou exatamente como queríamos.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-mathdev-dark p-6 rounded-lg border border-mathdev-primary/10">
                <p className="text-gray-300 italic">
                  "{testimonial.testimonial}"
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-mathdev-primary/20 flex items-center justify-center text-mathdev-primary font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-mathdev-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">
            Quer fazer parte do nosso portfólio?
          </h2>
          
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Entre em contato para discutirmos como podemos transformar
            sua ideia em um projeto de sucesso.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/+5534997638331" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3"
            >
              Solicitar Orçamento
            </a>
            
            <a 
              href="/servicos" 
              className="inline-flex items-center justify-center btn-outlined px-8 py-3"
            >
              Ver Serviços
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
