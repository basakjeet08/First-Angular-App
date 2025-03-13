import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decreament, increament } from './counter.actions';
import { tap, withLatestFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCount } from './counter.selector';

@Injectable()
export class CounterEffects {
  // Injecting the necessary dependencies
  constructor(
    private action$: Actions,
    private store: Store<{ counter: number }>
  ) {}

  // This effect saves the counter state in the local storage
  saveCount = createEffect(
    () =>
      this.action$.pipe(
        // Checking if the action is of type increament or decrement
        ofType(increament, decreament),

        // Getting the latest value from the selected state
        withLatestFrom(this.store.select(selectCount)),
        tap(([action, data]) => {
          console.log(action);
          localStorage.setItem('count', data.toString());
        })
      ),
    { dispatch: false }
  );
}
