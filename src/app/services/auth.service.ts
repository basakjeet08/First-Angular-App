import { EventEmitter, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Variables to mock auth flow
  private isLogged: boolean = false;
  loggedEventEmitter = new EventEmitter<boolean>();

  // This function toggles authentication Flow and emit new flow
  onAuthenticate() {
    setTimeout(() => {
      this.isLogged = !this.isLogged;
      this.loggedEventEmitter.emit(this.isUserLogged());
    }, 2000);
  }

  // This function returns the current login status
  isUserLogged = () => this.isLogged;
}
