import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import logoComprec from 'figma:asset/67596b60077a129b8cb18eb43f53b80c352eee3a.png';

export function Contact() {
  const [dadosFormulario, setDadosFormulario] = React.useState({
    nome: '',
    whatsapp: '',
    email: '',
    esfera: '',
    tipo: '',
    valor: '',
    mensagem: '',
  });

  const enviarFormulario = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', dadosFormulario);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setDadosFormulario({
      nome: '',
      whatsapp: '',
      email: '',
      esfera: '',
      tipo: '',
      valor: '',
      mensagem: '',
    });
  };

  const alterarCampo = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDadosFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }));
  };

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
              Por isso, nosso atendimento começa com uma conversa transparente, voltada a 
              entender sua situação e apresentar as possibilidades de forma responsável.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Ao entrar em contato com a COMPREC, você será orientado por uma equipe 
              especializada, com foco em segurança jurídica, informações claras e decisões 
              bem fundamentadas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icone: Phone,
                titulo: 'Telefone',
                conteudo: '(21) 98982-2163',
                subtitulo: 'Seg - Sex: 9h às 18h',
                link: 'https://wa.me/5521989822163',
              },
              {
                icone: Mail,
                titulo: 'E-mail',
                conteudo: 'contato@comprec.com.br',
                subtitulo: 'Resposta em até 24h',
                link: 'mailto:contato@comprec.com.br',
              },
              {
                icone: MapPin,
                titulo: 'Endereço',
                conteudo: 'Av. Pres. Vargas, 435',
                subtitulo: 'Rio de Janeiro - RJ',
                link: 'https://maps.google.com/?q=Avenida+Presidente+Vargas+435+Rio+de+Janeiro',
              },
              {
                icone: Clock,
                titulo: 'Horário',
                conteudo: 'Seg - Sex',
                subtitulo: '9:00 - 18:00',
                link: null,
              },
            ].map((item, indice) => (
              <motion.div
                key={indice}
                className="text-center bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-emerald-900 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: indice * 0.1 }}
              >
                <div className="bg-emerald-900 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icone className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-emerald-900 mb-2">
                  {item.titulo}
                </h3>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-gray-900 font-semibold mb-1 hover:text-emerald-900 transition-colors block">
                    {item.conteudo}
                  </a>
                ) : (
                  <p className="text-gray-900 font-semibold mb-1">{item.conteudo}</p>
                )}
                <p className="text-gray-600 text-sm">{item.subtitulo}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção do Formulário */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Lado Esquerdo - Informações */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-6">
                Transformando Espera em Decisão Segura
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Na COMPREC, entendemos que cada decisão envolve expectativas, planejamento e 
                  responsabilidade. Por isso, conduzimos cada atendimento de forma personalizada, 
                  explicando cenários, riscos e oportunidades com transparência, sempre respeitando 
                  o momento e os objetivos de cada cliente.
                </p>
                <p>
                  Preencha o formulário e dê o primeiro passo para transformar a espera em 
                  uma decisão segura.
                </p>
              </div>

              <div className="mt-8 p-6 border-2 border-gray-200 rounded-xl">
                <h3 className="font-bold text-emerald-900 text-lg mb-4">
                  Nossa Abordagem
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-emerald-900 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Conversa transparente e acessível</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-emerald-900 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Análise técnica criteriosa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-emerald-900 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Orientação especializada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-emerald-900 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Decisões bem fundamentadas</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Lado Direito - Formulário */}
            <motion.div
              className="bg-gray-50 p-8 rounded-xl border-2 border-gray-200"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <form onSubmit={enviarFormulario} className="space-y-5">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-emerald-900 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={dadosFormulario.nome}
                    onChange={alterarCampo}
                    placeholder="Insira seu nome"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-900 outline-none transition-all bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-semibold text-emerald-900 mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={dadosFormulario.whatsapp}
                    onChange={alterarCampo}
                    placeholder="(00) 00000-0000"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-900 outline-none transition-all bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-emerald-900 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={dadosFormulario.email}
                    onChange={alterarCampo}
                    placeholder="seu@email.com"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-900 outline-none transition-all bg-white"
                  />
                </div>

                {/* Novo campo de seleção de Esfera substituindo o CPF */}
                <div>
                  <label htmlFor="esfera" className="block text-sm font-semibold text-emerald-900 mb-2">
                    Esfera do Precatório *
                  </label>
                  <select
                    id="esfera"
                    name="esfera"
                    value={dadosFormulario.esfera}
                    onChange={alterarCampo}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-900 outline-none transition-all bg-white"
                  >
                    <option value="">Selecione a esfera</option>
                    <option value="Municipal">Municipal</option>
                    <option value="Estadual">Estadual</option>
                    <option value="Federal">Federal</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="tipo" className="block text-sm font-semibold text-emerald-900 mb-2">
                    Tipo de Precatório *
                  </label>
                  <select
                    id="tipo"
                    name="tipo"
                    value={dadosFormulario.tipo}
                    onChange={alterarCampo}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-900 outline-none transition-all bg-white"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="alimentar">Alimentar</option>
                    <option value="comum">Comum (Não Alimentar)</option>
                    <option value="trabalhista">Trabalhista</option>
                    <option value="previdenciario">Previdenciário</option>
                    <option value="tributario">Tributário</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="valor" className="block text-sm font-semibold text-emerald-900 mb-2">
                    Valor a Receber (Estimado) *
                  </label>
                  <input
                    type="text"
                    id="valor"
                    name="valor"
                    value={dadosFormulario.valor}
                    onChange={alterarCampo}
                    placeholder="R$ 0,00"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-900 outline-none transition-all bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-semibold text-emerald-900 mb-2">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={dadosFormulario.mensagem}
                    onChange={alterarCampo}
                    placeholder="Conte-nos mais sobre seu caso..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-900 outline-none transition-all bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-900 text-white py-4 rounded-lg hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 font-semibold"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}