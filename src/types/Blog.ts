export interface ArtigoBlog {
  id: string;
  titulo: string;
  resumo: string;
  imagem: string;
  autor: string;
  data: string;
  link: string;
  fonte: string;
}

export interface NoticiaComprec {
  id: string;
  titulo: string;
  resumoCurto: string;
  conteudoCompleto: React.ReactNode;
  imagem: string;
  data: string;
  autor: string;
  tempoLeitura: string;
}
