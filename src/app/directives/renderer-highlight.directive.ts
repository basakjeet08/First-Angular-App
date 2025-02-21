import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]',
})
export class RendererHighlightDirective implements OnInit {
  // Getting the element references on which the directive is sitting on and the renderer object
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  // Styling the element using the renderer object (Static Rendering)
  ngOnInit(): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'lightblue'
    );
  }
}
