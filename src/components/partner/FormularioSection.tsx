"use client";

import React from 'react';
import { ShieldCheck, CheckCircle2, ChevronDown, Send, UserCheck } from 'lucide-react';

export const FormularioSection = ({ dadosFormulario = {}, alterarCampo, enviarFormulario, perfilAtivo }: any) => {
  
  const tituloEsquerdo = perfilAtivo?.tituloCurto 
    ? `Análise para ${perfilAtivo.tituloCurto}` 
    : "Análise de Crédito";

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

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100" style={{ minHeight: '600px' }}>
          
          {/* ========== PAINEL ESQUERDO (FORÇANDO A COR NO STYLE) ========== */}
          {/* O fundo escuro (chumbo) agora é aplicado diretamente via backgroundColor */}
          <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
            
            {/* Decoração de Fundo */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" style={{ backgroundColor: 'rgba(72, 186, 184, 0.15)' }}></div>

            <ShieldCheck className="w-12 h-12 mb-6 relative z-10" style={{ color: '#48bab8' }} />
            
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight relative z-10" style={{ color: '#ffffff' }}>
              {tituloEsquerdo}.
            </h3>
            
            <p className="text-sm lg:text-base leading-relaxed mb-8 relative z-10" style={{ color: '#cbd5e1' }}>
              O preenchimento deste formulário é o primeiro passo para avaliarmos a viabilidade financeira do crédito com total segurança e sigilo.
            </p>
            
            <ul className="space-y-4 relative z-10">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#48bab8' }} />
                <span className="font-medium text-sm" style={{ color: '#e2e8f0' }}>Sigilo profissional garantido</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#48bab8' }} />
                <span className="font-medium text-sm" style={{ color: '#e2e8f0' }}>Zero custos para o parceiro</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#48bab8' }} />
                <span className="font-medium text-sm" style={{ color: '#e2e8f0' }}>Avaliação técnica e rápida</span>
              </li>
            </ul>
          </div>

          {/* ========== PAINEL DIREITO (FORMULÁRIO) ========== */}
          <div className="w-full lg:w-3/5 p-8 lg:p-12" style={{ backgroundColor: '#f8fafc' }}>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#111827' }}>Dados da Indicação</h3>
              <p className="text-sm" style={{ color: '#6b7280' }}>Preencha os dados abaixo para iniciar a jornada.</p>
            </div>
            
            {/* CAIXA DE PERFIL SELECIONADO (FORÇANDO CORES VIA STYLE) */}
            {perfilAtivo && perfilAtivo.tituloCompleto && (
               <div className="mb-8 border rounded-2xl p-6 flex items-start gap-4" style={{ backgroundColor: 'rgba(72, 186, 184, 0.05)', borderColor: 'rgba(72, 186, 184, 0.2)' }}>
                 <div className="p-3 rounded-xl flex-shrink-0" style={{ backgroundColor: 'rgba(72, 186, 184, 0.15)', color: '#48bab8' }}>
                   <UserCheck className="w-6 h-6" />
                 </div>
                 <div>
                   <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#48bab8' }}>Perfil Selecionado:</p>
                   <p className="text-lg font-bold leading-tight mb-2" style={{ color: '#111827' }}>{perfilAtivo.tituloCompleto}</p>
                   <p className="text-sm leading-relaxed" style={{ color: '#4b5563' }}>
                     Este formulário será direcionado para a nossa equipe especializada neste perfil.
                   </p>
                 </div>
               </div>
            )}

            <form onSubmit={enviarFormulario} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#374151' }}>Advogado / Escritório *</label>
                  <input type="text" name="nome" value={dadosFormulario?.nome || ''} onChange={alterarCampo} required className="input-parceiro w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm shadow-sm transition-all" style={{ color: '#111827' }} placeholder="Nome completo" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#374151' }}>Número da OAB *</label>
                  <input type="text" name="oab" value={dadosFormulario?.oab || ''} onChange={alterarCampo} required className="input-parceiro w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm shadow-sm transition-all" style={{ color: '#111827' }} placeholder="000.000/UF" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#374151' }}>WhatsApp *</label>
                  <input type="tel" name="whatsapp" value={dadosFormulario?.whatsapp || ''} onChange={alterarCampo} required className="input-parceiro w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm shadow-sm transition-all" style={{ color: '#111827' }} placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#374151' }}>E-mail *</label>
                  <input type="email" name="email" value={dadosFormulario?.email || ''} onChange={alterarCampo} required className="input-parceiro w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm shadow-sm transition-all" style={{ color: '#111827' }} placeholder="email@escritorio.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#374151' }}>Ente Devedor *</label>
                  <div className="relative">
                    <select name="tipoPrecatorio" value={dadosFormulario?.tipoPrecatorio || ''} onChange={alterarCampo} required className="input-parceiro w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm appearance-none shadow-sm transition-all cursor-pointer" style={{ color: '#374151' }}>
                      <option value="">Selecione...</option>
                      <option value="federal">Federal</option>
                      <option value="estadual">Estadual</option>
                      <option value="municipal">Municipal</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: '#9ca3af' }} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#374151' }}>Valor Aprox. (R$) *</label>
                  <input type="text" name="valorPrecatorio" value={dadosFormulario?.valorPrecatorio || ''} onChange={alterarCampo} required className="input-parceiro w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm shadow-sm transition-all" style={{ color: '#111827' }} placeholder="R$ 0,00" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#374151' }}>Detalhes Adicionais (Opcional)</label>
                <textarea name="mensagem" value={dadosFormulario?.mensagem || ''} onChange={alterarCampo} rows={3} className="input-parceiro w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm resize-none shadow-sm transition-all" style={{ color: '#111827' }} placeholder="Contexto breve do processo..." />
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  className="btn-enviar w-full py-4 rounded-xl flex items-center justify-center gap-3 font-bold text-lg"
                >
                  <Send className="w-5 h-5" />
                  Enviar para Análise
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};