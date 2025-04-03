
import React from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { ExternalLink, ArrowRight } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'Website Institucional - Psicólogo',
    type: 'Website Institucional',
    description: 'Site profissional completo desenvolvido para um psicólogo clínico, com design minimalista e acolhedor. Inclui apresentação de serviços, blog com artigos informativos, formulário de contato personalizado e integração com sistema de agendamento.',
    link: 'https://psijoaocorrea.site'
  },
  {
    id: 2,
    title: 'Página de Links Pessoal',
    type: 'Página de Links',
    description: 'Solução elegante e funcional para centralizar todos os links importantes em um só lugar. Design responsivo com animações suaves, personalização de cores e ícones, e compatibilidade total com dispositivos móveis. Ideal para criadores de conteúdo.',
    link: 'https://mat-henriqu.github.io/link-tree/'
  },
  {
    id: 3,
    title: 'Website Pessoal e Portfólio',
    type: 'Website Pessoal',
    description: 'Portfólio digital moderno e interativo que funciona como um currículo online expandido. Apresenta projetos, habilidades técnicas e experiência profissional em um layout dinâmico com transições animadas e design adaptativo para qualquer dispositivo.',
    link: 'https://mat-henriqu.netlify.app'
  }
];

const Portfolio = () => {
  return (
    <Layout>
      {/* Header com gradient suave */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-mathdev-primary/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Nosso <span className="text-mathdev-primary">Portfólio</span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Projetos reais desenvolvidos com dedicação e expertise técnica.
            Cada solução é personalizada para atender às necessidades específicas de cada cliente.
          </p>
        </div>
      </section>

      {/* Área de transição entre o header e o grid 
      <div className="h-20 bg-gradient-to-b from-transparent to-mathdev-dark"></div>
      */}
      {/* Portfolio Grid */}
      <section className="py-16 bg-mathdev-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="bg-mathdev-secondary border-mathdev-primary/20 overflow-hidden card-hover">
                {/* Card Header with gradient background 
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                */}

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
      {/* 
      Área de transição entre o grid e os depoimentos 
      <div className="h-20 bg-gradient-to-b from-mathdev-dark to-mathdev-secondary"></div>

       Testimonials Section with enhanced content 
      <section className="py-16 bg-mathdev-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              O que nossos <span className="text-mathdev-primary">Clientes</span> dizem
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              A satisfação dos nossos clientes é nossa prioridade.
              Confira alguns depoimentos de quem já transformou sua presença digital conosco.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'João Correa',
                role: 'Psicólogo Clínico',
                testimonial: 'Meu site institucional superou todas as expectativas. O Matheus entendeu perfeitamente o que eu precisava para minha clínica de psicologia e entregou um design elegante e funcional que tem gerado muitos contatos de novos pacientes.'
              },
              {
                name: 'Lucas Pereira',
                role: 'Designer Digital',
                testimonial: 'A página de links desenvolvida pelo MatheushDev revolucionou minha presença online. O processo foi rápido, com comunicação clara, e o resultado final ficou muito além do que eu esperava. Agora consigo direcionar meu público de forma muito mais eficiente.'
              },
              {
                name: 'Ana Costa',
                role: 'Empreendedora',
                testimonial: 'O e-commerce desenvolvido para minha marca transformou meu negócio. A interface intuitiva e a integração perfeita com os sistemas de pagamento facilitaram tanto para mim quanto para meus clientes. As vendas aumentaram consideravelmente após o lançamento do site.'
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
      */}

      {/* Área de transição entre os depoimentos e o CTA */}
      <div className="h-20 bg-gradient-to-b from-mathdev-dark to-mathdev-primary/10"></div>

      {/* Enhanced CTA Section */}
      <section className="py-16 bg-mathdev-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">
            Quer transformar sua presença digital?
          </h2>

          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Estamos prontos para desenvolver uma solução personalizada que atenda
            perfeitamente às necessidades do seu negócio ou projeto pessoal.
            Vamos conversar sobre como podemos ajudar você a se destacar online.
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
              href="/matheushdev-potfolio/servicos"
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
