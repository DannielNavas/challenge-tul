import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringTransform',
})
export class StringPipe implements PipeTransform {
  //modificar el pipe para dependiendo de un parametro cambiar lower case o upper case
  transform(value: any, args: boolean): string {
    return args ? value.toUpperCase() : value.toLowerCase();
  }
}
