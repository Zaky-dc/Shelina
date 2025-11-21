import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:shelinamamde@gmail.com?subject=Nova Consulta: ${formData.name}&body=Nome: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATelefone: ${formData.phone}%0D%0AMensagem:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contato" className="section-padding bg-primary text-white relative overflow-hidden">
      {/* Círculos de fundo sutis */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Vamos conversar?</h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              O primeiro passo para sua transformação começa aqui. Agende sua consulta ou tire suas dúvidas.
            </p>

            <div className="space-y-6">
              <a href="https://wa.me/258875748245" className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10">
                <div className="p-3 bg-white/20 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/60 uppercase tracking-wider">WhatsApp</p>
                  <p className="text-xl font-semibold">+258 87 57 48 245</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4">
                 <div className="p-3 bg-white/10 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                   <p className="text-sm text-white/60 uppercase tracking-wider">Email</p>
                   <p className="text-lg">shelinamamade@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4">
                 <div className="p-3 bg-white/10 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                   <p className="text-sm text-white/60 uppercase tracking-wider">Atendimento</p>
                   <p className="text-lg">Maputo: Shifaa, Lin Med, Ayamed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo</label>
                <input
                  type="text"
                  name="name"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input type="email" name="email" required onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="exemplo@email.com" />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone</label>
                    <input type="tel" name="phone" required onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="+258..." />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mensagem</label>
                <textarea name="message" rows="4" required onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" placeholder="Como posso ajudar?"></textarea>
              </div>

              <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                Enviar Mensagem <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;