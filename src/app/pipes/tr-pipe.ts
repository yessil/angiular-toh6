import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'tr'})
export class TrPipe implements PipeTransform {
  transform(value: number, exponent = 1): number {
    return Math.pow(value, exponent);
  }
}
