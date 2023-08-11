import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'upperFirstLetterOnly'
})
export class UpperFirstLetterOnlyPipe implements PipeTransform {
  transform(value: string, type: 'lowercase' | 'uppercase'): string {
    let group = value.split(' ');
    group = group.map((item: string) => {
      let firstLetter = item.substring(0,1);
      return `${type === 'uppercase' ? firstLetter.toUpperCase() : firstLetter.toLowerCase()}${item.substring(1)}`;
    });
    return group.join(' ');
 }
}
