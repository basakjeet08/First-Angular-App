import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostListenerHighlight]',
})
export class HostListenerHighlightDirective {
  // Getting the element references on which the directive is sitting on and the renderer object
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  // Styling the element using the renderer object when the host has a hover event
  @HostListener('mouseenter') onMouseEnter(event: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'lightblue'
    );
  }

  // Styling the element using the renderer object when the host has a mouse leave or hover leave event
  @HostListener('mouseleave') onMouseLeave(event: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'transparent'
    );
  }
}
