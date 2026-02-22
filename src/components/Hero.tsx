import { motion } from 'motion/react';
import heroImage from '@/assets/background-hero.jpg';
 
export function Hero() {
  return (
    <section className="relative px-4 sm:px-8 pt-12 md:pt-20 z-10 bg-[#FDFDFD]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 lg:gap-16">
          <motion.div
            className="flex flex-col justify-center w-full md:w-1/2 order-1 py-6 md:py-12 lg:py-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Antecipe seus <span className='text-[#48BAB8]'>Precatórios</span> com Segurança
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                Especialistas em consultoria e antecipação de precatórios.
                Transforme seu direito em dinheiro agora, com transparência e agilidade.
              </p>
             <div className="flex items-center justify-center md:justify-start w-full">
                <motion.a
                  className="inline-block sm:w-80 text-center text-white py-3 sm:py-4 rounded-xl transition-all text-sm sm:text-base font-semibold shadow-md bg-[#48BAB8] hover:bg-[#428d8b] w-[50%] cursor-pointer"
                  href="#contato"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contato')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start' 
                    });
                  }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                >
                  Consulte Agora
                </motion.a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="relative w-full md:w-1/2 order-2 flex justify-center md:justify-end items-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={heroImage}
              alt="Consultor Comprec"
              className="w-auto max-h-75 sm:max-h-100 md:max-h-125 lg:max-h-150 object-contain object-bottom relative z-20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
