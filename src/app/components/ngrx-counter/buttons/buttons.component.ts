import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {
  // This function is invoked when the user clicks on the increase button
  onIncreaseClick() {
    console.log('Increase Click');
  }

  // This function is invoked when the user clicks on the decrease button
  onDecreaseClick() {
    console.log('Decraese Click');
  }
}
