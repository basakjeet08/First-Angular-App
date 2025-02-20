import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counterValue = 0;

  // This function is invoked when the user clicks on the increase button
  onIncreaseClick() {
    this.counterValue++;
  }

  // This function is invoked when the user clicks on the decrease button
  onDecreaseClick() {
    this.counterValue--;
  }
}
