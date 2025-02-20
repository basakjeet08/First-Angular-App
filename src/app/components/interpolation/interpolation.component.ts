import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css'],
})
export class InterpolationComponent {
  // String interpolation example
  title: string = 'This is string interpolation';
}

/**
 * Note : String interpolation is a One way data binding technique ( Component -> Views )
 *
 * In other words if any changes are done inside a variable in TS File (Component File) dynamically then those changes will be reflected in the View File (HTML Template)
 */
