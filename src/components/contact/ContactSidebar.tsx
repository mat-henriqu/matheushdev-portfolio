
import React from 'react';

/**
 * Componente de Barra Lateral do Contato
 * 
 * Exibe informações adicionais e benefícios ao lado do formulário de contato.
 */
const ContactSidebar: React.FC = () => {
  return (
    <div className="relative h-full w-full rounded-lg overflow-hidden shadow-xl">
      {/* Imagem de fundo */}
      <img 
        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
        alt="Contact MatheushDev" 
        className="w-full h-full object-cover"
      />
      
      {/* Overlay com gradiente e informações */}
      <div className="absolute inset-0 bg-gradient-to-t from-mathdev-dark/90 via-mathdev-dark/40 to-transparent flex flex-col justify-end p-8">
        <div className="bg-mathdev-secondary/80 backdrop-blur-sm p-6 rounded-lg border border-mathdev-primary/20">
          <h3 className="text-2xl font-bold text-white mb-3">
            Vamos Transformar sua Ideia em Realidade
          </h3>
          <p className="text-gray-200 mb-4">
            Estou pronto para ajudar a desenvolver sua presença digital com soluções personalizadas e de alta qualidade.
          </p>
          
          {/* Lista de benefícios */}
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-gray-200">
              <span className="text-mathdev-primary">✓</span> Websites responsivos e modernos
            </li>
            <li className="flex items-center gap-2 text-gray-200">
              <span className="text-mathdev-primary">✓</span> Aplicações web personalizadas
            </li>
            <li className="flex items-center gap-2 text-gray-200">
              <span className="text-mathdev-primary">✓</span> Interfaces intuitivas e atraentes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactSidebar;
