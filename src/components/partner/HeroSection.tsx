import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import heroImage from '../../assets/comprec-branca.png';

export const HeroSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative bg-gradient-to-b from-emerald-50/30 to-white pt-12 pb-16 lg:pt-20 lg:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <motion.div className="flex flex-col justify-center order-2 lg:order-1" initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 text-emerald-700 font-semibold mb-4 text-sm">
              <ShieldCheck className="w-4 h-4" />
              Programa de Parceria
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-[1.15] tracking-tight">
              Indique <span style={{color:'#48BAB8'}}>precatórios</span> e seja comissionado.
            </h1>
            <p className="text-base text-gray-600 mb-8 leading-relaxed max-w-lg">
              Entre no mercado de precatórios e participe de operações com tickets médios elevados, análise jurídica completa e total clareza no processo.
            </p>
            <div>
              <button
                type="button"
                onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 text-white px-6 py-4 rounded-lg hover:brightness-110 transition-all font-semibold text-base shadow-md w-fit "
                style={{backgroundColor: '#48bab8'}}
              >
                Indicar um Processo
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div className="order-1 lg:order-2" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <img src={heroImage} alt="Advogado Parceiro" className="h-auto max-h-[350px] object-cover mx-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};