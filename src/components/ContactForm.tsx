import React from 'react';
import { Send, MessageCircle, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { Form } from './Form';

export function ContactForm() {
  const [dadosFormulario, setDadosFormulario] = React.useState({
    nome: '',
    whatsapp: '',
    email: '',
    cpf: '',
    tipo: '',
    valor: '',
  });

  const enviarFormulario = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', dadosFormulario);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    // Resetar formulário
    setDadosFormulario({
      nome: '',
      whatsapp: '',
      email: '',
      cpf: '',
      tipo: '',
      valor: '',
    });
  };

  const alterarCampo = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDadosFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }));
  };

  return (
    <section id="contato" className="py-8 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-700 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Lado Esquerdo - Informações - Compacto no mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            {/* Badge de destaque */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium text-xs sm:text-base">Atendimento Especializado</span>
            </motion.div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-6">
              Fale com Nossos Consultores
            </h2>
            <p className="text-sm sm:text-xl text-emerald-50 mb-4 sm:mb-8 leading-snug sm:leading-relaxed">
              Tire todas suas dúvidas e descubra as melhores opções para seu precatório.
            </p>
            
            {/* Benefícios - Compacto no mobile */}
            <div className="space-y-2 sm:space-y-4 mb-4 sm:mb-8">
              <motion.div 
                className="flex items-start gap-2 sm:gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-white/20 backdrop-blur-sm p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xs sm:text-lg">Resposta Rápida</h3>
                  <p className="text-emerald-100 text-xs sm:text-base hidden sm:block">Retorno em até 24 horas úteis</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-2 sm:gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bg-white/20 backdrop-blur-sm p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                  <MessageCircle className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xs sm:text-lg">Consultoria Gratuita</h3>
                  <p className="text-emerald-100 text-xs sm:text-base hidden sm:block">Sem compromisso, tire suas dúvidas</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-2 sm:gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="bg-white/20 backdrop-blur-sm p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                  <Send className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xs sm:text-lg">Atendimento Personalizado</h3>
                  <p className="text-emerald-100 text-xs sm:text-base hidden sm:block">Soluções específicas para seu caso</p>
                </div>
              </motion.div>
            </div>

            {/* Informações de contato */}
            <div className="border-t border-white/20 pt-3 sm:pt-6">
              <p className="text-emerald-100 mb-1 sm:mb-2 text-xs sm:text-base">Ou entre em contato:</p>
              <a href="https://wa.me/5521989822163" target="_blank" rel="noopener noreferrer" className="text-white text-sm sm:text-xl font-semibold hover:text-emerald-100 transition-colors">
                (21) 98982-2163
              </a>
              <p className="text-emerald-100 text-xs sm:text-base hidden sm:block mt-1">contato@comprec.com.br</p>
            </div>
          </motion.div>

          {/* Lado Direito - Formulário */}
          <motion.div 
            className="bg-white p-4 sm:p-8 md:p-10 rounded-2xl shadow-2xl order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
          <Form />
          </motion.div>
        </div>
      </div>
    </section>
  );
}