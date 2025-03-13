import { createReducer, on } from '@ngrx/store';
import { decreament, increament, set } from './counter.actions';

// This is the initial value for this current reducer
const initialValue: number = 0;

// This is the reducer which would be stored in the store
export const counterReducer = createReducer(
  initialValue,

  // Defining the actions to be performed on various actions
  on(increament, (state, action) => state + action.value),
  on(decreament, (state, action) => state - action.value),
  on(set, (_state, action) => action.value)
);
