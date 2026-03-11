import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import heroImage from '../../assets/patrick_comprec.png';

export const HeroSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section 
      className="relative pt-24 lg:pt-32 flex flex-col justify-between overflow-hidden bg-white min-h-dvh lg:min-h-[85vh]"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grow flex flex-col h-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-16 grow">
          <motion.div 
            className="flex flex-col items-center text-center lg:items-start lg:text-left 
            justify-center w-full lg:w-1/2 pt-4 lg:pt-0 lg:pb-32" 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp}
          >
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-emerald-700 
            font-semibold mb-6 text-sm lg:text-base uppercase tracking-wider">
              <ShieldCheck className="w-5 h-5" />
              Programa de Parceria
            </div>
            <h1 className="text-4xl font-outfit sm:text-5xl lg:text-6xl font-bold
             text-gray-900 mb-6 leading-[1.15] tracking-tight">
              Indique <span className="text-[#48BAB8]">precatórios</span> e seja comissionado.
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Entre no mercado de precatórios e participe de operações com tickets médios elevados, análise jurídica completa e total clareza no processo.
            </p>
            <button
              type="button"
              onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-3 text-white
              px-8 py-3 rounded-xl hover:brightness-110 transition-all font-bold text-lg 
              shadow-lg hover:-translate-y-1 w-fit bg-[#48BAB8]"
            >
              Indicar um Processo
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center items-end mt-auto" 
            initial={{ opacity: 0, scale: 0.98 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img 
              src={heroImage} 
              alt="Advogado Parceiro" 
              className="w-full h-auto max-w-70 sm:max-w-sm lg:max-w-150 object-contain 
              object-bottom drop-shadow-2xl block" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
