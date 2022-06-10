import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Client, Type } from '../../../shared/ngrx/interfaces/clients';

import { Add, Modify, Remove } from '../../../shared/ngrx/actions/clients';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.css'],
})
export class NgrxComponent implements OnInit {
  clients: Array<Client> = [];

  // 1. se debe conectar el reducer al manejador de estados, validar la carpeta shared/ngrx
  // 2. se debe obtener la data inicial del estado client y mostrarla en el html
  // 3. se debe hacer por lo menos una de las 3 funciones (add, delete, modify)

  constructor(private store: Store<{ clientReduce: Array<Client> }>) {
    this.store
      .select('clientReduce')
      .subscribe((response) => (this.clients = response));
  }

  ngOnInit() {}

  // seleccionar uno y desarrollarlo

  addElement() {
    let client: Client = {
      id: 2,
      name: 'Roberto',
      type: Type.IRONMONGER,
    };
    //Agregar este elemento
    this.store.dispatch(Add({ client }));
  }

  deleteElement() {
    //Eliminar el id 2
    this.store.dispatch(Remove({ id: 2 }));
  }

  modifyElement() {
    let client: Client = {
      id: 1,
      name: 'Pedro',
      type: Type.IRONMONGER,
    };
    //Modificar el primer elemento de clientes   { id: 1, name: 'Andres', type: Type.BUILDER }
    const { id } = client;
    this.store.dispatch(Modify({ id, client }));
  }
}
