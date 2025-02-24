import { Component } from '@angular/core';
import { CanDashboardDeactivate } from 'src/app/guards/dashboard-deactive.guard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements CanDashboardDeactivate {
  hasUnsavedChanges: boolean = true;

  // Implementing the logic for the deactivate option
  canDeactivate(): boolean {
    if (this.hasUnsavedChanges) {
      return confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }
}
