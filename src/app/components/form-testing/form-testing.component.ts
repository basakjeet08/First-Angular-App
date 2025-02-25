import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-testing',
  templateUrl: './form-testing.component.html',
  styleUrls: ['./form-testing.component.css'],
})
export class FormTestingComponent {
  @ViewChild('formContainer') formObject!: NgForm;

  onSignUpClick() {
    console.log(this.formObject.value);
  }
}
