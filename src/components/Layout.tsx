
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
        
        {/* Gradient transition between main content and footer */}
        <div className="h-20 bg-gradient-to-b from-mathdev-primary/10 to-mathdev-secondary"></div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
