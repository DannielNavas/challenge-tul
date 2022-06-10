import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
})
export class AngularComponent implements OnInit {
  emitValue: string;

  constructor() {}

  ngOnInit() {}

  setData(value: string): void {
    this.emitValue = value;
  }
}
