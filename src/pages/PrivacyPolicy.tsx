"use client";

import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  FileText, 
  Database, 
  Share2, 
  ExternalLink, 
  UserCheck, 
  Mail, 
  Phone 
} from 'lucide-react';

export function PrivacyPolicy() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* ========== CABEÇALHO DA PÁGINA ========== */}
      <section className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-emerald-900 relative overflow-hidden">
        {/* Efeitos de Fundo */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-700 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#48bab8] rounded-full blur-3xl opacity-20 translate-x-1/3 translate-y-1/3" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md mb-6"
          >
            <Shield className="w-10 h-10 text-emerald-300" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold text-white mb-4"
          >
            Política de Privacidade
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-emerald-100 text-lg sm:text-xl"
          >
            Transparência e segurança com os seus dados.
          </motion.p>
        </div>
      </section>

      {/* ========== CONTEÚDO PRINCIPAL ========== */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 relative z-20 -mt-12 sm:-mt-16">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10 lg:p-14">
          
          <motion.div {...fadeIn} className="prose prose-emerald max-w-none text-gray-600 leading-relaxed space-y-8">
            <p className="text-lg">
              A sua privacidade é importante para nós. É política da <strong className="text-emerald-900">Comprec</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos recolher no nosso site e noutros sites que possuímos e operamos.
            </p>

            {/* SEÇÃO 1 */}
            <div className="pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <FileText className="w-6 h-6 text-emerald-700" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 m-0">1. Informações que Recolhemos</h2>
              </div>
              <p>
                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço, como a nossa consultoria especializada em precatórios ou avaliação de parcerias. Os dados recolhidos através dos nossos formulários incluem:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700 marker:text-emerald-500">
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Número de WhatsApp</li>
                <li>Detalhes sobre o tipo de precatório ou perfil de parceria</li>
              </ul>
              <p className="mt-4">
                A recolha ocorre sempre por meios justos e legais, com o seu conhecimento e consentimento ao clicar no botão de envio dos nossos formulários.
              </p>
            </div>

            {/* SEÇÃO 2 */}
            <div className="pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <UserCheck className="w-6 h-6 text-emerald-700" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 m-0">2. Uso das Informações</h2>
              </div>
              <p>As informações que recolhemos são utilizadas exclusivamente para:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700 marker:text-emerald-500">
                <li>Entrar em contacto para responder a dúvidas e solicitações.</li>
                <li>Apresentar propostas de negociação e análise de precatórios.</li>
                <li>Estabelecer comunicação para parcerias comerciais.</li>
                <li>Melhorar o atendimento e a experiência dos nossos utilizadores.</li>
              </ul>
            </div>

            {/* SEÇÃO 3 */}
            <div className="pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <Database className="w-6 h-6 text-emerald-700" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 m-0">3. Armazenamento e Segurança</h2>
              </div>
              <p>
                Apenas retemos as informações recolhidas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemo-los dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
              </p>
            </div>

            {/* SEÇÃO 4 */}
            <div className="pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <Share2 className="w-6 h-6 text-emerald-700" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 m-0">4. Partilha de Dados</h2>
              </div>
              <p>
                Não partilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando estritamente necessário para a prestação do serviço contratado ou quando exigido por lei.
              </p>
            </div>

            {/* SEÇÃO 5 */}
            <div className="pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <ExternalLink className="w-6 h-6 text-emerald-700" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 m-0">5. Links para Sites Externos</h2>
              </div>
              <p>
                O nosso site pode conter links para sites externos que não são operados por nós. Esteja ciente de que não temos controlo sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade pelas suas respetivas políticas de privacidade.
              </p>
            </div>

            {/* SEÇÃO 6 */}
            <div className="pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <Shield className="w-6 h-6 text-emerald-700" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 m-0">6. Os Seus Direitos (LGPD)</h2>
              </div>
              <p>De acordo com a Lei Geral de Proteção de Dados, tem o direito de solicitar a qualquer momento:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700 marker:text-emerald-500">
                <li>A confirmação da existência de tratamento dos seus dados.</li>
                <li>O acesso aos seus dados pessoais guardados nos nossos sistemas.</li>
                <li>A correção de dados incompletos, inexatos ou desatualizados.</li>
                <li>A eliminação dos dados fornecidos através dos nossos formulários e canais de atendimento.</li>
              </ul>
            </div>

            {/* SEÇÃO CONTATO */}
            <div className="mt-12 p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ficou com alguma dúvida?</h3>
              <p className="text-gray-600 mb-6">
                Se tiver alguma dúvida sobre como lidamos com os seus dados e informações pessoais, ou se desejar exercer algum dos seus direitos previstos na LGPD, entre em contacto connosco através dos nossos canais oficiais:
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <a href="mailto:comprecativos@gmail.com" className="flex items-center gap-3 text-emerald-700 hover:text-emerald-800 transition-colors font-medium">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <Mail className="w-5 h-5" />
                  </div>
                  comprecativos@gmail.com
                </a>
                
                <a href="https://wa.me/5521989822163" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-emerald-700 hover:text-emerald-800 transition-colors font-medium">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <Phone className="w-5 h-5" />
                  </div>
                  (21) 98982-2163
                </a>
              </div>
            </div>

            <p className="text-sm text-gray-400 pt-8 text-center">
              Esta política é efetiva a partir de Março de 2026.
            </p>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
