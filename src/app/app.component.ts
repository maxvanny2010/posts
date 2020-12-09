import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {ModalComponent} from './modal/modal.component';
import {RefDirective} from './ref.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(RefDirective) refDir: RefDirective;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  showModal(): void {
    const modal = this.resolver.resolveComponentFactory(ModalComponent);
    this.refDir.container.clear();

    const component = this.refDir.container.createComponent(modal);
    const instance = component.instance;
    instance.title = 'Dynamic title';
    instance.close.subscribe(() => {
      this.refDir.container.clear();
    });

  }
}
