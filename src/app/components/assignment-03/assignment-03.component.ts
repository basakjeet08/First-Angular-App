import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-03',
  templateUrl: './assignment-03.component.html',
  styleUrls: ['./assignment-03.component.css'],
})
export class Assignment03Component {
  isParagraphVisible: boolean = false;
  logs: Date[] = [];

  // This function is invoked when the Visibility Button is clicked
  onToggleVisibilityClick() {
    this.isParagraphVisible = !this.isParagraphVisible;

    this.logs.push(new Date());
  }
}
