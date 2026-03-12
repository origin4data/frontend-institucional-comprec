import { motion } from 'motion/react';
import heroImage from '@/assets/miguel_cinza.png';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] pt-6 md:pt-10 px-4 sm:px-8 pb-0 z-10 bg-[#FDFDFD] flex flex-col overflow-hidden">
      <div className="mx-auto max-w-7xl w-full grow flex flex-col md:flex-row items-stretch justify-between gap-8 lg:gap-16">
        <motion.div
          className="flex flex-col justify-center w-full md:w-5/12 lg:w-1/2 order-1 pb-12 md:pb-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
            <h2 className="text-4xl font-outfit md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Antecipe seus <span className='text-[#48BAB8]'>Precatórios</span> com Segurança
            </h2>
            <p className="text-base md:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Especialistas em consultoria e antecipação de precatórios.
              Transforme seu direito em dinheiro agora, com transparência e agilidade.
            </p>
            <div>
              <button
                type="button"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-3 text-white px-8 py-3 rounded-xl hover:brightness-110 transition-all font-bold text-lg shadow-lg hover:-translate-y-1 w-fit cursor-pointer"
                style={{backgroundColor: '#48bab8'}}
              >
                Indicar um Processo
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="relative w-full md:w-7/12 lg:w-1/2 order-2 flex justify-center md:justify-end items-end mt-auto"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={heroImage}
            alt="Consultor Comprec"
            className="w-auto max-h-[55vh] md:max-h-[70vh] lg:max-h-[85vh] object-contain object-bottom relative z-20 block"
          />
        </motion.div>
      </div>
    </section>
  );
}
