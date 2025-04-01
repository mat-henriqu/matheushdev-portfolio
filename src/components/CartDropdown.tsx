
import React, { useRef } from 'react';
import { useCart } from '@/context/CartContext';
import { X, ExternalLink, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CartDropdownProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ open, onOpenChange }) => {
  const { cart, removeFromCart, updateComments, clearCart } = useCart();
  const { toast } = useToast();

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
      onOpenChange(false);
    }, 500);
    
    toast({
      title: "Orçamento enviado!",
      description: "Sua solicitação foi enviada para o WhatsApp.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-mathdev-secondary border border-mathdev-primary/20 text-white max-w-[450px] w-[90vw] max-h-[85vh] flex flex-col">
        <DialogHeader className="border-b border-mathdev-primary/20 pb-4">
          <DialogTitle className="text-white">Carrinho de Serviços</DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto py-4 px-4">
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

        <div className="p-4 border-t border-mathdev-primary/20 mt-auto">
          <button
            onClick={handleSendToWhatsApp}
            className="w-full bg-mathdev-primary text-white py-2 rounded flex items-center justify-center space-x-2 hover:bg-mathdev-primary/90"
            disabled={cart.items.length === 0}
          >
            <span>Solicitar Orçamento</span>
            <ExternalLink size={16} />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CartDropdown;
