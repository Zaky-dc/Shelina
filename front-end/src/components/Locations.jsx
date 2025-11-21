import { MapPin, Calendar, Clock, ArrowRight, Building2 } from 'lucide-react';

function Locations() {
  const clinics = [
    {
      name: 'Shifaa Hospital',
      address: 'Bairro da Maxaquene C',
      city: 'Maputo',
      reference: 'Próximo à Praça da OMM',
    },
    {
      name: 'Lin Med',
      address: 'Av. da Maguiguana, Alto Maé',
      city: 'Maputo',
      reference: 'Zona central',
    },
    {
      name: 'Ayamed',
      address: 'Bairro da COOP',
      city: 'Maputo',
      reference: 'Perto da PH',
    },
  ];

  return (
    <section id="localizacao" className="section-padding bg-stone-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho da Secção */}
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-widest uppercase text-sm">Localização</span>
          <h2 className="text-4xl font-serif text-primary mt-2 mb-4">
            Onde Atendo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Atendimento presencial nas melhores clínicas de Maputo, com todo o conforto e equipamento necessário para a sua avaliação.
          </p>
        </div>

        {/* Grid de Clínicas */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {clinics.map((clinic, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-accent relative overflow-hidden"
            >
              {/* Ícone de Fundo Decorativo */}
              <Building2 className="absolute -right-4 -bottom-4 w-32 h-32 text-gray-50 group-hover:text-primary/5 transition-colors duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {clinic.name}
                </h3>
                
                <p className="text-gray-500 text-sm font-medium uppercase tracking-wide mb-4">
                  {clinic.city}
                </p>

                <div className="space-y-2 mb-8">
                  <p className="text-gray-600 leading-relaxed">
                    {clinic.address}
                  </p>
                  <p className="text-sm text-gray-400 italic">
                    {clinic.reference}
                  </p>
                </div>

                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.name + ' ' + clinic.city)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:text-primary transition-colors group/link"
                >
                  Ver no Mapa
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Informações Adicionais */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-start gap-6">
              <div className="p-4 bg-secondary/10 rounded-full text-secondary hidden sm:block">
                 <Calendar size={32} />
              </div>
              <div>
                 <h4 className="text-xl font-serif font-bold text-gray-900 mb-2">Agendamento Obrigatório</h4>
                 <p className="text-gray-600 max-w-md">
                   Para garantir um atendimento exclusivo e sem esperas, todas as consultas são realizadas mediante marcação prévia.
                 </p>
              </div>
           </div>
           
           <div className="flex flex-col sm:flex-row gap-6 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8 w-full md:w-auto">
              <div className="flex items-center gap-3">
                 <Clock className="text-accent" size={24} />
                 <div>
                    <p className="font-bold text-gray-900">Horários Flexíveis</p>
                    <p className="text-sm text-gray-500">Segunda a Sábado</p>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}

export default Locations;