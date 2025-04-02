
import React from 'react';

/**
 * Interface para a estrutura de um item de FAQ
 */
interface FAQItem {
  /**
   * A pergunta
   */
  question: string;
  /**
   * A resposta para a pergunta
   */
  answer: string;
}

/**
 * Dados de FAQs comuns sobre os serviços
 */
const faqItems: FAQItem[] = [
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
];

/**
 * Componente de Seção de Perguntas Frequentes
 * 
 * Exibe uma lista de perguntas e respostas comuns.
 */
const FAQSection: React.FC = () => {
  return (
    <section className="py-16 bg-mathdev-secondary">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            Perguntas <span className="text-mathdev-primary">Frequentes</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Algumas dúvidas comuns que podem te ajudar a entender melhor nossos serviços.
          </p>
        </div>
        
        {/* Lista de FAQs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {faqItems.map((faq, index) => (
            <div key={index} className="bg-mathdev-dark p-6 rounded-lg border border-mathdev-primary/10">
              <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-400 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
