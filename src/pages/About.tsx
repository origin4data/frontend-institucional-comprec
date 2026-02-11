import React from 'react';
import { motion } from 'motion/react';
import { Shield, CheckCircle, Award } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Seção Hero */}
      <section className="bg-white py-16 sm:py-24 lg:py-32 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-emerald-900 mb-6">
              Quem Somos
            </h1>
            <div className="space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed text-left">
              <p>
                A COMPREC é uma empresa especializada na gestão e aquisição de 
                ativos judiciais, com atuação focada em precatórios. Nascemos para 
                transformar a espera por um direito reconhecido pela Justiça em uma 
                decisão segura, consciente e transparente.
              </p>
              <p>
                Atuamos com rigor jurídico, respeito absoluto à legislação e clareza em 
                cada etapa do processo. Nosso trabalho começa pela análise técnica do 
                crédito e segue com um atendimento humano, responsável e 
                comprometido com a realidade de cada cliente.
              </p>
              <p>
                Acreditamos que cada precatório carrega uma história, um tempo e uma 
                expectativa. Por isso, nossa atuação é pautada pela segurança jurídica, 
                pela transparência total e pelo compromisso de longo prazo, 
                oferecendo alternativas claras para quem deseja antecipar valores com 
                tranquilidade.
              </p>
              <p className="font-semibold text-emerald-900">
                Na COMPREC, não prometemos atalhos. Oferecemos informação, ética 
                e confiança, para que cada decisão seja tomada com consciência e 
                segurança.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Como Conduzimos */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-6">
                Como Conduzimos
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Cada operação é conduzida com método, responsabilidade e total respeito 
                  à história de cada cliente. Nosso trabalho começa pela escuta atenta, 
                  passa por análises técnicas rigorosas e segue até a formalização segura 
                  do processo.
                </p>
                <p>
                  Atuamos com clareza em cada etapa, explicando decisões, prazos e 
                  condições de forma objetiva. Mais do que conduzir uma operação, nosso 
                  compromisso é oferecer segurança jurídica, transparência e 
                  acompanhamento constante, do primeiro contato à conclusão.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1589979034086-5885b60c8f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG9mZmljZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzAyNDkwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Equipe Comprec"
                className="rounded-xl border-2 border-gray-200"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nossos Pilares */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4">
              Nossos Pilares
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Nossos pilares orientam a forma como atuamos, atendemos e conduzimos cada 
              processo, garantindo clareza, segurança jurídica e respeito à história de cada cliente.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-2 border-gray-200 rounded-xl p-8 hover:border-emerald-900 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-900 flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Transparência Total</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Atuamos com comunicação clara e objetiva, apresentando prazos, riscos e 
                  possibilidades de forma honesta e acessível.
                </p>
                <p className="font-semibold text-emerald-900">
                  Aqui, o cliente entende cada etapa do processo antes de qualquer decisão.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-2 border-gray-200 rounded-xl p-8 hover:border-emerald-900 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-900 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Segurança Jurídica</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Todas as operações são conduzidas com rigor técnico, análise criteriosa e 
                  total conformidade legal.
                </p>
                <p className="font-semibold text-emerald-900">
                  A segurança jurídica é o que sustenta decisões conscientes e relações de 
                  longo prazo.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-2 border-gray-200 rounded-xl p-8 hover:border-emerald-900 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-900 flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Compromisso</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Atuamos com responsabilidade e dedicação em cada etapa do processo, 
                  assumindo o compromisso de conduzir todas as análises e negociações com 
                  seriedade, ética e respeito ao cliente.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção CTA */}
      <section className="py-16 sm:py-24 bg-emerald-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Transformando Espera em Decisão Segura
            </h2>
            <p className="text-lg sm:text-xl text-emerald-100 mb-8">
              Entre em contato e saiba como podemos ajudar você.
            </p>
            <a
              href="#contato"
              className="inline-block bg-white text-emerald-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Fale com um Consultor
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}