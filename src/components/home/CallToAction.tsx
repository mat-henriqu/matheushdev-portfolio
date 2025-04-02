
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

/**
 * Componente de Chamada para Ação (CTA)
 * 
 * Exibe uma seção para incentivar o usuário a entrar em contato
 * ou explorar mais os serviços.
 */
const CallToAction: React.FC = () => {
  return (
    <section className="py-12 bg-mathdev-primary/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Pronto para transformar sua presença digital?
        </h2>

        {/* Botões de ação */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-mathdev-primary hover:bg-mathdev-primary/90">
            <a
              href="https://wa.me/+5534997638331"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Comigo no WhatsApp
            </a>
          </Button>

          <Button asChild variant="outline" className="border-mathdev-primary text-mathdev-primary hover:bg-mathdev-primary/10">
            <Link to="/contato">
              Formulário de Contato
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
