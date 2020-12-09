import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appModal]'
})
export class RefDirective {
  constructor(public container: ViewContainerRef) {
  }

}
