import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

export class coletasModel extends Model {
  static table = 'coletas'

  @field('created_at')
  created_at!: Date

  @field('image')
  image!: string

  @field('campo_id')
  campo_id!: number

  @field('especie')
  especie!: string

  @field('referencia')
  referencia!: string

  @field('horario')
  horario!: string

  @field('ComprimentoPosteriorConjunto')
  ComprimentoPosteriorConjunto!: number

  @field('ComprimentoPosteriorAlmofada')
  ComprimentoPosteriorAlmofada!: number

  @field('ComprimentoPosteriorDigito')
  ComprimentoPosteriorDigito!: number

  @field('LarguraPosteriorConjunto')
  LarguraPosteriorConjunto!: number

  @field('LarguraPosteriorAlmofada')
  LarguraPosteriorAlmofada!: number

  @field('LarguraPosteriorDigito')
  LarguraPosteriorDigito!: number

  @field('ComprimentoAnteriorConjunto')
  ComprimentoAnteriorConjunto!: number

  @field('ComprimentoAnteriorAlmofada')
  ComprimentoAnteriorAlmofada!: number

  @field('ComprimentoAnteriorDigito')
  ComprimentoAnteriorDigito!: number

  @field('LarguraAnteriorConjunto')
  LarguraAnteriorConjunto!: number

  @field('LarguraAnteriorAlmofada')
  LarguraAnteriorAlmofada!: number

  @field('LarguraAnteriorDigito')
  LarguraAnteriorDigito!: number

  @field('garras')
  garras!: boolean

  @field('coletor')
  coletor!: string

  @field('anotacao')
  anotacao!: string
}