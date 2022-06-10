import { Component, OnInit } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss'],
})
export class JavascriptComponent implements OnInit {
  open = false;
  codeModel: CodeModel = {
    language: 'typescript',
    uri: 'main.ts',
    value: '',
  };

  code = '';

  options = {
    contextmenu: true,
    minimap: {
      enabled: true,
    },
  };
  visible: boolean = false;

  constructor() {}

  resetEditor() {
    this.visible = false;
    setTimeout(() => {
      this.visible = true;
      setTimeout(() => {
        let container = document.getElementsByClassName(
          'container-app__section'
        )[0];
        container.scrollTo(0, container.scrollHeight);
      }, 0);
    }, 0);
  }

  scopeExercise() {
    this.resetEditor();
    this.codeModel.value = `
    //SCOPE

    //1. Que sale por consola? error? 'b'? 'c'?
    let aux1 = 'b';
    if(true){
      let aux1 = 'c';
    }
    console.log(aux1);

    //2. Que sale por consola? error? 'b'? 'c'?
    let aux1 = 'b';
    if(true){
      let aux1 = 'c';
      console.log(aux1);
    }
    //2. Que sale por consola? error? 'b'? 'c'?
    let aux1 = 'b';
    if(true){
      let aux1 = 'c';
    }
    let aux1 = 'd';
    console.log(aux1);

    //3. Que sale por consola? error? 5? undefined ?
    console.log(aux1);
   	var aux1= 5;
    `;
  }

  referenceVSvalue() {
    this.resetEditor();
    this.codeModel.value = `
    //Referencia VS Valor

    //1. Este codigo falla?
    const a = { name: 'andres' };
    a.name='carlos';
    
    //2. Este codigo falla?
    const b = [1];
    b.push(2)

    //3. Este codigo falla?
    const c = "1";
    c = "2"
    `;
  }

  operators() {
    this.resetEditor();
    this.codeModel.value = `
    //Operadores

    // resultado de a?
    let a = 0 ? 'a' : 'b';

    //resultado de b?
    let b = 0 || 'a' || 'b';

    //resultado de c?
    let c = 'a' && 'b' && 0 && 'd';

    //resultado de d?
    let d = 'a' && 'b' && 'c' && 'd';

    `;
  }

  copyData() {
    this.resetEditor();
    this.codeModel.value = `
    
     let cliente = { age: 20, name: { first: 'Andres' , last: 'Chia' } };
     let copiaCliente = { ...cliente };
     // let copiaCliente = Object.assign({}, cliente)

     cliente.name.first = "Carlos";
     cliente.name.last = "Gonzales";
     cliente.age = 15;
  
    // cual es el resultado si imprimo cliente?
    // cual es el resultado si imprimo copiaCliente?

    `;
  }

  ngOnInit() {}
}
