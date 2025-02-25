import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-testing',
  templateUrl: './reactive-form-testing.component.html',
  styleUrls: ['./reactive-form-testing.component.css'],
})
export class ReactiveFormTestingComponent {
  signUpForm: FormGroup;

  constructor() {
    this.signUpForm = new FormGroup({
      // User's Name Group
      name: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
      }),

      // Username
      username: new FormControl('', Validators.required),

      // Email
      email: new FormControl('', [Validators.required, Validators.email]),

      // Contact Number Group
      contactInfo: new FormGroup({
        phoneNumber: new FormControl('', Validators.required),
        whatsappNumber: new FormControl(''),
      }),

      // Password form group
      passwordInfo: new FormGroup({
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required),
      }),
    });
  }

  // This function is invoked when the form is submitted
  onSubmitClick() {
    console.log(this.signUpForm.value);
  }
}
