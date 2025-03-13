import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decreament, increament } from 'src/app/store/counter.actions';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {
  // Injecting the necessary dependencies
  constructor(private store: Store) {}

  // This function is invoked when the user clicks on the increase button
  onIncreaseClick() {
    this.store.dispatch(increament({ value: 1 }));
  }

  // This function is invoked when the user clicks on the decrease button
  onDecreaseClick() {
    this.store.dispatch(decreament({ value: 1 }));
  }

  // This function is invoked when the user clicks on the increase double button
  onIncreaseDoubleClick() {
    this.store.dispatch(increament({ value: 2 }));
  }
}
