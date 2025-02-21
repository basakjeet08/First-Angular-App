import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  // Getting the element references on which the directive is sitting on
  constructor(private elementRef: ElementRef) {}

  // This is the basic way to highlight elements (Not Recommended at all)
  ngOnInit(): void {
    this.elementRef.nativeElement.style = 'background-color : lightcoral';
  }
}
