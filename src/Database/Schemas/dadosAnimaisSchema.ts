import { tableSchema } from '@nozbe/watermelondb';

export const dadosAnimaisSchema = tableSchema({
  name: 'dadosAnimais',
  columns: [
    {
      name: 'created_at',
      type: 'string'
    },
    {
      name: 'animal_id',
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
      name: 'garra',
      type: 'boolean'
    },
    {
      name: 'palma',
      type: 'boolean'
    },
    {
      name: 'digitos',
      type: 'number'
    },
    {
      name: 'digitoLigadoPalma',
      type: 'boolean'
    },
    {
      name: 'numDigitos',
      type: 'number'
    },
    {
      name: 'estado',
      type: 'string'
    },
    {
      name: 'bioma',
      type: 'string'
    },
    {
      name: 'ordem',
      type: 'string'
    },
  ]
})