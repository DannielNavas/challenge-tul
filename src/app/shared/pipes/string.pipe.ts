import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringTransform',
})
export class StringPipe implements PipeTransform {
  //modificar el pipe para dependiendo de un parametro cambiar lower case o upper case
  transform(value: any, args?: any): any {
    args[0] === true ? value.toUpperCase() : value.toLowerCase();
  }
}
