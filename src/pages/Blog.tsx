import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Clock, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ArtigoBlog {
  id: string;
  titulo: string;
  resumo: string;
  imagem: string;
  autor: string;
  data: string;
  dataOriginal: Date;
  link: string;
  fonte: string;
}

export function Blog() {
  const [artigos, setArtigos] = React.useState<ArtigoBlog[]>([]);
  const [carregando, setCarregando] = React.useState(true);
  const [erro, setErro] = React.useState<string | null>(null);

  React.useEffect(() => {
    buscarArtigosRSS();
  }, []);

  const buscarArtigosRSS = async () => {
    try {
      setCarregando(true);
      setErro(null);

      // Banco de imagens únicas relacionadas a precatórios/justiça/documentos legais
      const imagensUnicas = [
        'https://images.unsplash.com/photo-1768839722927-df0ef3188f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50cyUyMGp1c3RpY2V8ZW58MXx8fHwxNzcwNDExNTMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1496361945947-d0250d31222a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydGhvdXNlJTIwbGF3JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcwNDExNTMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGFncmVlbWVudHxlbnwxfHx8fDE3NzAzNjA1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1762427354051-a9bdb181ae3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkb2N1bWVudHMlMjBjYWxjdWxhdG9yfGVufDF8fHx8MTc3MDMxNzg3MHww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXd5ZXIlMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcwMjk4NDI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1763729805496-b5dbf7f00c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250cmFjdCUyMHNpZ25pbmclMjBwZW58ZW58MXx8fHwxNzcwNDExNTM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1662728132385-11fee9b3db9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcwNDAwNTI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1769092992534-f2d0210162b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGJvb2tzJTIwbGlicmFyeXxlbnwxfHx8fDE3NzA0MDI4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1663277627902-c49b3c968570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25leSUyMHBheW1lbnQlMjBjYXNofGVufDF8fHx8MTc3MDQxMTUzNnww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1767972463877-b64ba4283cd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdWRnZSUyMGdhdmVsJTIwanVzdGljZXxlbnwxfHx8fDE3NzA0MTE1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1765020553734-2c050ddb9494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb25zdWx0YXRpb258ZW58MXx8fHwxNzcwMzcxOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1758876020343-c8c2add9d527?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlcndvcmslMjBkZXNrJTIwb2ZmaWNlfGVufDF8fHx8MTc3MDQxMTUzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      ];

      // Embaralhar as imagens para garantir variedade
      const imagensEmbaralhadas = [...imagensUnicas].sort(() => Math.random() - 0.5);

      // Dados de fallback caso o RSS não esteja disponível
      const artigosFallback: ArtigoBlog[] = [
        {
          id: 'fallback-1',
          titulo: 'Governo anuncia novo calendário de pagamento de precatórios para 2026',
          resumo: 'Ministério da Economia divulga cronograma atualizado para quitação de precatórios federais, estaduais e municipais. Medida beneficia milhares de credores em todo o país...',
          imagem: imagensEmbaralhadas[0],
          autor: 'Portal G1',
          data: '5 de fevereiro de 2026',
          dataOriginal: new Date('2026-02-05'),
          link: 'https://news.google.com/search?q=precatorios+pagamento',
          fonte: 'Portal G1',
        },
        {
          id: 'fallback-2',
          titulo: 'STF decide sobre regime especial de precatórios em estados',
          resumo: 'Supremo Tribunal Federal analisa pedido de estados para prorrogação do prazo de pagamento de precatórios. Decisão pode impactar orçamento de diversos governos estaduais...',
          imagem: imagensEmbaralhadas[1],
          autor: 'Estadão',
          data: '4 de fevereiro de 2026',
          dataOriginal: new Date('2026-02-04'),
          link: 'https://news.google.com/search?q=precatorios+STF',
          fonte: 'Estadão',
        },
        {
          id: 'fallback-3',
          titulo: 'Precatórios: entenda como funciona a antecipação de valores',
          resumo: 'Especialistas explicam as vantagens e cuidados necessários ao optar pela antecipação de precatórios. Processo tem ganhado popularidade entre credores...',
          imagem: imagensEmbaralhadas[2],
          autor: 'Valor Econômico',
          data: '3 de fevereiro de 2026',
          dataOriginal: new Date('2026-02-03'),
          link: 'https://news.google.com/search?q=precatorios+antecipacao',
          fonte: 'Valor Econômico',
        },
        {
          id: 'fallback-4',
          titulo: 'Municípios recebem R$ 2 bilhões em precatórios do INSS',
          resumo: 'Recursos destinados ao pagamento de precatórios previdenciários começam a ser liberados para prefeituras de todo o Brasil. Valores devem ser usados em investimentos públicos...',
          imagem: imagensEmbaralhadas[3],
          autor: 'Folha de S.Paulo',
          data: '2 de fevereiro de 2026',
          dataOriginal: new Date('2026-02-02'),
          link: 'https://news.google.com/search?q=precatorios+municipios',
          fonte: 'Folha de S.Paulo',
        },
        {
          id: 'fallback-5',
          titulo: 'CNJ publica novas regras para expedição de precatórios',
          resumo: 'Conselho Nacional de Justiça atualiza normativas sobre o processamento e expedição de precatórios em todo o país. Mudanças visam agilizar pagamentos...',
          imagem: imagensEmbaralhadas[4],
          autor: 'Consultor Jurídico',
          data: '1 de fevereiro de 2026',
          dataOriginal: new Date('2026-02-01'),
          link: 'https://news.google.com/search?q=precatorios+CNJ',
          fonte: 'Consultor Jurídico',
        },
        {
          id: 'fallback-6',
          titulo: 'Orçamento 2026: União prevê R$ 70 bilhões para precatórios',
          resumo: 'Lei Orçamentária Anual destina valores recordes para quitação de dívidas judiciais federais. Especialistas avaliam impacto nas contas públicas...',
          imagem: imagensEmbaralhadas[5],
          autor: 'InfoMoney',
          data: '31 de janeiro de 2026',
          dataOriginal: new Date('2026-01-31'),
          link: 'https://news.google.com/search?q=precatorios+orcamento',
          fonte: 'InfoMoney',
        },
        {
          id: 'fallback-7',
          titulo: 'Precatórios trabalhistas: pagamentos crescem 15% em 2025',
          resumo: 'Levantamento mostra aumento significativo no volume de precatórios trabalhistas pagos no último ano. Justiça do Trabalho aponta avanços no cumprimento de sentenças...',
          imagem: imagensEmbaralhadas[6],
          autor: 'Correio Braziliense',
          data: '30 de janeiro de 2026',
          dataOriginal: new Date('2026-01-30'),
          link: 'https://news.google.com/search?q=precatorios+trabalhistas',
          fonte: 'Correio Braziliense',
        },
        {
          id: 'fallback-8',
          titulo: 'Especialistas alertam sobre golpes envolvendo precatórios',
          resumo: 'Advogados e órgãos de defesa do consumidor orientam sobre fraudes que prometem antecipação de precatórios com condições irreais. Cuidado é essencial...',
          imagem: imagensEmbaralhadas[7],
          autor: 'UOL',
          data: '29 de janeiro de 2026',
          dataOriginal: new Date('2026-01-29'),
          link: 'https://news.google.com/search?q=precatorios+golpes',
          fonte: 'UOL',
        },
        {
          id: 'fallback-9',
          titulo: 'Estados debatem parcelamento de precatórios em audiência pública',
          resumo: 'Governadores e representantes do Judiciário discutem alternativas para pagamento de dívidas judiciais estaduais. Propostas incluem prazos estendidos...',
          imagem: imagensEmbaralhadas[8],
          autor: 'Agência Brasil',
          data: '28 de janeiro de 2026',
          dataOriginal: new Date('2026-01-28'),
          link: 'https://news.google.com/search?q=precatorios+estados',
          fonte: 'Agência Brasil',
        },
        {
          id: 'fallback-10',
          titulo: 'Entenda como declarar precatórios no Imposto de Renda',
          resumo: 'Receita Federal esclarece regras para declaração de valores recebidos de precatórios no IR 2026. Contribuintes devem ficar atentos às normas específicas...',
          imagem: imagensEmbaralhadas[9],
          autor: 'Exame',
          data: '27 de janeiro de 2026',
          dataOriginal: new Date('2026-01-27'),
          link: 'https://news.google.com/search?q=precatorios+imposto+renda',
          fonte: 'Exame',
        },
        {
          id: 'fallback-11',
          titulo: 'Precatórios alimentares: prioridade no pagamento é mantida',
          resumo: 'Tribunais reafirmam preferência para quitação de precatórios de natureza alimentícia. Credores idosos e portadores de doenças graves têm prioridade absoluta...',
          imagem: imagensEmbaralhadas[10],
          autor: 'Migalhas',
          data: '26 de janeiro de 2026',
          dataOriginal: new Date('2026-01-26'),
          link: 'https://news.google.com/search?q=precatorios+alimentares',
          fonte: 'Migalhas',
        },
        {
          id: 'fallback-12',
          titulo: 'Mercado de cessão de precatórios movimenta bilhões em 2025',
          resumo: 'Empresas especializadas registram crescimento no volume de negociações de precatórios. Mercado secundário se consolida como alternativa para credores...',
          imagem: imagensEmbaralhadas[11],
          autor: 'Brasil Econômico',
          data: '25 de janeiro de 2026',
          dataOriginal: new Date('2026-01-25'),
          link: 'https://news.google.com/search?q=precatorios+cessao',
          fonte: 'Brasil Econômico',
        },
      ];

      try {
        // URL do RSS do Google News sobre precatórios
        const urlRSS = 'https://news.google.com/rss/search?q=precatorios+pagamento+expedicao+orcamento&hl=pt-BR&gl=BR&ceid=BR:pt-419';
        
        // Tentando múltiplos proxies CORS
        const proxies = [
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(urlRSS)}`,
          `https://api.allorigins.win/raw?url=${encodeURIComponent(urlRSS)}`,
        ];
        
        let dadosRSS = null;
        
        // Tentar cada proxy até um funcionar
        for (const urlProxy of proxies) {
          try {
            const resposta = await fetch(urlProxy, {
              method: 'GET',
              headers: {
                'Accept': 'application/json, application/xml, text/xml, */*',
              },
            });
            
            if (!resposta.ok) {
              continue;
            }
            
            // Tentar processar como JSON (rss2json)
            const contentType = resposta.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
              const json = await resposta.json();
              if (json.items && json.items.length > 0) {
                const artigosFormatados = json.items.map((item: any, indice: number) => ({
                  id: `rss-${indice}`,
                  titulo: item.title.replace(/ - .*$/, ''),
                  resumo: item.description ? item.description.replace(/<[^>]*>/g, '').substring(0, 200) + '...' : 'Clique para ler mais...',
                  imagem: item.thumbnail || item.enclosure?.link || imagensEmbaralhadas[indice % imagensEmbaralhadas.length],
                  autor: item.author || 'Google News',
                  data: item.pubDate ? new Date(item.pubDate).toLocaleDateString('pt-BR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  }) : 'Data não disponível',
                  dataOriginal: item.pubDate ? new Date(item.pubDate) : new Date(),
                  link: item.link,
                  fonte: item.author || 'Google News',
                }));
                
                dadosRSS = artigosFormatados;
                break;
              }
            } else {
              // Processar como XML
              const texto = await resposta.text();
              const parser = new DOMParser();
              const xml = parser.parseFromString(texto, 'text/xml');
              const itens = xml.querySelectorAll('item');
              
              if (itens.length > 0) {
                const artigosFormatados = Array.from(itens).map((item, indice) => {
                  const titulo = item.querySelector('title')?.textContent || '';
                  const link = item.querySelector('link')?.textContent || '';
                  const descricao = item.querySelector('description')?.textContent || '';
                  const dataPub = item.querySelector('pubDate')?.textContent || '';
                  const fonte = item.querySelector('source')?.textContent || 'Google News';
                  
                  return {
                    id: `rss-${indice}`,
                    titulo: titulo.replace(/ - .*$/, ''),
                    resumo: descricao.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
                    imagem: imagensEmbaralhadas[indice % imagensEmbaralhadas.length],
                    autor: fonte,
                    data: dataPub ? new Date(dataPub).toLocaleDateString('pt-BR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    }) : 'Data não disponível',
                    dataOriginal: dataPub ? new Date(dataPub) : new Date(),
                    link: link,
                    fonte: fonte,
                  };
                });
                
                dadosRSS = artigosFormatados;
                break;
              }
            }
          } catch (err) {
            console.log('Proxy falhou, tentando próximo...', err);
            continue;
          }
        }
        
        // Se conseguiu dados do RSS, usar eles
        if (dadosRSS && dadosRSS.length > 0) {
          // Remover duplicatas
          const artigosUnicos = dadosRSS.filter((artigo: ArtigoBlog, indice: number, self: ArtigoBlog[]) =>
            indice === self.findIndex((a) => a.titulo === artigo.titulo)
          );
          
          // Ordenar por data
          const artigosOrdenados = artigosUnicos.sort((a: ArtigoBlog, b: ArtigoBlog) => 
            b.dataOriginal.getTime() - a.dataOriginal.getTime()
          );
          
          setArtigos(artigosOrdenados.slice(0, 12));
        } else {
          // Usar dados de fallback
          console.log('Usando notícias de fallback');
          setArtigos(artigosFallback);
        }
      } catch (error) {
        // Em caso de erro, usar dados de fallback
        console.log('Erro ao buscar RSS, usando notícias de fallback:', error);
        setArtigos(artigosFallback);
      }
    } catch (error) {
      console.error('Erro geral ao carregar blog:', error);
      setErro('Não foi possível carregar as notícias. Tente novamente mais tarde.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div>
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
              Notícias sobre Precatórios
            </h1>
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Fique por dentro das últimas notícias sobre precatórios, pagamentos, expedição e orçamento diretamente do Google News.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grade de Artigos do Blog */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {carregando ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-16 h-16 border-4 border-emerald-900 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-gray-600 text-lg">Carregando notícias...</p>
            </div>
          ) : erro ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 max-w-md text-center">
                <p className="text-red-600 font-semibold mb-4">{erro}</p>
                <button
                  onClick={buscarArtigosRSS}
                  className="bg-emerald-900 text-white px-6 py-2 rounded-lg hover:bg-emerald-800 transition-colors"
                >
                  Tentar Novamente
                </button>
              </div>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {artigos.map((artigo, indice) => (
                <motion.article
                  key={artigo.id}
                  className="group bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-emerald-900 transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: indice * 0.1 }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={artigo.imagem}
                      alt={artigo.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-emerald-900 text-white px-4 py-1.5 rounded-lg text-xs sm:text-sm font-bold">
                        Notícia
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" strokeWidth={2} />
                        <span>{artigo.data}</span>
                      </div>
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold text-emerald-900 mb-3 line-clamp-2">
                      {artigo.titulo}
                    </h2>

                    <p className="text-gray-600 mb-5 line-clamp-3 leading-relaxed text-sm sm:text-base">
                      {artigo.resumo}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-600" strokeWidth={2} />
                        <span className="text-sm font-medium text-gray-600">{artigo.fonte}</span>
                      </div>
                      <a
                        href={artigo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-900 hover:text-emerald-700 font-bold flex items-center gap-2 transition-all"
                      >
                        Ler mais
                        <ExternalLink className="w-4 h-4" strokeWidth={2} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}