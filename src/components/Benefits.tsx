import React from 'react';
import { motion } from 'motion/react';
import { Shield, CheckCircle, Award } from 'lucide-react';

export function Benefits() {
  const pilares = [
    {
      icone: CheckCircle,
      titulo: 'Transparência Total',
      descricao: 'Atuamos com comunicação clara e objetiva, apresentando prazos, riscos e possibilidades de forma honesta e acessível.',
      destaque: 'Aqui, o cliente entende cada etapa do processo antes de qualquer decisão.',
    },
    {
      icone: Shield,
      titulo: 'Segurança Jurídica',
      descricao: 'Todas as operações são conduzidas com rigor técnico, análise criteriosa e total conformidade legal.',
      destaque: 'A segurança jurídica é o que sustenta decisões conscientes e relações de longo prazo.',
    },
    {
      icone: Award,
      titulo: 'Compromisso',
      descricao: 'Atuamos com responsabilidade e dedicação em cada etapa do processo, assumindo o compromisso de conduzir todas as análises e negociações com seriedade, ética e respeito ao cliente.',
      destaque: null,
    },
  ];

  return (
    <section className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-900 mb-6">
            Nossos Pilares
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Orientam a forma como atuamos, atendemos e conduzimos cada processo, 
            garantindo clareza, segurança jurídica e respeito à história de cada cliente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pilares.map((pilar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-emerald-900 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-emerald-900 flex items-center justify-center flex-shrink-0">
                  <pilar.icone className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-emerald-900">
                  {pilar.titulo}
                </h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {pilar.descricao}
              </p>
              
              {pilar.destaque && (
                <p className="text-emerald-900 font-semibold leading-relaxed pt-4 border-t border-gray-200">
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