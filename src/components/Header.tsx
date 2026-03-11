import React, { useState } from 'react';
import { Menu, X, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Importações do React Hook Form e Zod para a Modal
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';

import logoComprec from '../assets/logo.png';
import logoComprecTexto from '../assets/logoNome.png';

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

interface HeaderProps {
  paginaAtual: string;
}

export function Header({ paginaAtual }: HeaderProps) {
  const [menuMobilAberto, setMenuMobilAberto] = useState(false);
  const [headerRolado, setHeaderRolado] = useState(false);
  
  // Estados para a Modal de Fale Conosco
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const linksNavegacao = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#parceiro', label: 'Parceiros', id: 'parceiro' },
    { href: '#sobre', label: 'Quem Somos', id: 'sobre' },
    { href: '#blog', label: 'Blog', id: 'blog' },
  ];

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

  // Função de envio do formulário da Modal
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

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setHeaderRolado(true);
      } else {
        setHeaderRolado(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (menuMobilAberto || isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuMobilAberto, isModalOpen]);

  React.useEffect(() => {
    setMenuMobilAberto(false);
  }, [paginaAtual]);

  return (
    <>
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          headerRolado ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="shrink-0 ml-2 md:ml-0">
              <a href="#home" className="flex items-center gap-3">
                <img src={logoComprec} alt="Comprec" className="h-8 w-auto" />
                <img src={logoComprecTexto} alt="Comprec" className="h-6 w-auto hidden md:block" />
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {linksNavegacao.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`transition-colors ${
                    paginaAtual === link.id
                      ? 'text-emerald-800 font-semibold'
                      : 'text-gray-700 hover:text-emerald-800'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="hidden md:block">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-emerald-800 text-white px-6 py-2 rounded-lg hover:bg-emerald-900 transition-colors font-medium"
              >
                Fale Conosco
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setMenuMobilAberto(!menuMobilAberto)}
                className="text-gray-700 hover:text-emerald-800 transition-colors p-2 relative z-50"
                aria-label="Menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {menuMobilAberto ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </nav>
        <AnimatePresence>
          {menuMobilAberto && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setMenuMobilAberto(false)}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
              />
              <motion.div
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-16 left-0 right-0 bg-white shadow-2xl z-40 md:hidden"
              >
                <div className="px-4 py-6 max-w-7xl mx-auto">
                  <div className="space-y-1">
                    {linksNavegacao.map((link, index) => (
                      <motion.a
                        key={link.id}
                        href={link.href}
                        onClick={() => setMenuMobilAberto(false)}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.3 }}
                        className={`block py-3 px-4 rounded-lg transition-colors ${
                          paginaAtual === link.id
                            ? 'text-emerald-800 font-semibold bg-emerald-50'
                            : 'text-gray-700 hover:text-emerald-800 hover:bg-gray-50'
                        }`}
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </div>
                  <motion.button
                    onClick={() => {
                      setMenuMobilAberto(false);
                      setIsModalOpen(true);
                    }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="mt-4 w-full bg-emerald-800 text-white px-6 py-3 rounded-lg hover:bg-emerald-900 transition-colors text-center font-medium"
                  >
                    Fale Conosco
                  </motion.button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
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
                  <p className="text-sm text-gray-600 mb-6">Preencha os dados abaixo e entraremos em contato.</p>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                        className="w-full bg-emerald-600 text-white font-semibold py-3 px-4 rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 disabled:opacity-70 flex items-center justify-center gap-2 mt-2"
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
