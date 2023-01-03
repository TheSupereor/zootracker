import { tableSchema } from '@nozbe/watermelondb';

export const animais2Schema = tableSchema({
  name: 'animais2',
  columns: [
    {
      name: 'created_at',
      type: 'string'
    },
    {
      name: 'animID',
      type: 'number'
    },
    {
      name: 'fezes',
      type: 'string'
    },
    {
      name: 'localizacao',
      type: 'string'
    },
    {
      name: 'passada',
      type: 'string'
    },
    {
      name: 'pegadaAnterior',
      type: 'string'
    },
    {
      name: 'pegadaPosterior',
      type: 'string'
    },
    {
      name: 'vestigios',
      type: 'string'
    },
  ]
})