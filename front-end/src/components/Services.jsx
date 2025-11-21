import { Brain, Sparkles, Stethoscope, Monitor, Apple, Activity } from 'lucide-react';

function Services() {
  const services = [
    {
      title: 'Consultas Presenciais',
      description: 'Avaliação física completa com bioimpedância em ambiente clínico acolhedor.',
      icon: <Stethoscope className="w-8 h-8" />,
    },
    {
      title: 'Consultas Online',
      description: 'Atendimento flexível via videochamada para todo Moçambique e mundo.',
      icon: <Monitor className="w-8 h-8" />,
    },
    {
      title: 'Planos Personalizados',
      description: 'Protocolos alimentares desenhados exclusivamente para sua rotina e gostos.',
      icon: <Apple className="w-8 h-8" />,
    },
    {
      title: 'Neuronutrição',
      description: 'Estratégias nutricionais para auxiliar no tratamento de ansiedade e depressão.',
      icon: <Brain className="w-8 h-8" />,
    },
    {
      title: 'Nutrição Estética',
      description: 'Foco na saúde da pele, cabelo e unhas, e emagrecimento saudável.',
      icon: <Sparkles className="w-8 h-8" />,
    },
    {
      title: 'Acompanhamento',
      description: 'Suporte contínuo via WhatsApp para dúvidas e ajustes no plano.',
      icon: <Activity className="w-8 h-8" />,
    },
  ];

  return (
    <section id="servicos" className="section-padding bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-4xl font-serif text-primary mb-4">Como posso ajudar?</h2>
           <p className="text-gray-600 text-lg">Soluções completas adaptadas às suas necessidades.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;