import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css'],
})
export class ShowDataComponent {
  // This variable contains the user entry values
  userEntries: string[] = [];

  // Injecting the user service class into this component
  constructor(private userService: UserService) {
    this.userEntries = userService.userEntries;
  }

  // This function is invoked when the user hits the delete button
  onDeleteClick(index: number) {
    this.userService.deleteEntry(index);
    this.userService.eventEmitter.emit('Username deleted');
  }
}
