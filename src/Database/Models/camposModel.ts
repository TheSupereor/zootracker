import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

export class CamposModel extends Model {
  static table = 'campos'

  @field('created_at')
  created_at!: Date

  @field('image')
  image!: string

  @field('nome')
  nome!: string

  @field('local')
  local!: string

  @field('data')
  data!: string

  @field('horario')
  horario!: string

  @field('regiao')
  regiao!: string
}