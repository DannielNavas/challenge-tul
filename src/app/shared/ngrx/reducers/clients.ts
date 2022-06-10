import { createReducer, on } from '@ngrx/store';
import { Add, Remove, Modify } from '../actions/clients';
import { Client, Type } from '../interfaces/clients';

const initialState: Array<Client> = [
  { id: 1, name: 'Andres', type: Type.BUILDER },
  { id: 2, name: 'Felipe', type: Type.CONSTRUCTOR },
];

export const ClientReducer = createReducer(
  initialState,
  on(Add, (state: Client[], action: { client: Client }) => [
    ...state,
    { ...action.client },
  ]),
  on(Remove, (state, action) => state.filter((i) => i.id !== action.id)),
  on(Modify, (state, action) =>
    state.map((element) =>
      element.id === action.id ? { ...action.client } : element
    )
  )
);
