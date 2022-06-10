import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  // 1. Se debe filtrar por numeros pares
  // 2. Sumar los valores
  // 3. Mostrar el resultado por pantalla en la variable sum, debe ser igual al valor esperado

  sum: number = 0;

  @Input('values')
  set setValue(values: Array<number>) {
    this.sum = this.getPares(values);
  }

  constructor() {}

  ngOnInit() {}

  getPares(list: number[]): number {
      return list.filter((numero) => numero % 2 === 0).reduce((pre, acc) => acc + pre)
  }

}
