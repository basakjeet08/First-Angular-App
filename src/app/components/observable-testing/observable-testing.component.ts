import { Component, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-testing',
  templateUrl: './observable-testing.component.html',
  styleUrls: ['./observable-testing.component.css'],
})
export class ObservableTestingComponent implements OnDestroy {
  // Variable to denote if the counter is currently running
  activated: boolean = false;

  // This is the counter variable along with its data subscription
  count: number = 0;
  private countersubscription!: Subscription;

  // This is the second observable which showcases error and complete states
  state: number = 0;

  // This function starts the timer and subscribes to it
  startTimerSemiCustom() {
    this.countersubscription = interval(1000).subscribe(() => {
      this.count++;
      console.log(this.count);
    });
  }

  // This function creates its own observable and starts it
  startTimerCustomObserver() {
    // Creating a new observable
    const observable = new Observable<number>((observer) => {
      let count = 1;

      // Using the set interval to achieve the functionality as the one above it
      setInterval(() => {
        // A Observer uses the next function to send the new data event
        observer.next(count++);
      }, 1000);
    });

    // We are subscribing to the observer as normal
    this.countersubscription = observable.subscribe((count) => {
      this.count = count;
      console.log(this.count);
    });
  }

  // This function resets the timer and unsubscribe it
  resetTimer() {
    this.countersubscription.unsubscribe();
    this.count = 0;
  }

  // This function toggles the current counter activation
  activateSemiToggle() {
    this.activated = !this.activated;
    this.activated ? this.startTimerSemiCustom() : this.resetTimer();
  }

  // This function toggles the current counter with the fully custom observable
  activateCustomToggle() {
    this.activated = !this.activated;
    this.activated ? this.startTimerCustomObserver() : this.resetTimer();
  }

  // This function creates a state observer which demonstrates how can we send complete and error states
  startStateObservable(isComplete: boolean = true) {
    // Creating a observable
    const observable = new Observable<number>((observer) => {
      let count = 1;

      // Setting a interval to keep sending event datas
      setInterval(() => {
        if (isComplete && count === 10) {
          observer.complete();
        } else if (!isComplete && count === 5) {
          observer.error(new Error('Reacher Error State'));
        } else {
          observer.next(count++);
        }
      }, 1000);
    });

    // Subscribing to the observable and passing various logics depending on teh next , error or complete state
    observable.subscribe({
      next: (state) => (this.state = state),
      error: (error) => alert(error),
      complete: () => console.log('State Observer Completed'),
    });
  }

  // This function starts the complete state observer
  onCompleteStateClick() {
    this.startStateObservable();
  }

  // This function starts the error state observable
  onErrorStateClick() {
    this.startStateObservable(false);
  }

  // We clean our custom subscriptions to prevent memory leaks
  ngOnDestroy(): void {
    this.countersubscription?.unsubscribe();
  }
}
