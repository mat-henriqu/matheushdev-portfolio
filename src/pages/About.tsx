
import React from 'react';
import Layout from '@/components/Layout';
import { Check, ArrowRight } from 'lucide-react';
import IMG_2152 from '@/assets/img/IMG_2152.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      {/* Header with gradient - already has gradient */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-mathdev-primary/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Sobre <span className="text-mathdev-primary">MatheushDev</span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Conheça mais sobre nossa história, valores e a paixão por criar
            experiências digitais memoráveis.
          </p>
        </div>
      </section>

      {/* Transition gradient */}
      <div className="h-20 bg-gradient-to-b from-transparent to-mathdev-dark"></div>

      {/* About Section */}
      <section className="py-16 bg-mathdev-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-white">
                Nossa <span className="text-mathdev-primary">História</span>
              </h2>

              <p className="mt-4 text-gray-300">
                A MatheushDev nasceu da paixão por criar soluções digitais que realmente
                impactam negócios e pessoas. Desde o início, nossa missão tem sido
                transformar ideias em experiências digitais memoráveis e eficientes.
              </p>

              <p className="mt-4 text-gray-300">
                Combinando expertise técnica com uma abordagem centrada no cliente,
                nos especializamos em desenvolver websites e aplicações web que não
                apenas impressionam visualmente, mas também geram resultados tangíveis.
              </p>

              <p className="mt-4 text-gray-300">
                Hoje, continuamos comprometidos em oferecer soluções digitais de alta
                qualidade, ajudando empresas e profissionais a estabelecerem uma
                presença online impactante e eficaz.
              </p>
            </div>

            <div className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-xl">
              <img
                src={IMG_2152}
                alt="MatheushDev"
                className="object-cover h-96 items-center w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transition gradient */}
      <div className="h-20 bg-gradient-to-b from-mathdev-dark to-mathdev-secondary"></div>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-mathdev-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Missão, Visão e <span className="text-mathdev-primary">Valores</span>
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Nossos princípios fundamentais que guiam cada projeto que desenvolvemos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-mathdev-dark p-6 rounded-lg border border-mathdev-primary/10">
              <h3 className="text-xl font-semibold text-white mb-4">Missão</h3>
              <p className="text-gray-400">
                Transformar ideias em soluções digitais inovadoras que gerem valor real para
                nossos clientes, ajudando-os a alcançar seus objetivos de negócio através
                de uma presença online eficaz.
              </p>
            </div>

            <div className="bg-mathdev-dark p-6 rounded-lg border border-mathdev-primary/10">
              <h3 className="text-xl font-semibold text-white mb-4">Visão</h3>
              <p className="text-gray-400">
                Ser reconhecida como referência em desenvolvimento web, oferecendo soluções
                digitais que combinam excelência técnica, design inovador e resultados mensuráveis.
              </p>
            </div>

            <div className="bg-mathdev-dark p-6 rounded-lg border border-mathdev-primary/10">
              <h3 className="text-xl font-semibold text-white mb-4">Valores</h3>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-start">
                  <Check size={18} className="text-mathdev-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Excelência em cada detalhe</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-mathdev-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Compromisso com resultados</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-mathdev-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Inovação e criatividade</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-mathdev-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Transparência e ética</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-mathdev-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Foco no cliente</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transition gradient */}
      <div className="h-20 bg-gradient-to-b from-mathdev-secondary to-mathdev-dark"></div>

      {/* Skills and Technologies */}
      <section className="py-16 bg-mathdev-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Tecnologias e <span className="text-mathdev-primary">Habilidades</span>
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Contamos com um conjunto robusto de ferramentas e competências
              para realizar projetos de qualquer complexidade.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'HTML5', 'CSS3', 'JavaScript', 'React',
              'Node.js', 'WordPress', 'UI/UX Design', 'Responsive Design',
              'SEO', 'E-commerce', 'API Integration', 'Performance Optimization'
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-mathdev-secondary p-4 rounded-lg border border-mathdev-primary/10 text-center hover:border-mathdev-primary/50 transition-colors"
              >
                <p className="text-white font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition gradient */}
      <div className="h-20 bg-gradient-to-b from-mathdev-dark to-mathdev-primary/10"></div>

      {/* CTA Section */}
      <section className="py-16 bg-mathdev-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">
            Vamos trabalhar juntos?
          </h2>

          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Entre em contato para discutirmos como podemos ajudar a transformar
            suas ideias em projetos de sucesso.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/+5534997638331"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3"
            >
              Fale Comigo
            </a>

            <Link to="/servicos"
              className="inline-flex items-center justify-center btn-outlined px-8 py-3"
            >
              Ver Serviços
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
