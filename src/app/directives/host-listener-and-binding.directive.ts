import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHostListenerAndBinding]',
})
export class HostListenerAndBindingDirective implements OnInit {
  // Default parameters which can be passed from the parent
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'lightcoral';

  // Binding the variable to the style.backgroudColor property of the host element
  @HostBinding('style.backgroundColor') backgroundColor: string =
    this.defaultColor;

  // Initializing the default color after the view is initialized
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  // Styling the element using the host binding object when the host has a hover event
  @HostListener('mouseenter') onMouseEnter(event: Event) {
    this.backgroundColor = this.highlightColor;
  }

  // Styling the element using the host binding object when the host has a mouse leave or hover leave event
  @HostListener('mouseleave') onMouseLeave(event: Event) {
    this.backgroundColor = this.defaultColor;
  }
}
