"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  return (
    <div className="w-full overflow-x-hidden">
      
      {/* CSS Injetado para os hovers seguros */}
      <style>{`
        .hover-card-pilar {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-card-pilar:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>

      {/* Seção Hero */}
      <section className="bg-white py-16 sm:py-24 lg:py-32 border-b-2 border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
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

      {/* Como Conduzimos */}
      <section className="py-16 sm:py-24 bg-gray-50">
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
              <div className="w-full max-w-md">
                <ImageWithFallback
                  src="https://i.imgur.com/fCMlrr1.jpeg"
                  alt="Equipe Comprec"
                  className="rounded-2xl border-4 border-white shadow-xl w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= NOSSOS PILARES (FILTRO SUAVE + HOVER CORRIGIDO) ================= */}
      <section className="py-16 sm:py-24 bg-white">
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

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            
            {/* Pilar 1: Transparência Total */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group hover-card-pilar flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm"
            >
              <div className="w-full h-64 lg:h-72 relative bg-slate-900 overflow-hidden">
                {/* PRESET SUAVE: Saturação 80%, Contraste 105%. HOVER: Volta tudo ao normal */}
                <ImageWithFallback
                  src="https://i.imgur.com/1P5d6Xe.jpeg"
                  alt="Transparência Total"
                  className="w-full h-full object-cover object-[center_top] saturate-[.8] contrast-[1.05] transition-all duration-500 group-hover:scale-105 group-hover:saturate-100 group-hover:contrast-100"
                />
                {/* CAMADA UNIFICADORA SUAVE: Opacidade 20%. HOVER: Opacidade 0 */}
                <div 
                  className="absolute inset-0 transition-opacity duration-500 opacity-20 group-hover:opacity-0 pointer-events-none" 
                  style={{ backgroundColor: '#48bab8', mixBlendMode: 'multiply' }}
                ></div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1e293b' }}>
                  Transparência Total
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
                  <p>
                    Atuamos com comunicação clara e objetiva, apresentando prazos, riscos e 
                    possibilidades de forma honesta e acessível.
                  </p>
                  <p className="font-medium" style={{ color: '#48bab8' }}>
                    Aqui, o cliente entende cada etapa do processo antes de qualquer decisão.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Pilar 2: Segurança Jurídica */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group hover-card-pilar flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm"
            >
              <div className="w-full h-64 lg:h-72 relative bg-slate-900 overflow-hidden">
                <ImageWithFallback
                  src="https://i.imgur.com/n7oSuHK.jpeg"
                  alt="Segurança Jurídica"
                  className="w-full h-full object-cover object-[center_top] saturate-[.8] contrast-[1.05] transition-all duration-500 group-hover:scale-105 group-hover:saturate-100 group-hover:contrast-100"
                />
                <div 
                  className="absolute inset-0 transition-opacity duration-500 opacity-20 group-hover:opacity-0 pointer-events-none" 
                  style={{ backgroundColor: '#48bab8', mixBlendMode: 'multiply' }}
                ></div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1e293b' }}>
                  Segurança Jurídica
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
                  <p>
                    Todas as operações são conduzidas com rigor técnico, análise criteriosa e 
                    total conformidade legal.
                  </p>
                  <p className="font-medium" style={{ color: '#48bab8' }}>
                    A segurança jurídica é o que sustenta decisões conscientes e relações de 
                    longo prazo.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Pilar 3: Compromisso */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group hover-card-pilar flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm"
            >
              <div className="w-full h-64 lg:h-72 relative bg-slate-900 overflow-hidden">
                <ImageWithFallback
                  src="https://i.imgur.com/NXAYniX.jpeg"
                  alt="Compromisso"
                  className="w-full h-full object-cover object-[center_top] saturate-[.8] contrast-[1.05] transition-all duration-500 group-hover:scale-105 group-hover:saturate-100 group-hover:contrast-100"
                />
                <div 
                  className="absolute inset-0 transition-opacity duration-500 opacity-20 group-hover:opacity-0 pointer-events-none" 
                  style={{ backgroundColor: '#48bab8', mixBlendMode: 'multiply' }}
                ></div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1e293b' }}>
                  Compromisso
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
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

      {/* Seção CTA */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: '#48bab8' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Transformando Espera em Decisão Segura
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 font-medium">
              Entre em contato e saiba como podemos ajudar você.
            </p>
            <a
              href="#contato"
              className="inline-block bg-white px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all font-bold text-lg"
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