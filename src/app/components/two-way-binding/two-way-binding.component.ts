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
