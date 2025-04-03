
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";

// Pages
import Index from "./pages/Index";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <HashRouter>
          <Routes>
            <Route path="/matheushdev-potfolio" element={<Index />} />
            <Route path="/matheushdev-potfolio/servicos" element={<Services />} />
            <Route path="/matheushdev-potfolio/portfolio" element={<Portfolio />} />
            <Route path="/matheushdev-potfolio/sobre" element={<About />} />
            <Route path="/matheushdev-potfolio/contato" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
