"use client";

import React, { useState } from 'react';
import { ArrowRight, Info } from 'lucide-react';

const slidesPublico = [
  {
    tituloCurto: "Empresários",
    tituloCompleto: "Empresários e empreendedores",
    descricaoCurta: "Para quem tem contato frequente com outros empresários e busca uma nova fonte de receita.",
    descricaoCompleta: "Que têm contato frequente com outros empresários, credores ou empresas com ativos judiciais e buscam uma nova fonte de receita estratégica.",
    imagem: "https://lojaintegrada.com.br/hub//wp-content/uploads/2023/10/o-que-e-consultor-de-negocios-1024x683.jpg",
  },
  {
    tituloCurto: "Advogados",
    tituloCompleto: "Advogados",
    descricaoCurta: "Para quem deseja indicar precatórios com segurança jurídica e preservação de honorários.",
    descricaoCompleta: "Que desejam indicar precatórios de seus clientes ou contatos, com segurança jurídica, preservação de honorários e total clareza no processo.",
    imagem: "https://img.freepik.com/fotos-premium/preparacao-de-relatorios-de-testemunhas_1169648-147753.jpg", 
  },
  {
    tituloCurto: "Consultores",
    tituloCompleto: "Consultores",
    descricaoCurta: "Para profissionais que enxergam valor em indicações qualificadas de ativos.",
    descricaoCompleta: "Que atuam próximos a empresas ou pessoas físicas com créditos judiciais e enxergam valor em indicações qualificadas.",
    imagem: "https://aicibrasil.org/wp-content/uploads/2024/05/im-1-1024x576.png",
  },
  {
    tituloCurto: "Networking",
    tituloCompleto: "Networking",
    descricaoCurta: "Para quem prefere indicar para uma operação profissional, sem se envolver na negociação.",
    descricaoCompleta: "Que conhecem alguém que possui precatório e preferem indicar para uma operação profissional, sem se envolver diretamente na negociação.",
    imagem: "https://png.pngtree.com/thumb_back/fh260/background/20220531/pngtree-elderly-gentleman-embracing-modern-technology-within-the-comfort-of-his-home-photo-image_30735076.jpg",
  }
];

// O SEGREDO ESTÁ AQUI NA DECLARAÇÃO DO COMPONENTE:
export const AccordionGallery = ({ onSelecionarPerfil }: { onSelecionarPerfil?: (perfil: any) => void }) => {
  const [cardAtivo, setCardAtivo] = useState(0);

  const irParaFormulario = () => {
    // Avisa a página mãe qual é o perfil escolhido antes de descer pro formulário
    if(onSelecionarPerfil) {
      onSelecionarPerfil(slidesPublico[cardAtivo]);
    }
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= CABEÇALHO ================= */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1e293b] mb-4">
            Pra quem é o <span className="text-[#48bab8]">Programa de Parceiros?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            O Programa foi desenvolvido para pessoas e profissionais que possuem relacionamentos qualificados e desejam atuar no mercado de precatórios de forma ética, estruturada e transparente.
          </p>
        </div>

        {/* ================= CARROSSEL ACORDEÃO ================= */}
        <div 
          className="flex flex-row w-full gap-2 md:gap-4 mb-10"
          style={{ height: '400px' }} 
        >
          {slidesPublico.map((slide, index) => {
            const isActive = cardAtivo === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setCardAtivo(index)}
                onClick={() => setCardAtivo(index)}
                className="group relative rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-xl bg-gray-900"
                style={{ 
                  flex: isActive ? '3.5 1 0%' : '1 1 0%', 
                  height: '100%' 
                }}
              >
                {/* IMAGEM BASE */}
                <img 
                  src={slide.imagem} 
                  alt={slide.tituloCurto} 
                  className={`absolute inset-0 w-full h-full object-cover object-[center_top] transition-all duration-1000 
                    ${isActive ? 'scale-105 grayscale-0 brightness-100 contrast-100' : 'scale-100 grayscale brightness-75 contrast-125'}`} 
                />
                
                {/* EFEITO DUOTONE (VERDE) */}
                <div 
                  className={`absolute inset-0 bg-[#48bab8] transition-opacity duration-700 ${isActive ? 'opacity-0' : 'opacity-100'}`}
                  style={{ mixBlendMode: 'multiply' }} 
                ></div>
                
                {/* Gradiente escuro no topo */}
                <div className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/90 via-black/20 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-90' : 'opacity-60'}`}></div>

                {/* Área do texto: Posicionado no TOPO */}
                <div className="absolute top-0 left-0 w-full p-6 md:p-8 flex justify-center items-start text-center z-10">
                  <h3 className={`text-white font-extrabold transition-all duration-500 drop-shadow-lg tracking-wide
                    ${isActive ? 'text-2xl md:text-3xl' : 'text-sm md:text-lg whitespace-nowrap'}
                  `}>
                    {isActive ? slide.tituloCompleto : slide.tituloCurto}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= PAINEL DINÂMICO DE INFORMAÇÕES ================= */}
        <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-500">
          
          <div className="w-full md:w-2/3">
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-5 h-5 text-gray-900" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-900">
                Perfil Selecionado
              </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5 transition-all duration-300">
              {slidesPublico[cardAtivo].tituloCompleto}
            </h3>
            
            <div className="bg-gray-50 border-l-4 border-[#48bab8] p-6 rounded-r-2xl transition-all duration-300">
              <span className="block text-sm font-semibold text-gray-900 mb-2">Este programa é ideal para:</span>
              <p className="text-gray-600 font-medium leading-relaxed">
                {slidesPublico[cardAtivo].descricaoCompleta}
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-4 md:mt-0">
            <div>
              {/* BOTÃO FINAL BLINDADO */}
              <button 
                onClick={irParaFormulario}
                className="btn-parceiro animate-pulse-slow w-full md:w-auto font-extrabold text-base md:text-lg py-4 md:py-5 px-6 md:px-8 rounded-2xl transition-all duration-300 shadow-xl shadow-[#48bab8]/30 flex items-center justify-center gap-2 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#48bab8]/40"
              >
                <span className="whitespace-nowrap">Quero ser Parceiro</span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" strokeWidth={3} />
              </button>
              
              {/* CSS Embutido para a Animação e Hover do Botão */}
              <style>{`
                .btn-parceiro {
                  background-color: #48bab8;
                  color: #ffffff;
                }
                .btn-parceiro:hover {
                  background-color: #3ba3a1; 
                }
                
                @keyframes pulse-slow {
                  0%, 100% { transform: scale(1); }
                  50% { transform: scale(1.03); }
                }
                .animate-pulse-slow {
                  animation: pulse-slow 3s ease-in-out infinite;
                }
                .animate-pulse-slow:hover {
                  animation: none; 
                }
              `}</style>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};