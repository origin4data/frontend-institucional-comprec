"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, ExternalLink, X, BookOpen, ArrowRight } from 'lucide-react';
import { ArtigoBlog, NoticiaComprec } from '../types/Blog';

const noticiasComprec: NoticiaComprec[] = [
  {
    id: 'comprec-1',
    titulo: 'O que a Diretoria da COMPREC espera do mercado de precatórios para 2026',
    resumoCurto: 'Uma visão estratégica sobre as novas resoluções do STF e como elas impactam credores e investidores neste ano.',
    imagem: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
    data: '20 de Fevereiro de 2026',
    autor: 'CEO COMPREC',
    tempoLeitura: '4 min de leitura',
    conteudoCompleto: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p className="font-semibold text-lg text-gray-900">
          O ano de 2026 marca um ponto de virada crucial para o mercado de ativos judiciais no Brasil.
        </p>
        <p>
          Com as recentes movimentações no Supremo Tribunal Federal e os ajustes no Orçamento da União, prevemos um cenário de maior previsibilidade para os credores. A fila de pagamentos federais começou a andar em um ritmo mais consistente, o que aquece o mercado secundário.
        </p>
        <p>
          Na COMPREC, nossa estratégia para este ano é ampliar as operações de antecipação, garantindo taxas ainda mais justas para os nossos clientes. Acreditamos que a transparência e a segurança jurídica serão os diferenciais competitivos.
        </p>
        <h4 className="text-xl font-bold mt-6 mb-2" style={{ color: '#48bab8' }}>A Oportunidade para Credores</h4>
        <p>
          Muitos credores que aguardavam na fila há anos agora têm a oportunidade de monetizar seus direitos de forma segura. Nosso time de análise técnica foi dobrado para dar vazão à demanda de 2026 com agilidade máxima.
        </p>
      </div>
    )
  },
  {
    id: 'comprec-2',
    titulo: 'Expansão de Parcerias: Como escritórios estão alavancando receitas',
    resumoCurto: 'Conheça o novo modelo de indicações da COMPREC que está revolucionando a forma como advogados monetizam carteiras travadas.',
    imagem: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800',
    data: '15 de Fevereiro de 2026',
    autor: 'Diretoria de Parcerias',
    tempoLeitura: '3 min de leitura',
    conteudoCompleto: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Escritórios de advocacia em todo o Brasil enfrentam um problema comum: carteiras de clientes repletas de processos ganhos, mas cujos valores estão travados na fila de precatórios.
        </p>
        <p>
          A COMPREC reformulou seu programa de parcerias para resolver exatamente essa dor. Agora, advogados parceiros podem indicar processos com total sigilo e receber comissionamento rápido assim que a negociação for concluída.
        </p>
        <blockquote className="border-l-4 pl-4 italic bg-gray-50 p-4 rounded-r-lg" style={{ borderColor: '#48bab8' }}>
          "Nossa missão é ser o braço financeiro do advogado, permitindo que ele foque no que faz de melhor: advogar."
        </blockquote>
        <p>
          O novo portal do parceiro já está em fase de testes e será liberado para todos os escritórios credenciados até o final deste semestre.
        </p>
      </div>
    )
  },
  {
    id: 'comprec-3',
    titulo: 'Segurança da Informação: Nossos novos protocolos de análise',
    resumoCurto: 'Implementamos novas tecnologias de verificação de processos para garantir transações 100% à prova de fraudes.',
    imagem: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
    data: '05 de Fevereiro de 2026',
    autor: 'Equipe Jurídica COMPREC',
    tempoLeitura: '5 min de leitura',
    conteudoCompleto: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          No mercado de cessão de crédito, a segurança jurídica é o pilar fundamental. Por isso, a COMPREC investiu pesadamente na modernização de seus protocolos de Due Diligence.
        </p>
        <p>
          Nossa nova esteira de análise cruza dados de tribunais em tempo real, mitigando qualquer risco de penhoras ocultas ou disputas de titularidade que possam prejudicar o cedente ou o investidor.
        </p>
        <p>
          Com esse novo sistema, reduzimos o tempo médio de avaliação técnica de 7 dias úteis para apenas 48 horas, permitindo que a oferta de compra chegue muito mais rápido ao credor final.
        </p>
      </div>
    )
  }
];

export function Blog() {
  const [artigos, setArtigos] = useState<ArtigoBlog[]>([]);
  const [carregando, setCarregando] = useState(true);
  
  // Estados para a Modal
  const [modalAberto, setModalAberto] = useState(false);
  const [noticiaSelecionada, setNoticiaSelecionada] = useState<NoticiaComprec | null>(null);

  // Trava o scroll do site
  useEffect(() => {
    if (modalAberto) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [modalAberto]);

  const abrirNoticia = (noticia: NoticiaComprec) => {
    setNoticiaSelecionada(noticia);
    setModalAberto(true);
  };

  useEffect(() => {
    buscarArtigosRSS();
  }, []);

  const buscarArtigosRSS = async () => {
    setCarregando(true);
    
    const imagensUnicas = [
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    ];
    const imgsEmbaralhadas = [...imagensUnicas].sort(() => Math.random() - 0.5);

    const artigosFallback: ArtigoBlog[] = Array(6).fill(null).map((_, i) => ({
      id: `fallback-${i}`,
      titulo: ['Governo prevê quitação recorde de precatórios neste ano', 'STF aprova novas medidas para agilizar pagamentos de dívidas judiciais', 'Especialistas alertam para cuidados na antecipação de ativos', 'Orçamento federal destina R$ 70 bi para precatórios', 'Municípios começam a receber repasses atrasados', 'Mercado de cessão de crédito ganha novas regras de segurança'][i],
      resumo: 'Fique por dentro das últimas atualizações do mercado financeiro e jurídico sobre o andamento da fila de ativos judiciais no Brasil...',
      imagem: imgsEmbaralhadas[i],
      autor: ['Portal G1', 'Estadão', 'Valor Econômico', 'InfoMoney', 'Folha de S.Paulo', 'Migalhas'][i],
      data: 'Fevereiro 2026',
      link: 'https://news.google.com/search?q=precatorios',
      fonte: 'Portal de Notícias',
    }));

    try {
      const urlRSS = 'https://news.google.com/rss/search?q=precatorios+pagamento&hl=pt-BR&gl=BR&ceid=BR:pt-419';
      const proxy = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(urlRSS)}`;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const resposta = await fetch(proxy, { signal: controller.signal });
      clearTimeout(timeoutId);
      
      if (!resposta.ok) throw new Error('Falha no servidor proxy');
      
      const dados = await resposta.json();
      
      if (dados && dados.items && dados.items.length > 0) {
        const artigosFormatados = dados.items.slice(0, 6).map((item: any, indice: number) => ({
          id: `rss-${indice}`,
          titulo: item.title.replace(/ - .*$/, ''),
          resumo: item.description ? item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...' : 'Leia a matéria completa no portal de notícias.',
          imagem: imgsEmbaralhadas[indice % imgsEmbaralhadas.length],
          autor: item.author || item.source || 'Portal de Notícias',
          data: item.pubDate ? new Date(item.pubDate.replace(/-/g, '/')).toLocaleDateString(
            'pt-BR', 
              { 
                day: '2-digit', 
                month: 'short', 
                year: 'numeric' 
              }
          ) : 'Recente',
          link: item.link,
          fonte: item.source || 'Google News',
        }));
        
        setArtigos(artigosFormatados);
      } else {
        throw new Error('Lista vazia');
      }
    } catch (error) {
      console.warn('API demorou ou falhou. Carregando Plano B (Fallback).', error);
      setArtigos(artigosFallback);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="w-full bg-gray-50 pb-24">
      <AnimatePresence>
        {modalAberto && noticiaSelecionada && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setModalAberto(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={() => setModalAberto(false)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="w-full h-64 sm:h-80 relative shrink-0">
                <img src={noticiaSelecionada.imagem} alt={noticiaSelecionada.titulo} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3" style={{ backgroundColor: '#48bab8' }}>
                    Oficial COMPREC
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                    {noticiaSelecionada.titulo}
                  </h2>
                </div>
              </div>
              <div className="p-6 sm:p-10 overflow-y-auto">
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" /> <span className="font-medium text-gray-900">{noticiaSelecionada.autor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> <span>{noticiaSelecionada.data}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> <span>{noticiaSelecionada.tempoLeitura}</span>
                  </div>
                </div>
                <div className="prose max-w-none">
                  {noticiaSelecionada.conteudoCompleto}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <section className="bg-white py-16 sm:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Central de <span style={{ color: '#48bab8' }}>Informações</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Acompanhe os comunicados oficiais da nossa diretoria e as principais notícias do mercado jurídico e financeiro.
            </p>
          </motion.div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        <section>
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-2 h-8 rounded-full" style={{ backgroundColor: '#48bab8' }}></span>
              Notícias COMPREC
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {noticiasComprec.map((noticia, idx) => (
              <motion.div
                key={noticia.id}
                onClick={() => abrirNoticia(noticia)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group cursor-pointer flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <div className="w-full h-56 overflow-hidden relative shrink-0">
                  <img src={noticia.imagem} alt={noticia.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-slate-900 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
                      Comunicado
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col grow">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 font-medium">
                    <Calendar className="w-3.5 h-3.5" /> {noticia.data}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#48bab8] transition-colors">
                    {noticia.titulo}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2 grow">
                    {noticia.resumoCurto}
                  </p>
                  <div className="flex items-center text-sm font-bold mt-auto" style={{ color: '#48bab8' }}>
                    Ler artigo completo <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between mb-8 sm:mb-12 pt-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-2 h-8 rounded-full bg-slate-900"></span>
              Mercado de Precatórios
            </h2>
          </div>
          {carregando ? (
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-gray-100">
              <div className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin mb-4" style={{ borderColor: '#48bab8', borderTopColor: 'transparent' }}></div>
              <p className="text-gray-500 font-medium">Buscando notícias recentes...</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {artigos.map((artigo, indice) => (
                <motion.a
                  key={artigo.id}
                  href={artigo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: indice * 0.1 }}
                >
                  <div className="relative h-48 overflow-hidden shrink-0">
                    <img src={artigo.imagem} alt={artigo.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6 flex flex-col grow">
                    <h2 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#48bab8] transition-colors">
                      {artigo.titulo}
                    </h2>
                    <p className="text-gray-600 text-sm mb-5 line-clamp-3 grow leading-relaxed">
                      {artigo.resumo}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                      <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                        <User className="w-3.5 h-3.5" /> <span>{artigo.autor}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-bold text-slate-400 group-hover:text-slate-900 transition-colors">
                        Ler no portal <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
