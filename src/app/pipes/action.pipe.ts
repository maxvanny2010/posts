import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'action'
})
export class ActionPipe implements PipeTransform {

  transform(str: string): string {
    return `${str.trim()} !!!!`;
  }

}
