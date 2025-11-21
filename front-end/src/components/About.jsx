import { Award, Users, Heart } from 'lucide-react';

function About() {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 md:order-1 grid grid-cols-1 gap-6">
             <div className="bg-stone-50 p-8 rounded-2xl hover:shadow-md transition-shadow">
                <Award className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Experiência Comprovada</h3>
                <p className="text-gray-600">+4 Anos de prática clínica com foco em resultados reais e duradouros.</p>
             </div>
             <div className="bg-stone-50 p-8 rounded-2xl hover:shadow-md transition-shadow">
                <Users className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">+400 Vidas Transformadas</h3>
                <p className="text-gray-600">Histórias de sucesso em Maputo e arredores.</p>
             </div>
             <div className="bg-stone-50 p-8 rounded-2xl hover:shadow-md transition-shadow">
                <Heart className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Abordagem Humana</h3>
                <p className="text-gray-600">Atendimento empático, sem julgamentos, focado no seu bem-estar.</p>
             </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl text-primary font-serif">Sobre Mim</h2>
            <div className="w-20 h-1 bg-accent"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sou nutricionista dedicada a promover saúde através de uma nutrição equilibrada e baseada em evidências científicas.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Com formação especializada em <strong className="text-primary">neuronutrição, estética e saúde pública</strong>, ofereço um atendimento que vai além da dieta: olhamos para o seu corpo, mente e rotina como um todo.
            </p>
            <p className="text-gray-600 italic border-l-4 border-accent pl-4 py-2">
              "Minha missão é fazer você fazer as pazes com a comida e atingir sua melhor versão."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;