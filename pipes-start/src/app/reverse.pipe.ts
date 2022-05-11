import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    // string -> split to an array full of letters
    // -> reverse letter in the array -> string
    return value.split('').reverse().join('');
  }

}
