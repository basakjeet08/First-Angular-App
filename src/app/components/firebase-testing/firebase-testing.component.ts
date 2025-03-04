import { Component, OnInit } from '@angular/core';
import { FirebasePost } from 'src/app/Models/FirebasePost';
import { FirebaseTestingService } from 'src/app/services/firebase-testing.service';

@Component({
  selector: 'app-firebase-testing',
  templateUrl: './firebase-testing.component.html',
  styleUrls: ['./firebase-testing.component.css'],
})
export class FirebaseTestingComponent implements OnInit {
  // This is the variable that store the user input
  userInput = {
    title: '',
    description: '',
  };

  postData: FirebasePost[] = [];

  // Injecting the Service Class
  constructor(private firebaseService: FirebaseTestingService) {}

  // This is called when the component is initialized
  ngOnInit(): void {
    this.fetchData();
  }

  // This function fetches the data from the firebase
  fetchData() {
    this.firebaseService
      .fetchData()
      .subscribe((postData) => (this.postData = postData));
  }

  // This function is invoked when the user clicks on post data button
  onPostDataClick() {
    this.firebaseService
      .postData(this.userInput.title, this.userInput.description)
      .subscribe(() => this.fetchData());
  }

  // This function is called when the delete button is clicked
  onDeleteClick(id: string) {
    this.firebaseService.deletePost(id).subscribe(() => this.fetchData());
  }
}
