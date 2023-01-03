import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

export class dadosAnimaisModel extends Model {
  static table = 'dadosAnimais'

  @field('created_at')
  created_at!: Date

  @field('animal_id')
  animal_id!: number

  @field('ComprimentoPosteriorConjunto')
  ComprimentoPosteriorConjunto!: number

  @field('ComprimentoPosteriorAlmofada')
  ComprimentoPosteriorAlmofada!: number

  @field('ComprimentoPosteriorDigito')
  ComprimentoPosteriorDigito!: number

  @field('ComprimentoAnteriorConjunto')
  ComprimentoAnteriorConjunto!: number

  @field('ComprimentoAnteriorAlmofada')
  ComprimentoAnteriorAlmofada!: number

  @field('ComprimentoAnteriorDigito')
  ComprimentoAnteriorDigito!: number

  @field('LarguraPosteriorConjunto')
  LarguraPosteriorConjunto!: number

  @field('LarguraPosteriorAlmofada')
  LarguraPosteriorAlmofada!: number

  @field('LarguraPosteriorDigito')
  LarguraPosteriorDigito!: number

  @field('LarguraAnteriorConjunto')
  LarguraAnteriorConjunto!: number

  @field('LarguraAnteriorAlmofada')
  LarguraAnteriorAlmofada!: number

  @field('LarguraAnteriorDigito')
  LarguraAnteriorDigito!: number

  @field('garra')
  garra!: boolean

  @field('palma')
  palma!: boolean
 
  @field('digitos')
  digitos!: number

  @field('digitoLigadoPalma')
  digitoLigadoPalma!: boolean

  @field('numDigitos')
  numDigitos!: number

  @field('estado')
  estado!: string

  @field('bioma')
  bioma!: string

  @field('ordem')
  ordem!: string
}