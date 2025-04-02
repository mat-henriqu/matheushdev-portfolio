
import React from 'react';
import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

// Interface para propriedades do componente ContactCard
interface ContactCardProps {
  /**
   * Ícone do Lucide para o contato
   */
  icon: LucideIcon;
  /**
   * Título do cartão de contato
   */
  title: string;
  /**
   * Descrição do método de contato
   */
  description: string;
  /**
   * Link para o método de contato
   */
  link: string;
  /**
   * Texto do link
   */
  linkText: string;
  /**
   * Define se o link abre em uma nova janela
   */
  external?: boolean;
}

/**
 * Componente de Cartão de Contato
 * 
 * Exibe um cartão com informações de contato, incluindo ícone, 
 * título, descrição e link.
 */
const ContactCard: React.FC<ContactCardProps> = ({
  icon: Icon,
  title,
  description,
  link,
  linkText,
  external = true
}) => {
  return (
    <Card className="bg-mathdev-secondary border-mathdev-primary/20 p-6 flex flex-col items-center text-center">
      {/* Container do ícone */}
      <div className="w-12 h-12 bg-mathdev-primary/20 rounded-full flex items-center justify-center mb-4">
        <Icon className="text-mathdev-primary" size={24} />
      </div>
      
      {/* Informações do contato */}
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      
      {/* Link do contato */}
      <a 
        href={link} 
        target={external ? "_blank" : "_self"} 
        rel={external ? "noopener noreferrer" : ""}
        className="text-mathdev-primary hover:underline"
      >
        {linkText}
      </a>
    </Card>
  );
};

export default ContactCard;
