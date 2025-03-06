import { Component } from '@angular/core';
import { FirebaseAuthTestingService } from 'src/app/services/firebase-auth-testing.service';

@Component({
  selector: 'app-firebase-auth-testing',
  templateUrl: './firebase-auth-testing.component.html',
  styleUrls: ['./firebase-auth-testing.component.css'],
})
export class FirebaseAuthTestingComponent {
  // This is the input from the user
  userInput = {
    email: '',
    password: '',
  };

  constructor(private firebaseAuthTesting: FirebaseAuthTestingService) {}

  // This function is run when the user clicks on the submit button
  onSignUpClick() {
    this.firebaseAuthTesting
      .signUpUser(this.userInput.email, this.userInput.password)
      .subscribe((response) => console.log(response));
  }

  // This function is invoked when the user clicks on the login button
  onLoginClick() {
    this.firebaseAuthTesting
      .login(this.userInput.email, this.userInput.password)
      .subscribe((response) => console.log(response));
  }
}
