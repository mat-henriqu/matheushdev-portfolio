
import React, { useRef, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { X, ExternalLink, Trash2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface CartDropdownProps {
  onClose: () => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ onClose }) => {
  const { cart, removeFromCart, updateComments, clearCart } = useCart();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleSendToWhatsApp = () => {
    if (cart.items.length === 0) {
      toast({
        title: "Carrinho vazio",
        description: "Adicione serviços antes de solicitar um orçamento.",
        variant: "destructive"
      });
      return;
    }

    let message = "*Solicitação de Orçamento - MatheusDev*\n\n";
    message += "Olá! Estou interessado nos seguintes serviços:\n\n";

    cart.items.forEach((item, index) => {
      message += `*${index + 1}. ${item.title}*\n`;
      message += `Descrição: ${item.description}\n`;
      
      if (item.comments) {
        message += `Comentários: ${item.comments}\n`;
      }
      
      message += "\n";
    });

    message += "Aguardo seu retorno sobre estes serviços. Obrigado!";

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/+5534997638331?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
    
    // Clear cart and close dropdown after a small delay to ensure WhatsApp opens properly
    setTimeout(() => {
      clearCart();
      onClose();
    }, 500);
    
    toast({
      title: "Orçamento enviado!",
      description: "Sua solicitação foi enviada para o WhatsApp.",
    });
  };

  // Add stopPropagation to prevent clicks inside the dropdown from propagating
  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div 
      ref={dropdownRef}
      className="absolute right-0 mt-2 w-80 sm:w-96 bg-mathdev-secondary border border-mathdev-primary/20 rounded-lg shadow-lg animate-fade-in z-50"
      onClick={handleDropdownClick}
    >
      <div className="p-4 border-b border-mathdev-primary/20">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-white">Carrinho de Serviços</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={18} />
          </button>
        </div>
      </div>

      <div className="max-h-80 overflow-y-auto p-4">
        {cart.items.length === 0 ? (
          <p className="text-center text-gray-400 py-4">Seu carrinho está vazio</p>
        ) : (
          <ul className="space-y-4">
            {cart.items.map((item) => (
              <li key={item.id} className="border-b border-mathdev-primary/10 pb-4">
                <div className="flex justify-between">
                  <h4 className="font-medium text-white">{item.title}</h4>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                
                <div className="mt-2">
                  <label className="text-sm text-gray-300 block mb-1">
                    Adicionar comentários:
                  </label>
                  <textarea 
                    value={item.comments || ''}
                    onChange={(e) => updateComments(item.id, e.target.value)}
                    className="w-full rounded bg-mathdev-dark border border-mathdev-primary/20 text-white p-2 text-sm"
                    placeholder="Tamanho, funcionalidades específicas, prazo, etc."
                    rows={2}
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="p-4 border-t border-mathdev-primary/20">
        <button
          onClick={handleSendToWhatsApp}
          className="w-full bg-mathdev-primary text-white py-2 rounded flex items-center justify-center space-x-2 hover:bg-mathdev-primary/90"
          disabled={cart.items.length === 0}
        >
          <span>Solicitar Orçamento</span>
          <ExternalLink size={16} />
        </button>
      </div>
    </div>
  );
};

export default CartDropdown;
