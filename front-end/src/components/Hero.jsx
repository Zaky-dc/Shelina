import ImageUrl from "../assets/shelina.jpg"; // Certifique-se que a imagem é de alta qualidade
import { ArrowRight } from 'lucide-react';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-stone-50">
      {/* Fundo Decorativo */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-primary/5 -skew-x-12 translate-x-20 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        <div className="space-y-8 animate-in slide-in-from-left-10 duration-700">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-widest uppercase">
            Nutrição & Bem-estar
          </span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-gray-900 leading-tight">
            Nutrição que <br/>
            <span className="text-primary italic">transforma</span> a sua vida.
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            Abordagem científica e humanizada especializada em neuronutrição e estética. 
            Recupere a sua autoestima e saúde com planos personalizados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/258" className="group bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
              Agendar Consulta
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#sobre" className="px-8 py-4 rounded-full font-semibold text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors border border-gray-200 text-center">
              Conhecer a Dra.
            </a>
          </div>
          
          <div className="flex items-center gap-4 pt-4 text-sm text-gray-500">
            <div className="flex -space-x-2">
              {/* Círculos decorativos simulando avatares ou apenas estilo */}
              <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
            </div>
            <p>+400 Pacientes atendidos</p>
          </div>
        </div>

        <div className="relative h-full flex justify-center md:justify-end animate-in zoom-in duration-1000">
            <div className="relative w-[80%] md:w-[90%] aspect-[3/4] rounded-t-[10rem] rounded-b-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={ImageUrl} 
                alt="Dra. Shelina" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Elemento Flutuante */}
            <div className="absolute bottom-10 -left-4 md:left-0 bg-white p-4 rounded-xl shadow-xl border-l-4 border-secondary max-w-[200px]">
               <p className="text-primary font-bold text-2xl font-serif">4+</p>
               <p className="text-xs text-gray-600 uppercase tracking-wide">Anos de Experiência</p>
            </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
