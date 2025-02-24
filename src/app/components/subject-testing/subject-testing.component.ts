import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectTestingService } from 'src/app/services/subject-testing.service';

@Component({
  selector: 'app-subject-testing',
  templateUrl: './subject-testing.component.html',
  styleUrls: ['./subject-testing.component.css'],
})
export class SubjectTestingComponent implements OnInit, OnDestroy {
  // This is the name List variable along with its subscription
  nameList: string[] = [];
  private nameSubscription!: Subscription;

  // This is the input query binding
  query: string = '';

  // Injecting the necessary services and faking a mock api call
  constructor(private subjectService: SubjectTestingService) {
    this.subjectService.doMockApiCall();
  }

  // Initializing the UI elements data
  ngOnInit(): void {
    this.nameSubscription = this.subjectService
      .getNameObservable()
      .subscribe((nameList) => (this.nameList = nameList));
  }

  // This function is invoked when the user clicks on the search button
  onSearchClick() {
    // Unsubscribing the old event subscription
    this.nameSubscription?.unsubscribe();

    this.nameSubscription = this.subjectService
      .getFilteredNames(this.query)
      .subscribe((filteredNames) => (this.nameList = filteredNames));
  }

  // This function is used to unsubscribe from any data subscription thus preventing memory leaks
  ngOnDestroy(): void {
    this.nameSubscription?.unsubscribe();
  }
}
