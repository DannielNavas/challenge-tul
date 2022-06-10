import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { Client } from './directives';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DirectivesComponent implements OnInit, OnDestroy {
  select = 1;
  transformDataSelect;
  dato$: Subscription;
  datos: Client[];

  array: Observable<Array<Client>> = of([
    { id: 1, age: 15, lastName: 'chia', name: 'Andres' },
    { id: 2, age: 16, lastName: 'gonzales', name: 'Alexis' },
    { id: 3, age: 17, lastName: 'navarro', name: 'Jesus' },
    { id: 4, age: 12, lastName: 'hernandez', name: 'Enrique' },
    { id: 5, age: 19, lastName: 'prieto', name: 'Carlos' },
  ]);

  constructor() {}

  ngOnInit() {
    this.getData();
  }

  trackByItems(index: number, item: Client) {}

  getData() {
    this.dato$ = this.array.subscribe((data) => (this.datos = data));
  }

  ngOnDestroy() {
    this.dato$.unsubscribe();
  }
}
