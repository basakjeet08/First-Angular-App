import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css'],
})
export class SecondChildComponent {
  // This list is passed down from the parent as an input for this child to work properly
  @Input('itemList') items: string[] = [];

  // This event is emitted to the parent to remove any data from the parent items list
  @Output('deleteItem') emitDeleteEvent = new EventEmitter<number>();

  // This function is invoked when the user its the p tag to delete it
  onItemClick(index: number) {
    // Sending an emission to the parent to delete the element in this index
    this.emitDeleteEvent.emit(index);
  }
}
