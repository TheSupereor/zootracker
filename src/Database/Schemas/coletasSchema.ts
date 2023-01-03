import { tableSchema } from '@nozbe/watermelondb';

export const coletasSchema = tableSchema({
  name: 'coletas',
  columns: [
    {
      name: 'created_at',
      type: 'string'
    },
    {
      name: 'image',
      type: 'string'
    },
    {
      name: 'campo_id',
      type: 'number'
    },
    {
      name: 'especie',
      type: 'string'
    },
    {
      name: 'referencia',
      type: 'string'
    },
    {
      name: 'horario',
      type: 'string'
    },
    {
      name: 'LarguraPosteriorConjunto',
      type: 'number'
    },
    {
      name: 'LarguraPosteriorAlmofada',
      type: 'number'
    },
    {
      name: 'LarguraPosteriorDigito',
      type: 'number'
    },
    {
      name: 'LarguraAnteriorConjunto',
      type: 'number'
    },
    {
      name: 'LarguraAnteriorAlmofada',
      type: 'number'
    },
    {
      name: 'LarguraAnteriorDigito',
      type: 'number'
    },
    {
      name: 'ComprimentoPosteriorConjunto',
      type: 'number'
    },
    {
      name: 'ComprimentoPosteriorAlmofada',
      type: 'number'
    },
    {
      name: 'ComprimentoPosteriorDigito',
      type: 'number'
    },
    {
      name: 'ComprimentoAnteriorConjunto',
      type: 'number'
    },
    {
      name: 'ComprimentoAnteriorAlmofada',
      type: 'number'
    },
    {
      name: 'ComprimentoAnteriorDigito',
      type: 'number'
    },
    {
      name: 'garras',
      type: 'boolean'
    },
    {
      name: 'coletor',
      type: 'string'
    },
    {
      name: 'anotacao',
      type: 'string'
    },
  ]
})