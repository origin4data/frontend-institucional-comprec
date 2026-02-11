import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const perguntasFrequentes = [
  {
    pergunta: 'O que é um precatório?',
    resposta: 'Precatório é uma requisição de pagamento feita ao Poder Judiciário contra a Fazenda Pública (União, Estados ou Municípios), decorrente de uma decisão judicial transitada em julgado. É a forma como o poder público paga suas dívidas judiciais.',
  },
  {
    pergunta: 'Quanto tempo demora para receber um precatório?',
    resposta: 'O prazo pode variar bastante, geralmente entre 5 a 15 anos, dependendo do ente público devedor e do orçamento disponível. Por isso, muitas pessoas optam pela antecipação através de empresas especializadas.',
  },
  {
    pergunta: 'Como funciona a antecipação de precatórios?',
    resposta: 'A antecipação é um processo onde você cede seu direito de recebimento do precatório para uma empresa especializada, que paga um valor imediato. Assim, você não precisa esperar anos para receber seu dinheiro.',
  },
  {
    pergunta: 'Quais documentos são necessários?',
    resposta: 'Geralmente são necessários: RG, CPF, comprovante de residência, documentos do processo judicial, certidão de objeto e pé do precatório, e procuração (se houver). Nossa equipe orienta sobre toda a documentação necessária.',
  },
  {
    pergunta: 'É seguro antecipar meu precatório?',
    resposta: 'Sim! A antecipação é totalmente legal e segura quando feita com empresas confiáveis e especializadas como a Comprec. Todo o processo é transparente, com contratos registrados e acompanhamento jurídico completo.',
  },
  {
    pergunta: 'Quanto vou receber pela antecipação?',
    resposta: 'O valor depende de diversos fatores como o tipo de precatório, prazo estimado de pagamento e condições de mercado. Nossa equipe faz uma análise personalizada para oferecer as melhores condições possíveis.',
  },
];

export function FAQ() {
  const [indiceAberto, setIndiceAberto] = React.useState<number | null>(null);

  const alternarFAQ = (indice: number) => {
    setIndiceAberto(indiceAberto === indice ? null : indice);
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-900 mb-4 sm:mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Tire suas dúvidas sobre o processo de antecipação de precatórios
          </p>
        </motion.div>

        <div className="space-y-3">
          {perguntasFrequentes.map((item, indice) => (
            <motion.div
              key={indice}
              className="bg-white rounded-lg border-2 border-gray-200 overflow-hidden hover:border-emerald-900 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: indice * 0.1 }}
            >
              <button
                onClick={() => alternarFAQ(indice)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-emerald-900 text-base sm:text-lg leading-relaxed pr-4">
                  {item.pergunta}
                </span>
                <ChevronDown className={`w-5 h-5 text-emerald-900 flex-shrink-0 transition-transform duration-300 ${
                  indiceAberto === indice ? 'rotate-180' : ''
                }`} strokeWidth={2} />
              </button>

              <AnimatePresence>
                {indiceAberto === indice && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 border-t border-gray-200">
                      <p className="text-gray-600 leading-relaxed pt-4">
                        {item.resposta}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}