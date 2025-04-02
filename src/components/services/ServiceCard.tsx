
import React from 'react';
import { Card } from '@/components/ui/card';
import { useCart } from '@/context/CartContext';
import { ServiceItem } from '@/types/cart';
import { useToast } from '@/components/ui/use-toast';
import { ShoppingCart, ExternalLink } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(service);
    toast({
      title: "Serviço adicionado",
      description: `${service.title} foi adicionado ao seu carrinho.`,
    });
  };

  const handleDirectWhatsApp = () => {
    const message = encodeURIComponent(
      `E ai, Matheus! Estou interessado no serviço: ${service.title}.\n\nGostaria de mais informações e um orçamento para este serviço.`
    );
    window.open(`https://wa.me/+5534997638331?text=${message}`, '_blank');
  };

  return (
    <Card className="bg-mathdev-secondary border-mathdev-primary/20 overflow-hidden card-hover">
      {/* Image Section
      <div className="aspect-video overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
       */}

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{service.title}</h3>

        <p className="mt-2 text-gray-400 text-sm">
          {service.description}
        </p>

        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <button
            onClick={handleAddToCart}
            className="btn-primary flex-1 flex items-center justify-center gap-2"
          >
            <ShoppingCart size={16} />
            <span>Adicionar</span>
          </button>

          <button
            onClick={handleDirectWhatsApp}
            className="btn-outlined flex-1 flex items-center justify-center gap-2"
          >
            <ExternalLink size={16} />
            <span>Orçamento</span>
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
