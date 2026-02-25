"use client";

import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Send, UserCheck, CheckCircle, X } from 'lucide-react';
import { motion } from 'motion/react';

// Importações do React Hook Form e Zod
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Importando os componentes base do formulário
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';

// 1. Criando o Schema do Zod
const schemaParceiro = z.object({
  nome: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres.'),
  email: z.string().email('Por favor, insira um e-mail válido (ex: parceiro@email.com).'),
  whatsapp: z.string().refine((val) => {
    const apenasNumeros = val.replace(/\D/g, '');
    return apenasNumeros.length === 10 || apenasNumeros.length === 11;
  }, 'Por favor, insira um WhatsApp válido com DDD.'),
});

// Tipagem baseada no schema
type FormValues = z.infer<typeof schemaParceiro>;

// Mantive as props antigas na assinatura para não quebrar o seu componente pai, 
// mas o react-hook-form fará todo o trabalho pesado de estado agora.
export const FormularioSection = ({ perfilAtivo, limparFormulario }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // 2. Inicializando o React Hook Form
  const form = useForm<FormValues>({
    resolver: zodResolver(schemaParceiro),
    defaultValues: {
      nome: '',
      email: '',
      whatsapp: '',
    },
  });

  const tituloEsquerdo = perfilAtivo?.tituloCurto 
    ? `Parceria para ${perfilAtivo.tituloCurto}` 
    : "Venha ser parceiro da COMPREC!";

  const N8N_WEBHOOK_URL = 'https://webhooks.origindata.com.br/webhook/comprec';

  // 3. Função de envio
  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);

    // Incrementamos o payload com o perfil selecionado
    const payload = {
      ...data,
      perfilInteresse: perfilAtivo?.tituloCompleto || 'Geral'
    };

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Falha na comunicação com o servidor.');
      }

      // Exibe a modal de sucesso
      setShowModal(true);
      
      // Limpa os campos do React Hook Form
      form.reset();

      // Chama a função do pai (se existir)
      if (limparFormulario) {
        limparFormulario();
      }

    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="formulario" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CSS injetado */}
        <style>{`
          .input-parceiro:focus {
            border-color: #48bab8 !important;
            box-shadow: 0 0 0 3px rgba(72, 186, 184, 0.2) !important;
            outline: none;
          }
          .btn-enviar {
            background-color: #48bab8;
            color: #ffffff;
            transition: all 0.3s ease;
          }
          .btn-enviar:hover:not(:disabled) {
            background-color: #3ba3a1;
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(72, 186, 184, 0.3);
          }
          .btn-enviar:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }
        `}</style>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100" style={{ minHeight: '500px' }}>
          
          {/* ========== PAINEL ESQUERDO ========== */}
          <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" style={{ backgroundColor: 'rgba(72, 186, 184, 0.15)' }}></div>

            <ShieldCheck className="w-12 h-12 mb-6 relative z-10" style={{ color: '#48bab8' }} />
            
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight relative z-10" style={{ color: '#ffffff' }}>
              {tituloEsquerdo}
            </h3>
            
            <p className="text-sm lg:text-base leading-relaxed mb-8 relative z-10" style={{ color: '#cbd5e1' }}>
              Deixe seus dados e nossa equipe de especialistas entrará em contato rapidamente para apresentar as vantagens do nosso modelo de parceria.
            </p>
            
            <ul className="space-y-4 relative z-10">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#48bab8' }} />
                <span className="font-medium text-sm" style={{ color: '#e2e8f0' }}>Comissionamento atrativo</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#48bab8' }} />
                <span className="font-medium text-sm" style={{ color: '#e2e8f0' }}>Suporte jurídico dedicado</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#48bab8' }} />
                <span className="font-medium text-sm" style={{ color: '#e2e8f0' }}>Transparência do início ao fim</span>
              </li>
            </ul>
          </div>

          {/* ========== PAINEL DIREITO (FORMULÁRIO REACT HOOK FORM) ========== */}
          <div className="w-full lg:w-3/5 p-8 lg:p-12" style={{ backgroundColor: '#f8fafc' }}>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#111827' }}>Dados de Contato</h3>
              <p className="text-sm" style={{ color: '#6b7280' }}>Preencha os dados abaixo para iniciarmos a conversa.</p>
            </div>
            
            {perfilAtivo && perfilAtivo.tituloCompleto && (
               <div className="mb-8 border rounded-2xl p-6 flex items-start gap-4" style={{ backgroundColor: 'rgba(72, 186, 184, 0.05)', borderColor: 'rgba(72, 186, 184, 0.2)' }}>
                 <div className="p-3 rounded-xl flex-shrink-0" style={{ backgroundColor: 'rgba(72, 186, 184, 0.15)', color: '#48bab8' }}>
                   <UserCheck className="w-6 h-6" />
                 </div>
                 <div>
                   <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#48bab8' }}>Perfil Selecionado:</p>
                   <p className="text-lg font-bold leading-tight mb-2" style={{ color: '#111827' }}>{perfilAtivo.tituloCompleto}</p>
                   <p className="text-sm leading-relaxed" style={{ color: '#4b5563' }}>
                     Direcionaremos seu contato para a nossa equipe especializada neste perfil.
                   </p>
                 </div>
               </div>
            )}

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                {/* Campo Nome */}
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }: any) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-gray-700" style={{ color: '#374151' }}>Nome completo *</FormLabel>
                      <FormControl>
                        <input 
                          name={field.name}
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          ref={field.ref}
                          disabled={isLoading}
                          className="input-parceiro w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm shadow-sm transition-all disabled:opacity-60" 
                          style={{ color: '#111827' }} 
                          placeholder="Seu nome ou do escritório"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Campo Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }: any) => (
                      <FormItem>
                        <FormLabel className="font-semibold text-gray-700" style={{ color: '#374151' }}>E-mail *</FormLabel>
                        <FormControl>
                          <input 
                            type="email"
                            name={field.name}
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            ref={field.ref}
                            disabled={isLoading}
                            className="input-parceiro w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm shadow-sm transition-all disabled:opacity-60" 
                            style={{ color: '#111827' }} 
                            placeholder="email@exemplo.com"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Campo WhatsApp */}
                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }: any) => (
                      <FormItem>
                        <FormLabel className="font-semibold text-gray-700" style={{ color: '#374151' }}>WhatsApp *</FormLabel>
                        <FormControl>
                          <input 
                            type="tel"
                            name={field.name}
                            value={field.value}
                            onBlur={field.onBlur}
                            ref={field.ref}
                            disabled={isLoading}
                            className="input-parceiro w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm shadow-sm transition-all disabled:opacity-60" 
                            style={{ color: '#111827' }} 
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
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="pt-6">
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="btn-enviar w-full py-4 rounded-xl flex items-center justify-center gap-3 font-bold text-lg"
                  >
                    <Send className="w-5 h-5" />
                    {isLoading ? 'Enviando dados...' : 'Quero ser Parceiro'}
                  </button>
                </div>
              </form>
            </Form>

          </div>
        </div>
      </div>

      {/* MODAL DE SUCESSO */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl text-center"
          >
            {/* Botão de Fechar */}
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Ícone de Sucesso */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600" />
            </div>

            {/* Textos da Modal */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Solicitação Enviada!
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Recebemos seu interesse em ser parceiro. Nossa equipe especializada em <strong>{perfilAtivo?.tituloCompleto || 'Parcerias'}</strong> entrará em contato em breve para apresentar nossas vantagens!
            </p>

            {/* Botão de Ação */}
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-[#48bab8] text-white font-semibold py-3 px-4 rounded-xl hover:bg-[#3ba3a1] transition-colors shadow-lg shadow-[#48bab8]/20"
            >
              Entendi
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};