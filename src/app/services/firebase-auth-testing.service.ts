import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FirebaseAuthTestingService {
  // This is the url for the firebase auth url
  private URL = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private KEY = 'key=AIzaSyAtQkvM8w1EuqSw58JsAXnT-3SjGE4yu7I';

  // Injecting the necessary http clients
  constructor(private http: HttpClient) {}

  // This function calls the firebase auth api
  signUpUser(email: string, password: string) {
    return this.http.post(`${this.URL}signUp?${this.KEY}`, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }

  // This function logs the user in
  login(email: string, password: string) {
    return this.http.post(`${this.URL}signInWithPassword?${this.KEY}`, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }
}
