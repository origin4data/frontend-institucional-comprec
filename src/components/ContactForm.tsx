"use client";

import React, { useState } from 'react';
import { Send, MessageCircle, Phone, CheckCircle, X } from 'lucide-react';
import { motion } from 'motion/react';
import logoWhite from '@/assets/67596b60077a129b8cb18eb43f53b80c352eee3a.png';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';

const schemaContato = z.object({
  nome: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres.'),
  email: z.string().email('Por favor, insira um e-mail válido (ex: nome@gmail.com).'),
  whatsapp: z.string().refine((val) => {
    const apenasNumeros = val.replace(/\D/g, '');
    return apenasNumeros.length === 10 || apenasNumeros.length === 11;
  }, 'Por favor, insira um WhatsApp válido com DDD.'),
  tipo: z.string().optional(),
});

type FormValues = z.infer<typeof schemaContato>;

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schemaContato),
    defaultValues: {
      nome: '',
      whatsapp: '',
      email: '',
      tipo: '',
    },
  });

  const N8N_WEBHOOK_URL = 'https://webhooks.origindata.com.br/webhook/comprec';

  // 3. Função de envio
  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Falha na comunicação com o servidor.');
      }

      setShowModal(true);
      form.reset(); 
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
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
              <motion.div className="flex items-start gap-2 sm:gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                <div className="bg-white/20 backdrop-blur-sm p-1.5 sm:p-2 rounded-lg shrink-0">
                  <Phone className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xs sm:text-lg">Resposta Rápida</h3>
                  <p className="text-emerald-100 text-xs sm:text-base hidden sm:block">Retorno em até 24 horas úteis</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-2 sm:gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
                <div className="bg-white/20 backdrop-blur-sm p-1.5 sm:p-2 rounded-lg shrink-0">
                  <MessageCircle className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xs sm:text-lg">Consultoria Gratuita</h3>
                  <p className="text-emerald-100 text-xs sm:text-base hidden sm:block">Sem compromisso, tire suas dúvidas</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-2 sm:gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
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
            </div>
            <div>
              <a 
                href="mailto:comprecativos@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white text-sm sm:text-xl font-semibold hover:text-[#48BAB8] transition-colors"
              >
                comprecativos@gmail.com
              </a>
            </div>
            <div className="mt-6">
              <img src={logoWhite} alt="Logo Comprec" style={{ maxWidth: '350px' }} />
            </div>
          </motion.div>
          <motion.div 
            className="bg-white p-4 sm:p-8 md:p-10 rounded-2xl shadow-2xl order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }: any) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-gray-700">Nome completo *</FormLabel>
                      <FormControl>
                        <input 
                          name={field.name}
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          ref={field.ref}
                          disabled={isLoading}
                          placeholder="Seu nome"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm shadow-sm transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none disabled:opacity-60"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }: any) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-gray-700">E-mail *</FormLabel>
                      <FormControl>
                        <input 
                          type="email"
                          name={field.name}
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          ref={field.ref}
                          disabled={isLoading}
                          placeholder="email@exemplo.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm shadow-sm transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none disabled:opacity-60"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }: any) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-gray-700">WhatsApp *</FormLabel>
                      <FormControl>
                        <input 
                          type="tel"
                          name={field.name}
                          value={field.value}
                          onBlur={field.onBlur}
                          ref={field.ref}
                          disabled={isLoading}
                          placeholder="(00) 00000-0000"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm shadow-sm transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none disabled:opacity-60"
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
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tipo"
                  render={({ field }: any) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-gray-700">Tipo de Precatório</FormLabel>
                      <FormControl>
                        <select
                          name={field.name}
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          ref={field.ref}
                          disabled={isLoading}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm shadow-sm transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none disabled:opacity-60"
                        >
                          <option value="" disabled>Selecione uma opção</option>
                          <option value="Federal">Federal</option>
                          <option value="Estadual">Estadual</option>
                          <option value="Municipal">Municipal</option>
                          <option value="Não sei informar">Não sei informar</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-emerald-600 text-white font-semibold py-4 px-4 rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 disabled:opacity-70 flex items-center justify-center gap-2 mt-4"
                >
                  <Send className="w-5 h-5" />
                  {isLoading ? 'Enviando...' : 'Enviar Consulta'}
                </button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl text-center"
          >
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors">
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Formulário Enviado!
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Recebemos suas informações com sucesso. Agora é só aguardar, a equipe da <strong>Comprec</strong> entrará em contato com você em breve.
            </p>
            <button onClick={() => setShowModal(false)} className="w-full bg-emerald-600 text-white font-semibold py-3 px-4 rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20">
              Entendi
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
