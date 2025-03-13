import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { initCounter } from 'src/app/store/counter.actions';
import { selectCount } from 'src/app/store/counter.selector';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  // This is the value from the store stored here as a observable
  counter$: Observable<number>;

  // Injecting the required dependencies and filling the data from the store
  constructor(private store: Store<{ counter: number }>) {
    this.counter$ = this.store.select(selectCount);
  }

  // Dispatching the action to load the counter data from the local storage
  ngOnInit(): void {
    this.store.dispatch(initCounter());
  }
}
