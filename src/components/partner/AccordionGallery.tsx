"use client";
import { useState } from 'react';
import { ArrowRight, Info } from 'lucide-react';
import { slidesPublico } from '../../mock/slidesPublicos';

export const AccordionGallery = ({ onSelecionarPerfil }: { onSelecionarPerfil?: (perfil: any) => void }) => {
  const [cardAtivo, setCardAtivo] = useState(0);

  const irParaFormulario = () => {
    if(onSelecionarPerfil) {
      onSelecionarPerfil(slidesPublico[cardAtivo]);
    }
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1e293b] mb-4">
            Pra quem é o <span className="text-[#48bab8]">Programa de Parceiros?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            O Programa foi desenvolvido para pessoas e profissionais que possuem relacionamentos qualificados e desejam atuar no mercado de precatórios de forma ética, estruturada e transparente.
          </p>
        </div>
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
                <img 
                  src={slide.imagem} 
                  alt={slide.tituloCurto} 
                  className={`absolute inset-0 w-full h-full object-cover object-[center_top] transition-all duration-1000 
                    ${isActive ? 'scale-105 grayscale-0 brightness-100 contrast-100' : 'scale-100 grayscale brightness-75 contrast-125'}`} 
                />
                <div 
                  className={`absolute inset-0 bg-[#48bab8] transition-opacity duration-700 ${isActive ? 'opacity-0' : 'opacity-100'}`}
                  style={{ mixBlendMode: 'multiply' }} 
                ></div>
                <div className={`absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-black/90 via-black/20 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-90' : 'opacity-60'}`}></div>
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
              <button 
                onClick={irParaFormulario}
                className="btn-parceiro animate-pulse-slow w-full md:w-auto font-extrabold text-base md:text-lg py-4 md:py-5 px-6 md:px-8 rounded-2xl transition-all duration-300 shadow-xl shadow-[#48bab8]/30 flex items-center justify-center gap-2 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#48bab8]/40"
              >
                <span className="whitespace-nowrap">Quero ser Parceiro</span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 shrink-0" strokeWidth={3} />
              </button>
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
