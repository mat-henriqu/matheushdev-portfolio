
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

/**
 * Interface para os dados do formulário de contato
 */
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

/**
 * Componente de Formulário de Contato
 * 
 * Permite que o usuário envie uma mensagem através de um formulário
 * que é encaminhado para o email configurado.
 */
const ContactForm: React.FC = () => {
  const { toast } = useToast();
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  /**
   * Manipula as mudanças nos campos do formulário
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  /**
   * Manipula o envio do formulário
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailSubject = encodeURIComponent(`Contato do Site: ${formData.subject}`);
    const plainTextEmailBody = encodeURIComponent(
      `NOVO CONTATO VIA SITE\n\n` +
      `Nome: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telefone: ${formData.phone || 'Não informado'}\n` +
      `Assunto: ${formData.subject}\n\n` +
      `MENSAGEM:\n${formData.message}\n\n` +
      `Enviado via formulário de contato do site MatheushDev em ${new Date().toLocaleString('pt-BR')}`
    );
    
    window.location.href = `mailto:theush933@gmail.com?subject=${emailSubject}&body=${plainTextEmailBody}`;

    toast({
      title: "E-mail preparado para envio",
      description: "Revise e envie a mensagem no seu aplicativo de e-mail. Os dados permanecem neste formulário.",
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-6">
        Envie-nos uma <span className="text-mathdev-primary">Mensagem</span>
      </h2>
      
      <p className="text-gray-300 mb-6">
        Preencha o formulário abaixo e entraremos em contato o mais breve possível.
        Estamos ansiosos para ouvir sobre seu projeto e como podemos ajudar.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campos de nome e email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-white mb-1">Nome *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-mathdev-secondary border border-mathdev-primary/20 text-white focus:border-mathdev-primary outline-none"
              placeholder="Seu nome completo"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-white mb-1">E-mail *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-mathdev-secondary border border-mathdev-primary/20 text-white focus:border-mathdev-primary outline-none"
              placeholder="seu@email.com"
            />
          </div>
        </div>
        
        {/* Campos de telefone e assunto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-white mb-1">Telefone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-mathdev-secondary border border-mathdev-primary/20 text-white focus:border-mathdev-primary outline-none"
              placeholder="(00) 00000-0000"
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-white mb-1">Assunto *</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-mathdev-secondary border border-mathdev-primary/20 text-white focus:border-mathdev-primary outline-none"
            >
              <option value="">Selecione um assunto</option>
              <option value="Orçamento de Website">Orçamento de Website</option>
              <option value="Desenvolvimento de Aplicativo">Desenvolvimento de Aplicativo</option>
              <option value="Redesign de Site">Redesign de Site</option>
              <option value="Consultoria">Consultoria</option>
              <option value="Dúvida">Dúvida</option>
              <option value="Parceria">Parceria</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
        </div>
        
        {/* Campo de mensagem */}
        <div>
          <label htmlFor="message" className="block text-white mb-1">Mensagem *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 rounded-md bg-mathdev-secondary border border-mathdev-primary/20 text-white focus:border-mathdev-primary outline-none resize-none"
            placeholder="Descreva seu projeto ou dúvida em detalhes..."
          ></textarea>
        </div>
        
        {/* Botão de envio */}
        <button
          type="submit"
          className="btn-primary flex items-center justify-center gap-2 px-8 py-3 w-full sm:w-auto"
        >
          <Send size={18} />
          <span>Preparar E-mail</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
