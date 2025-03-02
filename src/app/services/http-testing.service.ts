import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../Models/Post';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpTestingService {
  // This is the URL and the post data list which is fetched from firebase
  private URL = 'https://jsonplaceholder.typicode.com';
  private postList: Post[] = [];

  // Subject to pass post data events everywhere
  private postListSubject = new Subject<Post[]>();

  // This is the constructor which is fetching the post data
  constructor(private http: HttpClient) {
    // Fetching all the post data initially
    this.fetchPosts();
  }

  // This function is used to prevent the actual data to be sent
  getDataList() {
    return [...this.postList];
  }

  // This function returns the read only subject so no changes can be made outside this class
  getPostListSubject() {
    return this.postListSubject.asObservable();
  }

  // This function fetches all the post from the api request
  fetchPosts() {
    this.http
      .get<Post[]>(`${this.URL}/posts`, {
        // This is how you can add your own Header
        headers: new HttpHeaders({
          'Custom-Header': 'This is my custom header',
        }),
      })
      .subscribe((response) => {
        this.postList = response;
        this.postListSubject.next(this.getDataList());
      });
  }

  // This function posts post
  postData(title: string, body: string, userId: number) {
    this.http
      .post(`${this.URL}/posts`, new Post(0, userId, title, body))
      .subscribe((_response) => this.fetchPosts());
  }
}
