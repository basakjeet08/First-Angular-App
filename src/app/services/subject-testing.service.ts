import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SubjectTestingService {
  private nameList: string[] = [];
  private nameSubject = new BehaviorSubject<string[]>(this.nameList);

  // Mocks the fake api call data
  doMockApiCall() {
    setTimeout(() => {
      this.nameList = [
        'Bishal',
        'Bipasha',
        'Chirantan',
        'Chaitali',
        'Debayan',
        'Debolina',
        'Eshita',
        'Eshan',
        'Farhan',
        'Fatima',
        'Gaurav',
        'Gitali',
        'Hiranmay',
        'Harini',
        'Indranil',
        'Ipshita',
        'Jayanta',
        'Jhumur',
        'Kaushik',
        'Kaberi',
        'Lalit',
      ];
      this.nameSubject.next(this.nameList);
    }, 3000);
  }

  // This function returns a obervable with the data pipe
  getFilteredNames(filterValue: string = ''): Observable<string[]> {
    return this.nameSubject.pipe(
      map((names: string[]) =>
        names.filter((name) =>
          name.toLowerCase().includes(filterValue.toLowerCase())
        )
      )
    );
  }

  // This funciton exposes the name subject
  getNameObservable(): Observable<string[]> {
    return this.nameSubject.asObservable();
  }
}
