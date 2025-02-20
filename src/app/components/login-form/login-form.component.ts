import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  // User input variable
  user = {
    username: '',
    password: '',
  };

  // This function is used to check the input data from the user
  isInputValid(): boolean {
    if (!this.user.username || !this.user.password) {
      alert('Missing Input Fields');
      return false;
    }

    return true;
  }

  // This function is used to check the credentials and login user
  checkCreds() {
    if (this.user.username === 'Anirban' && this.user.password === 'admin') {
      alert('Login Successful');
    } else {
      alert('Login Failed');
    }
  }

  // This function is invoked when the submit button is clicked
  onSubmitClick() {
    if (this.isInputValid()) {
      this.checkCreds();
    }
  }
}
