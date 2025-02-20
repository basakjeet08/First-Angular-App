import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css'],
})
export class ViewChildComponent {
  // Input Values from both the inputs
  inputValue = '';

  // This is the Template element reference in the second example case
  @ViewChild('inputReference') inputReference!: ElementRef<HTMLInputElement>;

  // Passing the reference from View to Component
  onSubmitClick() {
    this.inputValue = this.inputReference.nativeElement.value;
  }

  getDataFromHere(): string {
    return this.inputValue;
  }
}
