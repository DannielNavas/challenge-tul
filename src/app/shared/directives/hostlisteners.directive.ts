import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appRestricted]',
})
export class AppRestricted {
  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
    window.alert('No se permite pegar');
  }

  @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
    e.preventDefault();
    window.alert('No se permite copiar');
  }

  @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
    e.preventDefault();
    window.alert('No se permite cortar');
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    event.preventDefault();
    window.alert('No se permite el click derecho');
  }
  constructor() {}
}
