import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent {
  randomNumber: number = 0;
  input: string = '';

  // This function is executed when the button is pressed
  onGenerateRandom() {
    this.randomNumber = Math.ceil(Math.random() * 20 + 20);
  }

  // This is invoked when the input has some changes
  onInputListener(event: Event) {
    this.input = (event.target as HTMLInputElement).value;
  }
}
