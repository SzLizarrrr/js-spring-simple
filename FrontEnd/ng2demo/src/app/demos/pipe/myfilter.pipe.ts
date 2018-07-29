import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter',
  pure: false
})
export class MyfilterPipe implements PipeTransform {

  transform(value: number[]): any {
    return value.filter((m) => m < 50);
  }

}
