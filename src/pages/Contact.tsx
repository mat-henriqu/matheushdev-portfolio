
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { useToast } from '@/components/ui/use-toast';
import { Card } from '@/components/ui/card';
import { Instagram, Mail, Phone, Calendar, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send the form data to your backend or email service
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato o mais breve possível.",
    });
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Layout>
      {/* Header */}
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
      
      {/* Contact Cards */}
      <section className="py-10 bg-mathdev-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-mathdev-secondary border-mathdev-primary/20 p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-mathdev-primary/20 rounded-full flex items-center justify-center mb-4">
                <Phone className="text-mathdev-primary" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-400 mb-4">Atendimento rápido via mensagem</p>
              <a 
                href="https://wa.me/+5534997638331" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-mathdev-primary hover:underline"
              >
                +55 (34) 99763-8331
              </a>
            </Card>
            
            <Card className="bg-mathdev-secondary border-mathdev-primary/20 p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-mathdev-primary/20 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-mathdev-primary" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">E-mail</h3>
              <p className="text-gray-400 mb-4">Para contato formal e orçamentos</p>
              <a 
                href="mailto:contato@matheusdev.com" 
                className="text-mathdev-primary hover:underline"
              >
                contato@matheusdev.com
              </a>
            </Card>
            
            <Card className="bg-mathdev-secondary border-mathdev-primary/20 p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-mathdev-primary/20 rounded-full flex items-center justify-center mb-4">
                <Instagram className="text-mathdev-primary" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">Instagram</h3>
              <p className="text-gray-400 mb-4">Acompanhe nosso trabalho</p>
              <a 
                href="https://www.instagram.com/matheushdev_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-mathdev-primary hover:underline"
              >
                @matheushdev_
              </a>
            </Card>
            
            <Card className="bg-mathdev-secondary border-mathdev-primary/20 p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-mathdev-primary/20 rounded-full flex items-center justify-center mb-4">
                <Calendar className="text-mathdev-primary" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">Agendar Reunião</h3>
              <p className="text-gray-400 mb-4">Marque um horário para conversarmos</p>
              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-mathdev-primary hover:underline"
              >
                Agendar Agora
              </a>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-16 bg-mathdev-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Envie-nos uma <span className="text-mathdev-primary">Mensagem</span>
              </h2>
              
              <p className="text-gray-300 mb-6">
                Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                Estamos ansiosos para ouvir sobre seu projeto e como podemos ajudar.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
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
                    />
                  </div>
                </div>
                
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
                      <option value="Orçamento">Orçamento</option>
                      <option value="Dúvida">Dúvida</option>
                      <option value="Parceria">Parceria</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>
                
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
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary flex items-center justify-center gap-2 px-8 py-3"
                >
                  <Send size={18} />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative h-full w-full rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
                  alt="Contact MatheusDev" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mathdev-dark/80 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Vamos Conversar
                  </h3>
                  <p className="text-gray-300">
                    Estamos prontos para transformar suas ideias em projetos de sucesso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-mathdev-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Perguntas <span className="text-mathdev-primary">Frequentes</span>
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Algumas dúvidas comuns que podem te ajudar a entender melhor nossos serviços.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: 'Qual é o prazo médio para desenvolvimento de um website?',
                answer: 'O prazo varia de acordo com a complexidade do projeto. Em média, uma landing page pode levar de 1 a 2 semanas, enquanto um e-commerce pode levar de 4 a 8 semanas. Durante a fase de briefing, estabelecemos prazos claros para cada etapa do desenvolvimento.'
              },
              {
                question: 'Como funciona o processo de pagamento?',
                answer: 'Trabalhamos geralmente com um modelo de 50% de entrada para iniciar o projeto e 50% na entrega final. Para projetos maiores, podemos estabelecer um cronograma de pagamentos vinculado às entregas de cada fase do desenvolvimento.'
              },
              {
                question: 'Vocês oferecem serviços de manutenção após a entrega do site?',
                answer: 'Sim, oferecemos planos de manutenção mensal que incluem atualizações de segurança, pequenas modificações de conteúdo e suporte técnico. Os detalhes e valores são definidos de acordo com as necessidades específicas de cada projeto.'
              },
              {
                question: 'Posso solicitar modificações durante o processo de desenvolvimento?',
                answer: 'Sim, nossa metodologia de trabalho inclui momentos específicos para feedback e ajustes. Alterações dentro do escopo inicial do projeto são bem-vindas. Mudanças significativas que alteram o escopo podem implicar em ajustes de prazo e orçamento.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-mathdev-dark p-6 rounded-lg border border-mathdev-primary/10">
                <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-400 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
