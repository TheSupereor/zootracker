import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

export class animais2Model extends Model {
  static table = 'animais2'

  @field('created_at')
  created_at!: Date

  @field('animID')
  animID!: number

  @field('fezes')
  fezes!: string

  @field('localizacao')
  localizacao!: string

  @field('passada')
  passada!: string

  @field('pegadaAnterior')
  pegadaAnterior!: string

  @field('pegadaPosterior')
  pegadaPosterior!: string

  @field('vestigios')
  vestigios!: string

  @field('regionImage')
  regionImage!: string

  @field('vestigiosImage')
  vestigiosImage!: string
}