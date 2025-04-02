
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
  // Estado para controlar o envio do formulário
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);
    
    // Registra os dados do formulário no console para depuração
    console.log('Formulário enviado:', formData);
    
    // Cria um assunto formatado para o email
    const emailSubject = encodeURIComponent(`Contato do Site: ${formData.subject}`);
    
    // Cria o corpo do email com formatação HTML
    const htmlEmailBody = `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: #6B21A8; border-bottom: 1px solid #eee; padding-bottom: 10px;">Novo Contato Via Site</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px;">Nome:</td>
              <td style="padding: 8px 0;">${formData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${formData.email}" style="color: #6B21A8;">${formData.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Telefone:</td>
              <td style="padding: 8px 0;">${formData.phone || 'Não informado'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Assunto:</td>
              <td style="padding: 8px 0;">${formData.subject}</td>
            </tr>
          </table>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #6B21A8;">Mensagem:</h3>
            <p style="white-space: pre-line;">${formData.message}</p>
          </div>
          
          <p style="font-size: 12px; color: #999; border-top: 1px solid #eee; padding-top: 10px; margin-top: 20px;">
            Esta mensagem foi enviada através do formulário de contato em <a href="https://matheushdev.com" style="color: #6B21A8;">MatheushDev.com</a> em ${new Date().toLocaleString('pt-BR')}
          </p>
        </body>
      </html>
    `;

    // Cria uma versão em texto simples para o corpo do email
    // (necessário porque mailto: não suporta formatação HTML)
    const plainTextEmailBody = encodeURIComponent(
      `NOVO CONTATO VIA SITE\n\n` +
      `Nome: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telefone: ${formData.phone || 'Não informado'}\n` +
      `Assunto: ${formData.subject}\n\n` +
      `MENSAGEM:\n${formData.message}\n\n` +
      `Enviado via formulário de contato do site MatheushDev em ${new Date().toLocaleString('pt-BR')}`
    );
    
    // Abre o cliente de email do usuário com o email pré-preenchido
    window.location.href = `mailto:theush933@gmail.com?subject=${emailSubject}&body=${plainTextEmailBody}`;
    
    // Exibe uma mensagem de sucesso
    toast({
      title: "Mensagem preparada para envio!",
      description: "Seu cliente de email foi aberto com os detalhes do formulário. Por favor, envie a mensagem para completar o contato.",
    });
    
    // Reseta o estado de envio e o formulário após um delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2500);
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
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="animate-pulse">Preparando...</span>
            </>
          ) : (
            <>
              <Send size={18} />
              <span>Enviar Mensagem</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
