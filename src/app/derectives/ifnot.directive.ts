import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIfnot]'
})
export class IfnotDirective {
  @Input('appIfnot') set ifnot(condition: boolean) {
    if (condition) {
      this.container.createEmbeddedView(this.template);
    } else {
      this.container.clear();
    }
  }

  constructor(private template: TemplateRef<any>,
              private container: ViewContainerRef) {
  }

}
