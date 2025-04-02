
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface BenefitItem {
  text: string;
}

interface WhyChooseUsProps {
  benefits: BenefitItem[];
  imageSrc: string;
}

/**
 * Componente de "Por que nos escolher"
 * 
 * Exibe uma lista de benefícios/razões para escolher os serviços,
 * junto com uma imagem e um botão de call-to-action.
 * 
 * @param benefits - Lista de benefícios a serem exibidos
 * @param imageSrc - Caminho da imagem a ser exibida
 */
const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ benefits, imageSrc }) => {
  return (
    <section className="py-12 bg-mathdev-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Conteúdo textual */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Por que fazer com o <span className="text-mathdev-primary">MatheushDev</span>?
            </h2>

            {/* Lista de benefícios */}
            <ul className="space-y-3">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check size={18} className="text-mathdev-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Botão de ação */}
            <div className="mt-6">
              <Button asChild className="bg-mathdev-primary hover:bg-mathdev-primary/90">
                <Link to="/sobre" className="flex items-center">
                  Conheça mais sobre
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Imagem */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={imageSrc}
              alt="MatheushDev"
              className="object-cover h-96 items-center w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
