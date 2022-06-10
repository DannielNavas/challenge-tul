import { createAction, props } from '@ngrx/store';
import { Client } from '../interfaces/clients';

export const Add = createAction('[CLIENTS] Add', props<{ client: Client }>());
export const Remove = createAction('[CLIENTS] Remove', props<{ id: number }>());
export const Modify = createAction(
  '[CLIENTS] Modify',
  props<{ id: number; client: Client }>()
);
