import React, { useState } from 'react';
import { Send, MessageCircle, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { Form } from './Form';
import logoWhite from '@/assets/67596b60077a129b8cb18eb43f53b80c352eee3a.png';

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [dadosFormulario, setDadosFormulario] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    tipo: '',
    valor: '',
  });

  const N8N_WEBHOOK_URL = 'https://webhooks.origindata.com.br/webhook/comprec';

  const enviarFormulario = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosFormulario),
      });

      if (!response.ok) {
        throw new Error('Falha na comunicação com o servidor.');
      }

      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      
      setDadosFormulario({
        nome: '',
        whatsapp: '',
        email: '',
        tipo: '',
        valor: '',
      });
      
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  const alterarCampo = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDadosFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }));
  };

  return (
    <section 
      id="contato" 
      className="py-8 sm:py-16 lg:py-20 relative overflow-hidden bg-emerald-900"
    >
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-700 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600 rounded-full blur-3xl opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
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
            
            <div className="space-y-2 sm:space-y-4 mb-4 sm:mb-8">
              <motion.div 
                className="flex items-start gap-2 sm:gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-white/20 backdrop-blur-sm p-1.5 sm:p-2 rounded-lg shrink-0">
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
                <div className="bg-white/20 backdrop-blur-sm p-1.5 sm:p-2 rounded-lg shrink-0">
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
                <div className="bg-white/20 backdrop-blur-sm p-1.5 sm:p-2 rounded-lg shrink-0">
                  <Send className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xs sm:text-lg">Atendimento Personalizado</h3>
                  <p className="text-emerald-100 text-xs sm:text-base hidden sm:block">Soluções específicas para seu caso</p>
                </div>
              </motion.div>
            </div>
            <div className="border-t border-white/20 pt-3 sm:pt-6">
              <p className="text-emerald-100 mb-1 sm:mb-2 text-xs sm:text-base">Ou entre em contato:</p>
              <a 
                href="https://wa.me/5521989822163" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white text-sm sm:text-xl font-semibold hover:text-[#48BAB8] transition-colors"
              >
                (21) 98982-2163
              </a>
              <p 
                className="text-emerald-100 text-xs sm:text-base hidden sm:block mt-1 hover:text-[#48BAB8] transition-colors">
                  <a href="mailto:contato@comprec.com.br" target="_blank" rel="noopener noreferrer">
                    comprecativos@gmail.co
                  </a>
              </p>
            </div>
            <div className="mt-6">
              <img 
                src={logoWhite} 
                alt="Logo Comprec"
                style={{ maxWidth: '350px' }}
              />
          </div>
          </motion.div>
          <motion.div 
            className="bg-white p-4 sm:p-8 md:p-10 rounded-2xl shadow-2xl order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Form 
              dados={dadosFormulario}
              onChange={alterarCampo}
              onSubmit={enviarFormulario}
              isLoading={isLoading}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}