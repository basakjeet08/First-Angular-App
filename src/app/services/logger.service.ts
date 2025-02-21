import { Injectable } from '@angular/core';

// This decoration is created so that this service can have other services injected in it
@Injectable({ providedIn: 'root' })
export class LoggerService {
  // Function to log a message to the console
  logToConsole(message: string): void {
    console.log('[/]', message);
  }
}
