import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import heroImage from '../../assets/comprec-render.png';

export const HeroSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative bg-[gradient-to-b] from-emerald-50/30 to-white py-20 lg:py-0 min-h-[85vh] flex items-center"
    style ={{backgroundColor: '#FFFF'}}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div className="flex flex-col justify-center order-2 lg:order-1" initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 text-emerald-700 font-semibold mb-6 text-sm lg:text-base uppercase tracking-wider">
              <ShieldCheck className="w-5 h-5" />
              Programa de Parceria
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.15] tracking-tight">
              Indique <span style={{color:'#48BAB8'}}>precatórios</span> e seja comissionado.
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
              Entre no mercado de precatórios e participe de operações com tickets médios elevados, análise jurídica completa e total clareza no processo.
            </p>
            <div>
              <button
                type="button"
                onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-3 text-white px-8 py-3 rounded-xl hover:brightness-110 transition-all font-bold text-lg shadow-lg hover:-translate-y-1 w-fit"
                style={{backgroundColor: '#48bab8'}}
              >
                Indicar um Processo
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
          <motion.div className="order-1 lg:order-2 flex justify-center" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <img 
              src={heroImage} 
              alt="Advogado Parceiro" 
              className="w-full h-auto max-w-112.5 lg:max-w-150 object-contain drop-shadow-2xl" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
