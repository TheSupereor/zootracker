import { tableSchema } from '@nozbe/watermelondb';

export const camposSchema = tableSchema({
  name: 'campos',
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
      name: 'nome',
      type: 'string'
    },
    {
      name: 'local',
      type: 'string'
    },
    {
      name: 'data',
      type: 'string'
    },
    {
      name: 'horario',
      type: 'string'
    },
  ]
})