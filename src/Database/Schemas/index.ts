import { appSchema } from '@nozbe/watermelondb';

import { camposSchema } from './camposSchema';
import { coletasSchema } from './coletasSchema';
import { dadosAnimaisSchema } from './dadosAnimaisSchema';
import { animais2Schema } from './animais2Schema';
import { animaisSchema } from './animaisSchema';

export const schemas = appSchema({
  tables: [
    camposSchema,
    coletasSchema,
    dadosAnimaisSchema,
    animais2Schema,
    animaisSchema
  ],
  version: 1
})