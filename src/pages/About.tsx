"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

// O @ts-ignore faz o TypeScript parar de dar erro na linha do vídeo
// @ts-ignore
import videoEquipe from '../assets/comprecmovie.mp4';

export function About() {
  return (
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

      {/* ================= NOSSOS PILARES (BLINDADOS, ALTOS E MODERNOS) ================= */}
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
              {/* shrink-0 impede a imagem de sumir, h-[400px] deixa bem vertical */}
              <div className="relative w-full h-72 md:h-80 lg:h-[400px] shrink-0 bg-gray-100 border-b border-gray-100">
                <ImageWithFallback
                  src="https://i.imgur.com/89kldkv.jpeg"
                  alt="Transparência Total"
                  className="w-full h-full object-cover object-[center_top]"
                />
              </div>

              {/* flex-grow faz o texto preencher o espaço restante, mantendo os botões/rodapés dos cards alinhados */}
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

      {/* ================= SEÇÃO CTA (LIMPA E SEM VAZAR) ================= */}
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
            
            <a
              href="#formulario"
              className="inline-block bg-white px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all font-bold text-lg max-w-full"
              style={{ color: '#48bab8' }}
            >
              Fale com um Consultor
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}