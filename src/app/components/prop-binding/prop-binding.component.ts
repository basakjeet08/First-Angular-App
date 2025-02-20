import { Component } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  templateUrl: './prop-binding.component.html',
  styleUrls: ['./prop-binding.component.css'],
})
export class PropBindingComponent {
  // These properties are binded using property binding
  title: string = 'This is Property Binding';
  isDisabled: boolean = false;
  imageSource =
    'https://images.unsplash.com/photo-1739911013843-0380d6504480?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  constructor() {
    setTimeout(() => {
      this.isDisabled = true;
    }, 3000);
  }
}

/**
 * Note : Property Binding is a One way data binding technique ( Component -> View )
 *
 * In other words if any changes are done inside a variable in TS File (Component File) dynamically then those changes will be reflected in the View File (HTML Template)
 */
