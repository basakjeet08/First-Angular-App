import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css'],
})
export class FirstChildComponent {
  // This is user input item stored in the component
  item: string = '';

  // This is the emitter object which helps to emit item from this component to its parent component
  @Output('addClick') itemAddEvent = new EventEmitter<string>();

  // This function is linked to the input tag so it runs every time the input is changed
  onInputChange(event: Event) {
    this.item = (event.target as HTMLInputElement).value;
  }

  // This function is invoked when the user hits the add button and its emits an event to its parent component to add this item
  onAddClick() {
    // Sending the data to its parent component
    this.itemAddEvent.emit(this.item);

    // Resetting the data
    this.item = '';
  }
}
