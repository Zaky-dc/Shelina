import { GraduationCap, Brain, ShieldCheck, FileBarChart, Sparkles, Award } from 'lucide-react';

function Qualifications() {
  const qualifications = [
    {
      title: 'Licenciatura em Nutrição',
      description: 'Formação superior completa com foco em nutrição clínica e saúde humana.',
      icon: <GraduationCap className="w-8 h-8" />,
      type: 'Académico'
    },
    {
      title: 'Neuronutrição',
      description: 'Especialização avançada no tratamento nutricional de ansiedade e depressão.',
      icon: <Brain className="w-8 h-8" />,
      type: 'Especialização'
    },
    {
      title: 'Cholera Outbreaks',
      org: 'WHO (OMS)',
      description: 'Emergency preparedness and response training.',
      icon: <ShieldCheck className="w-8 h-8" />,
      type: 'Certificação Internacional'
    },
    {
      title: 'Monitoring Methodologies',
      org: 'WHO (OMS)',
      description: 'Diet-related regulatory interventions for healthy food environment.',
      icon: <FileBarChart className="w-8 h-8" />,
      type: 'Certificação Internacional'
    },
    {
      title: 'Nutrição Estética',
      description: 'Abordagem nutricional focada na saúde da pele e emagrecimento.',
      icon: <Sparkles className="w-8 h-8" />,
      type: 'Especialização'
    },
  ];

  return (
    <section id="formacao" className="section-padding bg-white relative overflow-hidden">
      {/* Elemento decorativo de fundo (marca d'água subtil) */}
      <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none">
        <Award size={400} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-primary text-sm font-bold uppercase tracking-wider mb-4">
            <Award size={16} />
            Excelência Profissional
          </div>
          <h2 className="text-4xl font-serif text-gray-900 mb-6">
            Formação e Qualificações
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Compromisso contínuo com a atualização científica para oferecer tratamentos seguros, eficazes e reconhecidos internacionalmente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualifications.map((qual, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 relative"
            >
              {/* Borda lateral dourada estilo "Certificado" */}
              <div className="absolute left-0 top-4 bottom-4 w-1 bg-accent rounded-r-full opacity-50 group-hover:opacity-100 transition-opacity"></div>

              <div className="pl-4">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-stone-50 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {qual.icon}
                  </div>
                  {qual.org && (
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded border border-blue-100">
                      {qual.org}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {qual.title}
                </h3>
                
                <p className="text-xs font-bold text-accent uppercase tracking-wider mb-3">
                  {qual.type}
                </p>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {qual.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Resumo de Confiança */}
        <div className="mt-16 bg-stone-50 rounded-2xl p-8 text-center border border-stone-100">
          <p className="text-gray-700 italic font-serif text-lg">
            "A ciência evolui todos os dias. O meu dever é trazer essa evolução para a sua mesa."
          </p>
        </div>
      </div>
    </section>
  );
}

export default Qualifications;