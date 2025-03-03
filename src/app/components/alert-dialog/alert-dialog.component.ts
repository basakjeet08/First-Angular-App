import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css'],
})
export class AlertDialogComponent {
  // These are the properties binded for this template
  @Input() errorMessage!: string;
  @Output() close = new EventEmitter<void>();

  // This function is invoked when the close button is clicked
  onCloseClick() {
    this.close.emit();
  }
}
