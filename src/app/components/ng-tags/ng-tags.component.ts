import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-tags',
  templateUrl: './ng-tags.component.html',
  styleUrls: ['./ng-tags.component.css'],
})
export class NgTagsComponent {
  isVisible: boolean = false;
  isLoggedIn: boolean = true;

  // This funciton toggles the isLogged In state
  toggleLoginStatus() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  // This function toggles the ng container state
  toggleNgContainer() {
    this.isVisible = !this.isVisible;
  }
}
