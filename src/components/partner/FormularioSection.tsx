"use client";

import React from 'react';
import { ShieldCheck, CheckCircle2, Send, UserCheck } from 'lucide-react';

export const FormularioSection = ({ dadosFormulario = {}, alterarCampo, enviarFormulario, perfilAtivo }: any) => {
  
  // Como não é mais análise, o título dinâmico muda o foco
  const tituloEsquerdo = perfilAtivo?.tituloCurto 
    ? `Parceria para ${perfilAtivo.tituloCurto}` 
    : "Venha ser parceiro da COMPREC!";

  return (
    <section id="formulario" className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CSS injetado para garantir os focos e hovers sem depender do Tailwind */}
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
          .btn-enviar:hover {
            background-color: #3ba3a1;
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(72, 186, 184, 0.3);
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

          {/* ========== PAINEL DIREITO (FORMULÁRIO ENXUTO) ========== */}
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

            <form onSubmit={enviarFormulario} className="space-y-6">
              
              {/* Campo Nome (Ocupa a linha toda) */}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#374151' }}>Nome completo *</label>
                <input type="text" name="nome" value={dadosFormulario?.nome || ''} onChange={alterarCampo} required className="input-parceiro w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm shadow-sm transition-all" style={{ color: '#111827' }} placeholder="Seu nome ou do escritório" />
              </div>

              {/* Campos Email e WhatsApp (Lado a lado) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#374151' }}>E-mail *</label>
                  <input type="email" name="email" value={dadosFormulario?.email || ''} onChange={alterarCampo} required className="input-parceiro w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm shadow-sm transition-all" style={{ color: '#111827' }} placeholder="email@exemplo.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#374151' }}>WhatsApp *</label>
                  <input type="tel" name="whatsapp" value={dadosFormulario?.whatsapp || ''} onChange={alterarCampo} required className="input-parceiro w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm shadow-sm transition-all" style={{ color: '#111827' }} placeholder="(00) 00000-0000" />
                </div>
              </div>

              <div className="pt-6">
                <button 
                  type="submit" 
                  className="btn-enviar w-full py-4 rounded-xl flex items-center justify-center gap-3 font-bold text-lg"
                >
                  <Send className="w-5 h-5" />
                  Quero ser Parceiro
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};