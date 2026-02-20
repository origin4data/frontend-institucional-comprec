import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { depoimentos } from '../mock/depoimentos';

export function Testimonials() {
  const [indiceAtual, setIndiceAtual] = React.useState(0);
  const [direcao, setDirecao] = React.useState(0);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const isTablet = typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth < 1024;
  
  const cardsParaMostrar = isMobile ? 1 : isTablet ? 2 : 3;
  const totalPontos = Math.ceil(depoimentos.length / cardsParaMostrar);
  const pontoAtual = Math.floor(indiceAtual / cardsParaMostrar);

  const avancarProximo = () => {
    setDirecao(1);
    setIndiceAtual((prev) => 
      prev + cardsParaMostrar >= depoimentos.length ? 0 : prev + cardsParaMostrar
    );
  };

  const voltarAnterior = () => {
    setDirecao(-1);
    setIndiceAtual((prev) => 
      prev === 0 ? Math.max(0, depoimentos.length - cardsParaMostrar) : prev - cardsParaMostrar
    );
  };

  const depoimentosVisiveis = depoimentos.slice(indiceAtual, indiceAtual + cardsParaMostrar);

  const variantes = {
    entrar: (direcao: number) => ({
      x: direcao > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    centro: {
      x: 0,
      opacity: 1,
    },
    sair: (direcao: number) => ({
      x: direcao < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-900 mb-4 sm:mb-6" 
              style={{ color: '#48BAB8' }}
            >
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Histórias reais de quem confiou em nossos serviços
          </p>
        </motion.div>

        <div className="relative">
          {/* Botão Anterior */}
          <button
            onClick={voltarAnterior}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-emerald-900 hover:bg-emerald-800 text-white p-3 rounded-full transition-all -translate-x-4 hidden md:flex items-center justify-center"
            aria-label="Anterior"
            style={{ backgroundColor: '#48BAB8' }}
          >
            <ChevronLeft className="w-6 h-6" strokeWidth={2} />
          </button>

          {/* Botão Próximo */}
          <button
            onClick={avancarProximo}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-emerald-900 hover:bg-emerald-800 text-white p-3 rounded-full transition-all translate-x-4 hidden md:flex items-center justify-center"
            aria-label="Próximo"
            style={{ backgroundColor: '#48BAB8' }}
          >
            <ChevronRight className="w-6 h-6" strokeWidth={2} />
          </button>

          {/* Container do Carrossel */}
          <div className="overflow-hidden px-2 sm:px-4 md:px-16">
            <div className="relative min-h-[320px] sm:min-h-[360px]">
              <AnimatePresence initial={false} custom={direcao} mode="wait">
                <motion.div
                  key={indiceAtual}
                  custom={direcao}
                  variants={variantes}
                  initial="entrar"
                  animate="centro"
                  exit="sair"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {depoimentosVisiveis.map((depoimento, indice) => (
                    <div
                      key={`${indiceAtual}-${indice}`}
                      className="bg-white border-2 border-gray-200 p-6 sm:p-8 rounded-xl hover:border-emerald-900 transition-all h-full"
                    >
                      {/* Foto e informações */}
                      <div className="flex items-center mb-6">
                        <ImageWithFallback
                          src={depoimento.imagem}
                          alt={depoimento.nome}
                          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
                        />
                        <div className="ml-4">
                          <h3 className="font-bold text-emerald-900 text-base sm:text-lg">{depoimento.nome}</h3>
                          <p className="text-sm text-gray-600">{depoimento.cargo}</p>
                        </div>
                      </div>

                      {/* Estrelas */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(depoimento.avaliacao)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-emerald-900 text-emerald-900" strokeWidth={1.5} />
                        ))}
                      </div>

                      {/* Texto do depoimento */}
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        "{depoimento.texto}"
                      </p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Indicadores de Pontos */}
          <div className="flex justify-center gap-2 mt-8 sm:mt-12">
            {[...Array(totalPontos)].map((_, indice) => (
              <button
                key={indice}
                onClick={() => {
                  setDirecao(indice > pontoAtual ? 1 : -1);
                  setIndiceAtual(indice * cardsParaMostrar);
                }}
                className={`rounded-full transition-all duration-300 ${
                  indice === pontoAtual
                    ? 'bg-emerald-900 w-8 h-3'
                    : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                }`}
                aria-label={`Ir para slide ${indice + 1}`}
              />
            ))}
          </div>

          {/* Botões de Navegação Mobile */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <button
              onClick={voltarAnterior}
              className="bg-emerald-900 hover:bg-emerald-800 text-white p-3 rounded-full transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2} />
            </button>
            <button
              onClick={avancarProximo}
              className="bg-emerald-900 hover:bg-emerald-800 text-white p-3 rounded-full transition-all"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}