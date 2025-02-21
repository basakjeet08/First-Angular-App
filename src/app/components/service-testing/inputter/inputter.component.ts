import { LoggerService } from 'src/app/services/logger.service';
import { UserService } from './../../../services/user.service';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inputter',
  templateUrl: './inputter.component.html',
  styleUrls: ['./inputter.component.css'],
})
export class InputterComponent implements AfterViewInit {
  // Reference to the HTML Template input element
  @ViewChild('usernameInput') userNameInput!: ElementRef<HTMLInputElement>;

  // Injection of the Userservice and logger service
  constructor(
    private userService: UserService,
    private readonly logger: LoggerService
  ) {}

  // This checks if the @ViewChild() object got binded to the template reference
  ngAfterViewInit(): void {
    if (!this.userNameInput) {
      this.logger.logToConsole('Username input reference not found !');
    }
  }

  // This function is invoked if the submit button is clicked which invoked the function in the service
  onSubmitClick() {
    const inputValue = this.userNameInput?.nativeElement?.value.trim();

    // Checking if the input is empty or not
    if (inputValue === '') {
      alert('Input Field is Empty');
      return;
    }

    this.userService.addEntry(inputValue);
    this.userNameInput.nativeElement.value = '';
    this.userService.eventEmitter.emit('Username created');
  }
}
