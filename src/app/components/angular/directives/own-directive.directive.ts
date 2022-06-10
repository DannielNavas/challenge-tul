import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class OwnDirectiveDirective {
  constructor(private el: ElementRef) {}
}
