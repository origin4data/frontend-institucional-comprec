import React from 'react';
import { motion } from 'motion/react';
import heroImage from '@/assets/background-hero.jpg';

export function Hero() {
  return (
    <section 
      style={{ 
        background: 'linear-gradient(to bottom, #FDFDFD 88.5%, #F9FAFB 85%)' 
      }} 
      className="relative overflow-hidden px-2 sm:px-1.5"
    >
      <div className="relative z-10 mx-auto max-w-7xl py-8 sm:py-12 lg:py-0">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 md:min-h-[700px] lg:min-h-[800px]">
          
          <motion.div
            className="flex flex-col justify-center order-2 md:order-1 py-6 sm:py-8 md:py-12 lg:py-20 w-full md:w-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Antecipe seus <span style={{ color: '#48BAB8' }}>Precatórios</span> com Segurança
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                Especialistas em consultoria e antecipação de precatórios. 
                Transforme seu direito em dinheiro agora, com transparência e agilidade.
              </p>
              <div className='flex items-center'>
                <motion.a 
                  className="inline-block text-white px-8 py-3 sm:py-4 sm:px-12 rounded-xl 
                  transition-all text-sm font-semibold shadow-md" 
                  href="#contato"
                  whileHover={{ backgroundColor: '#428d8b' }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  style={{ backgroundColor: '#48BAB8' }}
                >
                  Consulte Agora
                </motion.a>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="relative flex items-center justify-center order-1 md:order-2 w-full md:w-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={heroImage}
              alt="Consultor Comprec"
              className="h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] w-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
