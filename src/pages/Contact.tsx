import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Form } from '../components/Form';
import logoComprec from 'figma:asset/ecdae11385996d2773bf622e31dbb0a957ef414f.png';
import logoComprecTexto from 'figma:asset/0da24833eec9795262c879e0ac0539582ae65f6a.png';

export function Contact() {
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
              Entre em Contato
            </h1>
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Cada precatório possui particularidades que exigem análise, cuidado e clareza. 
              Por isso, nosso atendimento começa com uma conversa transparente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cards de Informação */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icone: Phone, titulo: 'Telefone', conteudo: '(21) 98982-2163', link: 'https://wa.me/5521989822163' },
              { icone: Mail, titulo: 'E-mail', conteudo: 'contato@comprec.com.br', link: 'mailto:contato@comprec.com.br' },
              { icone: MapPin, titulo: 'Endereço', conteudo: 'Av. Pres. Vargas, 435', link: '#' },
              { icone: Clock, titulo: 'Horário', conteudo: 'Seg - Sex: 9h às 18h', link: null },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white border-2 border-gray-200 p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="bg-emerald-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                  <item.icone size={24} />
                </div>
                <h3 className="font-bold text-emerald-900 mb-2">{item.titulo}</h3>
                {item.link ? (
                  <a href={item.link} className="text-gray-600 hover:text-emerald-700 transition-colors font-medium block">
                    {item.conteudo}
                  </a>
                ) : (
                  <p className="text-gray-600 font-medium">{item.conteudo}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Principal */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Coluna Esquerda */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-6">
                Transformando Espera em Decisão Segura
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Na COMPREC, conduzimos cada atendimento de forma personalizada, 
                  explicando cenários, riscos e oportunidades com transparência.
                </p>
                <p>
                  Preencha o formulário e dê o primeiro passo para transformar a espera em 
                  uma decisão segura.
                </p>
              </div>

              {/* Logo Ajustada: Emblema e Nome no mesmo nível */}
    

              <div className="p-8 border-2 border-gray-100 rounded-2xl bg-gray-50/50">
                <h3 className="font-bold text-emerald-900 text-xl mb-6">Nossa Abordagem</h3>
                <ul className="space-y-4 text-gray-700">
                  {['Conversa transparente', 'Análise técnica', 'Orientação especializada'].map((text, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                      <span className="font-medium">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='flex items-center gap-4 mt-8'>
               <div className="mt-10 mb-10 flex items-center">
                <img 
                  src={logoComprec} 
                  alt="Logo COMPREC" 
                  className="h-16 w-auto object-contain block"
                />
              </div>
                <div>
                  <img 
                    src={logoComprecTexto}  
                    alt="Texto COMPREC" 
                    className="h-10" 
                  />
                </div>
              </div>
            </motion.div>

            {/* Coluna Direita */}
            <motion.div
              className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Form />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}