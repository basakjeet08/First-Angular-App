import { Component } from '@angular/core';

@Component({
  selector: 'app-component-communication-parent',
  templateUrl: './component-communication-parent.component.html',
  styleUrls: ['./component-communication-parent.component.css'],
})
export class ComponentCommunicationParentComponent {
  // This stores the items (strings) in a parent level so that it can pass data to both its childrens
  items: string[] = [];

  // This function is run when the first child of this component emits an event to add the item
  onAddClick(item: string) {
    this.items.push(item);
  }

  // This function is invoked when the second child of this component emits an event to delete the item
  onDeleteClick(index: number) {
    this.items = this.items.filter((_, i) => i !== index);
  }
}
