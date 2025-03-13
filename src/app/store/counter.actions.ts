import { createAction, props } from '@ngrx/store';

// This is the action which initializes the counter state
export const initCounter = createAction('[Counter] : Init');

// This is the action which sets the counter value
export const set = createAction('[Counter] : Set', props<{ value: number }>());

// This is the action to increament the counter state
export const increament = createAction(
  '[Counter] : Increament',
  props<{ value: number }>()
);

// This is the action to decrement the counter state
export const decreament = createAction(
  '[Counter] : Decreament',
  props<{ value: number }>()
);
