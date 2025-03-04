import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FirebaseTestingService {
  // This is the url to the firebase API Call
  private url: string =
    'https://angular-firebase-testing-9aa79-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json';

  // Injecting the http client to make api calls
  constructor(private http: HttpClient) {}

  // This function is used to post the data to firebase
  postData(title: string, description: string) {
    return this.http.post(this.url, { title: title, description: description });
  }
}
