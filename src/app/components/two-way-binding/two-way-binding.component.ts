import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css'],
})
export class TwoWayBindingComponent {
  input: string = '';

  // This is invoked when the input has some changes (Needed for 1 way data binding)
  onInputListener(event: Event) {
    this.input = (event.target as HTMLInputElement).value;
  }
}

/**
 * Note : In 2 Way data binding technique the data flows Bi - directionally (Component -> Views && Views > Components)
 *
 * In other words any changes done in the template (View) or TS File (Component), then those changes will be reflected in both View and component file
 *
 *
 * Note : The Difference between 1 Way data binding and 2 Way data binding is shown here
 */
