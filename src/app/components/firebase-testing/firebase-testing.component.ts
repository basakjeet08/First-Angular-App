import { Component } from '@angular/core';
import { FirebaseTestingService } from 'src/app/services/firebase-testing.service';

@Component({
  selector: 'app-firebase-testing',
  templateUrl: './firebase-testing.component.html',
  styleUrls: ['./firebase-testing.component.css'],
})
export class FirebaseTestingComponent {
  // This is the variable that store the user input
  userInput = {
    title: '',
    description: ' ',
  };

  // Injecting the Service Class
  constructor(private firebaseService: FirebaseTestingService) {}

  // This function is invoked when the user clicks on post data button
  onPostDataClick() {
    this.firebaseService
      .postData(this.userInput.title, this.userInput.description)
      .subscribe((result) => console.log(result));
  }
}
