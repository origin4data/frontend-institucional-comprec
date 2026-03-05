"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Send, CheckCircle, X } from 'lucide-react';

// Importações do React Hook Form e Zod para a Modal
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../components/ui/form';

// O @ts-ignore faz o TypeScript parar de dar erro na linha do vídeo
// @ts-ignore
import videoEquipe from '../assets/comprecmovie.mp4';

// 1. Schema do Zod para a Modal
const schemaContatoModal = z.object({
  nome: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres.'),
  email: z.string().email('E-mail inválido.'),
  whatsapp: z.string().refine((val) => {
    const apenasNumeros = val.replace(/\D/g, '');
    return apenasNumeros.length === 10 || apenasNumeros.length === 11;
  }, 'WhatsApp inválido com DDD.'),
  tipo: z.string().optional(),
});

type FormValues = z.infer<typeof schemaContatoModal>;

export function About() {
  // Estados da Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Instância do formulário
  const form = useForm<FormValues>({
    resolver: zodResolver(schemaContatoModal),
    defaultValues: {
      nome: '',
      whatsapp: '',
      email: '',
      tipo: '',
    },
  });

  const N8N_WEBHOOK_URL = 'https://webhooks.origindata.com.br/webhook/comprec';

  // Função de envio do formulário
  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Falha na comunicação');

      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error('Erro:', error);
      alert('Ocorreu um erro ao enviar sua mensagem. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  // Prevenir scroll do body quando a modal estiver aberta
  React.useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="w-full overflow-x-hidden bg-white">
        
        {/* CSS Injetado para animações */}
        <style>{`
          .hover-card-pilar {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .hover-card-pilar:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }
        `}</style>

        {/* ================= QUEM SOMOS ================= */}
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h1 
                className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6"
                style={{ color: '#48bab8' }}
              >
                Quem Somos
              </h1>
              <div className="space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed text-left">
                <p>
                  A COMPREC é uma empresa especializada na gestão e aquisição de 
                  ativos judiciais, com atuação focada em precatórios. Nascemos para 
                  transformar a espera por um direito reconhecido pela Justiça em uma 
                  decisão segura, consciente e transparente.
                </p>
                <p>
                  Atuamos com rigor jurídico, respeito absoluto à legislação e clareza em 
                  cada etapa do processo. Nosso trabalho começa pela análise técnica do 
                  crédito e segue com um atendimento humano, responsável e 
                  comprometido com a realidade de cada cliente.
                </p>
                <p>
                  Acreditamos que cada precatório carrega uma história, um tempo e uma 
                  expectativa. Por isso, nossa atuação é pautada pela segurança jurídica, 
                  pela transparência total e pelo compromisso de longo prazo, 
                  oferecendo alternativas claras para quem deseja antecipar valores com 
                  tranquilidade.
                </p>
                <p className="font-bold" style={{ color: '#48bab8' }}>
                  Na COMPREC, não prometemos atalhos. Oferecemos informação, ética 
                  e confiança, para que cada decisão seja tomada com consciência e 
                  segurança.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= COMO CONDUZIMOS (COM VÍDEO DA EQUIPE) ================= */}
        <section className="py-16 sm:py-24 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 
                  className="text-3xl sm:text-4xl font-bold mb-6"
                  style={{ color: '#48bab8' }}
                >
                  Como Conduzimos
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Cada operação é conduzida com método, responsabilidade e total respeito 
                    à história de cada cliente. Nosso trabalho começa pela escuta atenta, 
                    passa por análises técnicas rigorosas e segue até a formalização segura 
                    do processo.
                  </p>
                  <p>
                    Atuamos com clareza em cada etapa, explicando decisões, prazos e 
                    condições de forma objetiva. Mais do que conduzir uma operação, nosso 
                    compromisso é oferecer segurança jurídica, transparência e 
                    acompanhamento constante, do primeiro contato à conclusão.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex justify-center lg:justify-end"
              >
                <div 
                  className="w-full max-w-md relative rounded-2xl border-4 border-white overflow-hidden bg-gray-100 shadow-xl"
                  style={{ aspectRatio: '4/5' }}
                >
                  <video 
                    src={videoEquipe}
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= NOSSOS PILARES ================= */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: '#48bab8' }}
              >
                Nossos Pilares
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Nossos pilares orientam a forma como atuamos, atendemos e conduzimos cada 
                processo, garantindo clareza, segurança jurídica e respeito à história de cada cliente.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
              {/* Pilar 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="hover-card-pilar flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm h-full"
              >
                <div className="relative w-full h-72 md:h-80 lg:h-[400px] shrink-0 bg-gray-100 border-b border-gray-100">
                  <ImageWithFallback
                    src="https://i.imgur.com/89kldkv.jpeg"
                    alt="Transparência Total"
                    className="w-full h-full object-cover object-[center_top]"
                  />
                </div>
                <div className="p-6 lg:p-8 flex flex-col flex-grow bg-white">
                  <h3 className="text-xl lg:text-2xl font-bold mb-4" style={{ color: '#1e293b' }}>
                    Transparência Total
                  </h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-sm lg:text-[15px]">
                    <p>
                      Atuamos com comunicação clara e objetiva, apresentando prazos, riscos e 
                      possibilidades de forma honesta e acessível.
                    </p>
                    <p className="font-semibold" style={{ color: '#48bab8' }}>
                      Aqui, o cliente entende cada etapa do processo antes de qualquer decisão.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Pilar 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="hover-card-pilar flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm h-full"
              >
                <div className="relative w-full h-72 md:h-80 lg:h-[400px] shrink-0 bg-gray-100 border-b border-gray-100">
                  <ImageWithFallback
                    src="https://i.imgur.com/n7oSuHK.jpeg"
                    alt="Segurança Jurídica"
                    className="w-full h-full object-cover object-[center_top]"
                  />
                </div>
                <div className="p-6 lg:p-8 flex flex-col flex-grow bg-white">
                  <h3 className="text-xl lg:text-2xl font-bold mb-4" style={{ color: '#1e293b' }}>
                    Segurança Jurídica
                  </h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-sm lg:text-[15px]">
                    <p>
                      Todas as operações são conduzidas com rigor técnico, análise criteriosa e 
                      total conformidade legal.
                    </p>
                    <p className="font-semibold" style={{ color: '#48bab8' }}>
                      A segurança jurídica é o que sustenta decisões conscientes e relações de 
                      longo prazo.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Pilar 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hover-card-pilar flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm h-full"
              >
                <div className="relative w-full h-72 md:h-80 lg:h-[400px] shrink-0 bg-gray-100 border-b border-gray-100">
                  <ImageWithFallback
                    src="https://i.imgur.com/NXAYniX.jpeg"
                    alt="Compromisso"
                    className="w-full h-full object-cover object-[center_top]"
                  />
                </div>
                <div className="p-6 lg:p-8 flex flex-col flex-grow bg-white">
                  <h3 className="text-xl lg:text-2xl font-bold mb-4" style={{ color: '#1e293b' }}>
                    Compromisso
                  </h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-sm lg:text-[15px]">
                    <p>
                      Atuamos com responsabilidade e dedicação em cada etapa do processo, 
                      assumindo o compromisso de conduzir todas as análises e negociações com 
                      seriedade, ética e respeito ao cliente.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= SEÇÃO CTA ================= */}
        <section className="py-16 sm:py-24 w-full" style={{ backgroundColor: '#48bab8' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Transformando Espera em Decisão Segura
              </h2>
              <p className="text-lg sm:text-xl mb-4 text-gray-900 font-medium">
                Entre em contato e saiba como podemos ajudar você.
              </p>
              
              {/* Botão que agora abre a Modal em vez de redirecionar */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block bg-white px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all font-bold text-lg max-w-full cursor-pointer"
                style={{ color: '#48bab8' }}
              >
                Fale com um Consultor
              </button>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ========== MODAL DE CONTATO ========== */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-md relative shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => {
                  setIsModalOpen(false);
                  setIsSuccess(false);
                }}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors bg-gray-100 rounded-full p-1"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Solicitação Enviada!
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                    Recebemos seu contato com sucesso. Nossa equipe avaliará os dados e retornará o mais breve possível.
                  </p>
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      setIsSuccess(false);
                    }}
                    className="w-full bg-emerald-600 text-white font-semibold py-3 px-4 rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20"
                  >
                    Fechar
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Fale Conosco</h3>
                  <p className="text-sm text-gray-600 mb-6">Preencha os dados abaixo e um consultor entrará em contato.</p>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      {/* Campo Nome */}
                      <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }: any) => (
                          <FormItem>
                            <FormLabel className="font-semibold text-gray-700 text-sm">Nome completo *</FormLabel>
                            <FormControl>
                              <input 
                                name={field.name}
                                value={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                                ref={field.ref}
                                disabled={isLoading}
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm shadow-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all disabled:opacity-60"
                                placeholder="Seu nome"
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />

                      {/* Campo E-mail */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }: any) => (
                          <FormItem>
                            <FormLabel className="font-semibold text-gray-700 text-sm">E-mail *</FormLabel>
                            <FormControl>
                              <input 
                                type="email"
                                name={field.name}
                                value={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                                ref={field.ref}
                                disabled={isLoading}
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm shadow-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all disabled:opacity-60"
                                placeholder="email@exemplo.com"
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />

                      {/* Campo WhatsApp */}
                      <FormField
                        control={form.control}
                        name="whatsapp"
                        render={({ field }: any) => (
                          <FormItem>
                            <FormLabel className="font-semibold text-gray-700 text-sm">WhatsApp *</FormLabel>
                            <FormControl>
                              <input 
                                type="tel"
                                name={field.name}
                                value={field.value}
                                onBlur={field.onBlur}
                                ref={field.ref}
                                disabled={isLoading}
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm shadow-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all disabled:opacity-60"
                                placeholder="(00) 00000-0000"
                                onChange={(e) => {
                                  let value = e.target.value.replace(/\D/g, '');
                                  value = value.substring(0, 11);
                                  if (value.length > 2) value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
                                  if (value.length > 9) value = `${value.substring(0, 10)}-${value.substring(10)}`;
                                  else if (value.length > 8) value = `${value.substring(0, 9)}-${value.substring(9)}`;
                                  field.onChange(value);
                                }}
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />

                      {/* Campo Tipo de Precatório */}
                      <FormField
                        control={form.control}
                        name="tipo"
                        render={({ field }: any) => (
                          <FormItem>
                            <FormLabel className="font-semibold text-gray-700 text-sm">Tipo de Precatório</FormLabel>
                            <FormControl>
                              <select
                                name={field.name}
                                value={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                                ref={field.ref}
                                disabled={isLoading}
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm shadow-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all disabled:opacity-60"
                              >
                                <option value="" disabled>Selecione uma opção</option>
                                <option value="Federal">Federal</option>
                                <option value="Estadual">Estadual</option>
                                <option value="Municipal">Municipal</option>
                                <option value="Não sei informar">Não sei informar</option>
                              </select>
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />

                      <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full bg-[#48bab8] text-white font-semibold py-3 px-4 rounded-xl hover:bg-[#3ba3a1] transition-all shadow-lg shadow-[#48bab8]/20 disabled:opacity-70 flex items-center justify-center gap-2 mt-2"
                      >
                        <Send className="w-4 h-4" />
                        {isLoading ? 'Enviando...' : 'Enviar Consulta'}
                      </button>
                    </form>
                  </Form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}