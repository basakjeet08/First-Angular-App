import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

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

      // Interest
      interests: new FormArray([new FormControl(null)]),

      // Password form group
      passwordInfo: new FormGroup(
        {
          password: new FormControl('', Validators.required),
          confirmPassword: new FormControl('', Validators.required),
        },
        { validators: this.passwordValidator }
      ),
    });
  }

  // This is a getter function which provides if the user has given any wrong name input
  get isNameError(): boolean {
    // Fetching the name user data
    const firstName = this.signUpForm.get('name.firstName');
    const lastName = this.signUpForm.get('name.lastName');

    // Checking if the object is null
    if (!firstName || !lastName) return false;

    // Checking if the data is invalid
    return (
      (!firstName.valid && firstName.touched) ||
      (!lastName.valid && lastName.touched)
    );
  }

  // This is a getter function which says if a username input is invalid or not
  get isUsernameError(): boolean {
    const username = this.signUpForm.get('username');
    if (!username) return false;
    return !username.valid && username.touched;
  }

  // This is a getter function which says if the email is invalid or not
  get isEmailError(): boolean {
    const email = this.signUpForm.get('email');
    if (!email) return false;
    return !email.valid && email.touched;
  }

  // This is a getter function which says if the phone number is invalid or not
  get isPhoneNumberError(): boolean {
    const phoneNumber = this.signUpForm.get('contactInfo.phoneNumber');
    if (!phoneNumber) return false;
    return !phoneNumber.valid && phoneNumber.touched;
  }

  // Getter function for the interests
  get interests(): FormArray {
    return this.signUpForm.get('interests') as FormArray;
  }

  // This is a custom password validator function
  passwordValidator(formGroup: AbstractControl): ValidationErrors | null {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }

  // This is a getter function which says if the password is invalid or not
  get isPasswordInvalid(): boolean {
    const passwordGroup = this.signUpForm.get('passwordInfo');
    const password = passwordGroup?.get('password');
    const confirmPassword = passwordGroup?.get('confirmPassword');

    if (!passwordGroup || !password || !confirmPassword) return false;

    return (
      (!password.valid && password.touched) ||
      (!confirmPassword.valid && confirmPassword.touched) ||
      (passwordGroup.hasError('passwordsMismatch') &&
        password.touched &&
        confirmPassword.touched)
    );
  }

  // This function is invoked when the add interest button is clicked
  onInterestAdd() {
    const control = new FormControl(null, Validators.required);
    (this.signUpForm.get('interests') as FormArray).push(control);
  }

  // This function is invoked when the form is submitted
  onSubmitClick() {
    console.log(this.signUpForm.value);
  }
}
