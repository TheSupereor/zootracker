import { Model } from "@nozbe/watermelondb";
import { field, json } from "@nozbe/watermelondb/decorators";


const sanitizeArrayInt = raw => {
  return Array.isArray(raw) ? raw.map(Number) : []
}

export class animaisModel extends Model {
  static table = 'animais'

  @field('created_at')
  created_at!: Date

  @field('image')
  image!: string

  @field('familia')
  familia!: string

  @field('ameaca')
  ameaca!: string

  @field('info')
  info!: string

  @field('comportamentos')
  comportamentos!: string

  @field('habitos')
  habitos!: string

  @field('habitats')
  habitats!: string

  @field('cienName')
  cienName!: string

  @field('names')
  names!: string[]

  @field('ordem')
  ordem!: string

  @json('especiesSemelhantes', sanitizeArrayInt)
  especiesSemelhantes!: number[]
}