import { tableSchema } from '@nozbe/watermelondb';

export const animaisSchema = tableSchema({
  name: 'animais',
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
      name: 'familia',
      type: 'string'
    },
    {
      name: 'ameaca',
      type: 'string'
    },
    {
      name: 'info',
      type: 'string'
    },
    {
      name: 'comportamentos',
      type: 'string'
    },
    {
      name: 'habitos',
      type: 'string'
    },
    {
      name: 'habitats',
      type: 'string'
    },
    {
      name: 'cienName',
      type: 'string'
    },
    {
      name: 'names',
      type: 'string'
    },
    {
      name: 'ordem',
      type: 'string'
    },
    {
      name: 'especiesSemelhantes',
      type: 'string'
    }
  ]
})