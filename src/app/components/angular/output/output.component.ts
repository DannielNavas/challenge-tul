import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  @Output() outputEmitter = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  emit(value: string) {
    // 1. debe emitir el valor
    // 2. se debe ver visualizado en el componente angular.component y mostrado en el campo valor emitido que esta determinado con el atributo emitValue del angular.component.ts
    this.outputEmitter.emit(value);
  }
}
