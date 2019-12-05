import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    let palabras = value.split(" ")
    let palabrasCap = [];
    for (let palabra of palabras) {
      console.log(palabra[0])
    }
    return true
  }
}
