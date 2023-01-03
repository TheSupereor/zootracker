export interface campos {
  id: number,
  created_at: Date,
  image: string,
  nome: string,
  local: string,
  data: string,
  horario: string
};

export interface coletas {
  id: number,
  created_at: Date,
  campo_id: number,
  image: string,
  especie: string,
  referencia: string,
  horario: string,
  medicoesPosteriorConjunto: number,
  medicoesPosteriorAlmofada: number,
  medicoesPosteriorDigito: number,
  medicoesAnteriorConjunto: number,
  medicoesAnteriorAlmofada: number,
  medicoesAnteriorDigito: number,
  garras: boolean,
  coletor: string,
  anotacao: string,
}

export interface dadosAnimais{
  id: number,
  animal_id: number,
  created_at: Date,
  medicoesPosteriorConjunto: number,
  medicoesPosteriorAlmofada: number,
  medicoesPosteriorDigito: number,
  medicoesAnteriorConjunto: number,
  medicoesAnteriorAlmofada: number,
  medicoesAnteriorDigito: number,
  garra: boolean,
  palma: boolean,
  digitos: string,
  numDigitos: number,
  digitoLigadoPalma: boolean,
  estado: string,
  bioma: string,
  ordem: string
}

export interface animais{
  id: number,
  created_at: Date,
  image: string,
  familia: string,
  ameaca: string,
  info: string,
  comportamento: string,
  habitos: string,
  habitats: string,
  cienName: string,
  names: string
}

export interface animais2{
  id: number,
  animID: number,
  created_at: Date,
  fezes: string,
  localizacao: string,
  passada: string,
  pegadaAnterior: string,
  pegadaPosterior: string,
  vestigios: string,
  regionImage: string,
  vestigiosImages: string[]
}

export interface AdvSearch{
  especie?: string,
  referencia?: string,
  data?: Date,
  medicoesPosteriorConjunto?: number,
  medicoesPosteriorAlmofada?: number,
  medicoesPosteriorDigito?: number,
  medicoesAnteriorConjunto?: number,
  medicoesAnteriorAlmofada?: number,
  medicoesAnteriorDigito?: number,
  garras?: boolean,
  impressao?: boolean,
  formatoDigitos?: string,
  numeroDigitos?: number,
  digitoLigadoPalma?: boolean,
  estado?: string,
  bioma?: string,
  ordemTax?: string
}