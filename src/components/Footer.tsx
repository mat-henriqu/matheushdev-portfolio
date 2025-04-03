
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mathdev-secondary pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo & About */}
          <div className='flex flex-col items-center text-center'>
            <Link to="/" className="text-2xl font-bold text-white">
              <span className="text-mathdev-primary">Matheush</span>Dev
            </Link>
            <p className="mt-4 text-gray-400">
              Transformando ideias em experiências digitais memoráveis.
              <br />
              Desenvolvimento web profissional para o seu negócio.
            </p>
          </div>

          {/* Quick Links 
          <div className="md:ml-8">
            <h3 className="text-lg font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-mathdev-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/matheushdev-potfolio/servicos" className="text-gray-400 hover:text-mathdev-primary transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/matheushdev-potfolio/portfolio" className="text-gray-400 hover:text-mathdev-primary transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link to="/matheushdev-potfolio/sobre" className="text-gray-400 hover:text-mathdev-primary transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/matheushdev-potfolio/contato" className="text-gray-400 hover:text-mathdev-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          */}

          {/* Contact Info */}
          <div className='flex flex-col items-center text-center'>
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <a
                  href="https://wa.me/+5534997638331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-mathdev-primary transition-colors"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <a
                  href="mailto:theush933@gmail.com"
                  className="flex items-center space-x-3 text-gray-400 hover:text-mathdev-primary transition-colors"
                >
                  <Mail size={18} />
                  <span>Email</span>
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <a
                  href="https://www.instagram.com/matheushdev_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-mathdev-primary transition-colors"
                >
                  <Instagram size={18} />
                  <span>@matheushdev_</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-mathdev-primary/10 mt-8 pt-6 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} MatheushDev. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
