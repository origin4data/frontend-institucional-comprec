import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import heroImage from 'figma:asset/ea6c933548748f703b974b42930a4d8db2be0bf8.png';

export function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-0">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 md:min-h-[700px] lg:min-h-[800px]">
          {/* Conteúdo de Texto - Centralizado Verticalmente */}
          <motion.div
            className="flex flex-col justify-center order-2 md:order-1 py-6 sm:py-8 md:py-12 lg:py-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-900 mb-4 sm:mb-6 leading-tight">
              Antecipe seus Precatórios com Segurança
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Especialistas em consultoria e antecipação de precatórios. 
              Transforme seu direito em dinheiro agora, com transparência e agilidade.
            </p>
            <div>
              <a
                href="#contato"
                className="inline-block bg-emerald-800 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg hover:bg-emerald-900 transition-colors text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl"
              >
                Consulte Agora
              </a>
            </div>
          </motion.div>

          {/* Imagem Hero - Visível em todas as telas */}
          <motion.div 
            className="relative flex items-center order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={heroImage}
              alt="Consultor Comprec"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover max-h-[400px] md:max-h-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}