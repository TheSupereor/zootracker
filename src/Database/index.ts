import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import { schemas } from "./Schemas";
import { CamposModel } from './Models/camposModel';
import { animaisModel } from './Models/animaisModel';
import { animais2Model } from './Models/animais2Model';
import { coletasModel } from './Models/coletasModel';
import { dadosAnimaisModel } from './Models/dadosAnimaisModel';

const adapter = new SQLiteAdapter({
  schema: schemas
});

export const database = new Database({
  adapter,
  modelClasses: [
    CamposModel,
    animaisModel,
    animais2Model,
    coletasModel,
    dadosAnimaisModel
  ]
});