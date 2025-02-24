import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Variables to mock auth flow
  private isLogged: boolean = false;

  // This function toggles authentication Flow and emit new flow
  onAuthenticate(): Promise<boolean> {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        this.isLogged = !this.isLogged;
        resolve(this.isUserLogged());
      }, 2000);
    });
  }

  // This function returns the current login status
  isUserLogged = () => this.isLogged;
}
