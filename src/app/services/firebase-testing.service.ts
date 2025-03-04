import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { FirebasePost } from '../Models/FirebasePost';

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

  // This function is used to get the data from the firebase
  fetchData() {
    return this.http.get<{ [key: string]: FirebasePost }>(this.url).pipe(
      // Transforming each firebase [key : string ] : { title , description } To FirebasePost Object
      map((response) => {
        const postsArray: FirebasePost[] = [];

        // Looping through all the key in the response
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            // Creating a FirebasePost Object and pushing it all in an array
            postsArray.push(
              new FirebasePost(
                key,
                response[key].title,
                response[key].description
              )
            );
          }
        }

        return postsArray;
      })
    );
  }
}
