
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="py-32 min-h-screen flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-mathdev-primary mb-6">404</h1>
          <h2 className="text-3xl font-bold text-white mb-4">Página não encontrada</h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-8">
            A página que você está procurando pode ter sido removida, 
            renomeada ou está temporariamente indisponível.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.history.back()}
              className="btn-outlined flex items-center justify-center gap-2"
            >
              <ArrowLeft size={18} />
              <span>Voltar</span>
            </button>
            
            <Link 
              to="/" 
              className="btn-primary flex items-center justify-center gap-2"
            >
              <Home size={18} />
              <span>Página Inicial</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
