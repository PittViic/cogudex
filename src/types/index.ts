export interface Cogumelo {
  id: number;
  nomePopular: string;
  nomeCientifico: string;
  descricao: string;
  imagemUrl: string;
  tipo: 'comestivel' | 'venenoso' | 'nao-comestivel';
  habitat: string[];
  curiosidades: string[];
}