import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import heroImage from '../../assets/pessoa_em_pe2.png';

export const HeroSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section 
      // Retiramos o "items-center" e o padding inferior para garantir que encoste ao fundo
      className="relative pt-24 lg:pt-32 flex flex-col justify-end overflow-hidden"
      style={{ backgroundColor: '#FFFFFF', minHeight: '85vh' }}
    >
      {/* flex-grow para fazer o contêiner ocupar toda a altura */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex items-stretch">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full items-stretch">
          
          {/* COLUNA DO TEXTO */}
          <motion.div 
            // Adicionamos pb-16 / lg:pb-32 para manter o texto centralizado visualmente
            className="flex flex-col justify-center order-2 lg:order-1 pb-16 lg:pb-32" 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp}
          >
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

          {/* COLUNA DA IMAGEM */}
          <motion.div 
            // items-end joga a imagem para a base da linha do grid
            className="order-1 lg:order-2 flex justify-center items-end" 
            initial={{ opacity: 0, scale: 0.98 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img 
              src={heroImage} 
              alt="Advogado Parceiro" 
              // Adicionado 'object-bottom' e 'block'
              className="w-full h-auto max-w-112.5 lg:max-w-150 object-contain object-bottom drop-shadow-2xl block" 
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};