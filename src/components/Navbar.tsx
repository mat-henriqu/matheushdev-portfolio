
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Menu, X } from 'lucide-react';
import CartDropdown from './CartDropdown';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-mathdev-dark/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/matheushdev-potfolio" className="text-2xl font-bold text-white">
            <span className="text-mathdev-primary">Matheush</span>Dev
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/matheushdev-potfolio" label="Home" />
            <NavLink to="/matheushdev-potfolio/servicos" label="Serviços" />
            <NavLink to="/matheushdev-potfolio/portfolio" label="Portfólio" />
            <NavLink to="/matheushdev-potfolio/sobre" label="Sobre" />
            <NavLink to="/matheushdev-potfolio/contato" label="Contato" />
          </nav>

          {/* Right Section - Cart & Call to Action */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Cart Icon */}
            <div className="relative">
              <button 
                onClick={toggleCart}
                className="p-2 rounded-full hover:bg-mathdev-secondary transition-colors"
              >
                <ShoppingCart size={24} className="text-white" />
                {cart.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-mathdev-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cart.items.length}
                  </span>
                )}
              </button>
              <CartDropdown open={isCartOpen} onOpenChange={setIsCartOpen} />
            </div>

            {/* CTA Button */}
            <a 
              href="https://wa.me/+5534997638331" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Fale Comigo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Mobile Cart Icon */}
            <div className="relative">
              <button 
                onClick={toggleCart}
                className="p-2 rounded-full hover:bg-mathdev-secondary transition-colors"
              >
                <ShoppingCart size={24} className="text-white" />
                {cart.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-mathdev-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cart.items.length}
                  </span>
                )}
              </button>
              <CartDropdown open={isCartOpen} onOpenChange={setIsCartOpen} />
            </div>

            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-mathdev-secondary transition-colors"
            >
              {isMenuOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-mathdev-secondary rounded-lg animate-fade-in">
            <nav className="flex flex-col space-y-4 px-4">
              <MobileNavLink to="/" label="Home" />
              <MobileNavLink to="/matheushdev-potfolio/servicos" label="Serviços" />
              <MobileNavLink to="/matheushdev-potfolio/portfolio" label="Portfólio" />
              <MobileNavLink to="/matheushdev-potfolio/sobre" label="Sobre" />
              <MobileNavLink to="/matheushdev-potfolio/contato" label="Contato" />
              <a 
                href="https://wa.me/+5534997638331" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-center mt-4"
              >
                Fale Comigo
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Desktop Nav Link
const NavLink: React.FC<{ to: string; label: string }> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to || 
    (to !== '/' && location.pathname.startsWith(to));

  return (
    <Link 
      to={to} 
      className={`text-base font-medium hover:text-mathdev-primary transition-colors ${
        isActive ? 'text-mathdev-primary' : 'text-white'
      }`}
    >
      {label}
    </Link>
  );
};

// Mobile Nav Link
const MobileNavLink: React.FC<{ to: string; label: string }> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to || 
    (to !== '/' && location.pathname.startsWith(to));

  return (
    <Link 
      to={to} 
      className={`text-lg font-medium py-2 block ${
        isActive ? 'text-mathdev-primary' : 'text-white'
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;
