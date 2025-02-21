import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostListenerAndBinding]',
})
export class HostListenerAndBindingDirective {
  // Binding the variable to the style.backgroudColor property of the host element
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  // Styling the element using the host binding object when the host has a hover event
  @HostListener('mouseenter') onMouseEnter(event: Event) {
    this.backgroundColor = 'lightcoral';
  }

  // Styling the element using the host binding object when the host has a mouse leave or hover leave event
  @HostListener('mouseleave') onMouseLeave(event: Event) {
    this.backgroundColor = 'transparent';
  }
}
