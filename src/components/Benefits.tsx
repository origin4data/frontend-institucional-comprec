import { motion } from 'motion/react';
import { pilares } from '../mock/pilares';

export function Benefits() {
  return (
    <section style={{ 
      paddingTop: '80px',
      paddingBottom: '80px', 
    }} className="relative bg-emerald-900 pb-16 pt-24 sm:pb-24 sm:pt-32 md:pt-40 lg:pb-32 lg:pt-48 z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Nossos Pilares
          </h2>
          <p className="text-base sm:text-lg text-white max-w-3xl mx-auto">
            Orientam a forma como atuamos, atendemos e conduzimos cada processo, 
            garantindo clareza, segurança jurídica e respeito à história de cada cliente.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pilares.map((pilar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ borderColor: '#428d8b' }}
              className="bg-white border-2 border-gray-200 rounded-xl p-8 transition-all hover:shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#48BAB8' }}
                >
                  <pilar.icone className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 
                  className="text-xl font-bold" 
                  style={{ color: '#48BAB8' }}
                >
                  {pilar.titulo}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                {pilar.descricao}
              </p>
              {pilar.destaque && (
                <p className="font-semibold leading-relaxed pt-4 border-t border-gray-200 text-gray-800">
                  {pilar.destaque}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}