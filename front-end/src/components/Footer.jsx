import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Coluna 1: Marca e Sobre */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h3 className="text-3xl font-serif font-bold text-white">Dra. Shelina</h3>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Nutricionista especializada em transformar vidas através da neuronutrição e estética. 
              Saúde baseada em evidência, sem restrições impossíveis.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-6 relative inline-block">
              Menu
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent"></span>
            </h4>
            <ul className="space-y-3">
              {['Início', 'Sobre', 'Serviços', 'Localização', 'Contacto'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace('í', 'i').replace('ç', 'c').replace('ã', 'a')}`} 
                    className="hover:text-accent hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contactos */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-6 relative inline-block">
              Contacto
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
                <span>Maputo, Moçambique<br/><span className="text-sm text-gray-500">Shifaa, Lin Med, Ayamed</span></span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+258 87 57 48 245</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>contato@drashelina.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            © {currentYear} Dra. Shelina. Todos os direitos reservados.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors group"
          >
            Voltar ao topo
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;