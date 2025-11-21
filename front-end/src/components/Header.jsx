import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Localização', href: '#localizacao' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`text-2xl font-bold font-serif tracking-tight ${isScrolled ? 'text-primary' : 'text-primary md:text-white'}`}>
          Dra. Shelina
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium uppercase tracking-wider hover:text-secondary transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-white/90 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              isScrolled 
                ? 'bg-primary text-white hover:bg-primary/90' 
                : 'bg-white text-primary hover:bg-gray-100'
            }`}
          >
            Agendar Consulta
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-primary md:text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col md:hidden animate-in slide-in-from-top-5">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-4 text-center text-gray-600 font-medium border-b border-gray-50 hover:bg-gray-50"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
