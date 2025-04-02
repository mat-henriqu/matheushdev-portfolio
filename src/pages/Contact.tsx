
import React from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Instagram, Mail, Phone, Calendar } from 'lucide-react';

// Importando os componentes refatorados
import ContactCard from '@/components/contact/ContactCard';
import ContactForm from '@/components/contact/ContactForm';
import ContactSidebar from '@/components/contact/ContactSidebar';
import FAQSection from '@/components/contact/FAQSection';

/**
 * Página de Contato
 * 
 * Exibe informações de contato, formulário e FAQs.
 */
const Contact: React.FC = () => {
  return (
    <Layout>
      {/* Cabeçalho da página */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-mathdev-primary/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Entre em <span className="text-mathdev-primary">Contato</span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Estamos prontos para ajudar com seu próximo projeto. Entre em contato
            e vamos transformar suas ideias em realidade.
          </p>
        </div>
      </section>
      
      {/* Cartões de Contato */}
      <section className="py-10 bg-mathdev-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cartão de WhatsApp */}
            <ContactCard 
              icon={Phone}
              title="WhatsApp"
              description="Atendimento rápido via mensagem"
              link="https://wa.me/+5534997638331"
              linkText="+55 (34) 99763-8331"
              external={true}
            />
            
            {/* Cartão de E-mail */}
            <ContactCard 
              icon={Mail}
              title="E-mail"
              description="Para contato formal e orçamentos"
              link="mailto:theush933@gmail.com"
              linkText="theush933@gmail.com"
              external={false}
            />
            
            {/* Cartão de Instagram */}
            <ContactCard 
              icon={Instagram}
              title="Instagram"
              description="Acompanhe nosso trabalho"
              link="https://www.instagram.com/matheushdev_/"
              linkText="@matheushdev_"
              external={true}
            />
            
            {/* Cartão de Calendly - Comentado */}
            {/* Descomente esta seção se quiser adicionar um link do Calendly
            <ContactCard 
              icon={Calendar}
              title="Agendar Reunião"
              description="Marque um horário para conversarmos"
              link="https://calendly.com"
              linkText="Agendar Agora"
              external={true}
            />
            */}
          </div>
        </div>
      </section>
      
      {/* Formulário de Contato */}
      <section className="py-16 bg-mathdev-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <ContactForm />
            
            {/* Barra lateral com informações adicionais */}
            <div className="hidden lg:block">
              <ContactSidebar />
            </div>
          </div>
        </div>
      </section>
      
      {/* Seção de FAQs */}
      <FAQSection />
    </Layout>
  );
};

export default Contact;
