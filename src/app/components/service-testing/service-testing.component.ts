import { Component } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-service-testing',
  templateUrl: './service-testing.component.html',
  styleUrls: ['./service-testing.component.css'],
  providers: [UserService], // Injecting the User service here in this component which will be passed down to all its child components
})
export class ServiceTestingComponent {
  constructor(logger: LoggerService, userService: UserService) {
    // Subcribing to the event emitter to get the events from the child components
    userService.eventEmitter.subscribe((status: string) => {
      logger.logToConsole(`${status} from the Parent Component`);
    });
  }
}
