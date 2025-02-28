import { Post } from 'src/app/Models/Post';
import { HttpTestingService } from './../../services/http-testing.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http-testing',
  templateUrl: './http-testing.component.html',
  styleUrls: ['./http-testing.component.css'],
})
export class HttpTestingComponent implements OnInit, OnDestroy {
  // This is the post data array
  postList!: Post[];
  private postListSubscription!: Subscription;

  // This is the user input from the user for a post
  userInput = { title: '', body: '', userId: 0 };

  // Injecting the required services
  constructor(private httpTestingService: HttpTestingService) {}

  // The data is initialized with a fetch api call
  ngOnInit(): void {
    this.postListSubscription = this.httpTestingService
      .getPostListSubject()
      .subscribe((postList) => (this.postList = postList));
  }

  // This function is invoked when the submit button is clicked
  onSubmitClick() {
    this.httpTestingService.postData(
      this.userInput.title,
      this.userInput.body,
      this.userInput.userId
    );
  }

  // This function is invoked when the user clicks on the delete button
  onDeleteClick(id: number) {
    console.log(id);
  }

  // Unsubscribing to all the data event subscription to prevent memory leaks
  ngOnDestroy(): void {
    this.postListSubscription?.unsubscribe();
  }
}
