import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-reff',
  templateUrl: './template-reff.component.html',
  styleUrls: ['./template-reff.component.css'],
})
export class TemplateReffComponent {
  // Input Values from both the inputs
  inputValue1 = '';
  inputValue2 = '';

  // This is the Template element reference in the second example case
  @ViewChild('inputReference2') inputReference2!: ElementRef<HTMLInputElement>;

  // Passing the reference from View to Component
  onSubmitClick(inputElement: HTMLInputElement) {
    this.inputValue1 = inputElement.value;
  }

  // Accessing the reference from the Component file directly
  onSubmitClickWithoutPassingReference() {
    this.inputValue2 = this.inputReference2.nativeElement.value;
  }
}
