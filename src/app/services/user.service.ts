import { LoggerService } from './logger.service';
import { EventEmitter, Injectable } from '@angular/core';

// This decoration is created so that this service can have other services injected in it
@Injectable({ providedIn: 'root' })
export class UserService {
  // This variable contains the user entries data in it and the event emitter object
  userEntries: string[] = [];
  eventEmitter = new EventEmitter<string>();

  // Injecting the LoggerService in it so we can use it here
  constructor(private readonly loggerService: LoggerService) {
    loggerService.logToConsole('Logger Service Attached to the User Service');
  }

  // Adding a user to the entries
  addEntry(userName: string): void {
    this.userEntries.push(userName);
    this.loggerService.logToConsole(`User ${userName} is added to the Entries`);
  }

  // Deleting the specified user from the entries
  deleteEntry(index: number): void {
    this.loggerService.logToConsole(
      `User ${this.userEntries[index]} is removed from the Entries`
    );

    this.userEntries.splice(index, 1);
  }
}
