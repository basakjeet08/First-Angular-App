import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-components-testing',
  templateUrl: './dynamic-components-testing.component.html',
  styleUrls: ['./dynamic-components-testing.component.css'],
})
export class DynamicComponentsTestingComponent {
  // This is the error message which determines if the alert will be shown or not
  errorMessage: string | null = null;

  // This function is created when the user clicks on the show Alert button
  onShowAlertClick() {
    this.errorMessage = 'Fake Error Created';
  }

  onCloseClick() {
    this.errorMessage = null;
  }
}
