import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {ModalComponent} from './modal/modal.component';
import {RefDirective} from './ref.directive';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(RefDirective) refDir: RefDirective;

  constructor(private resolver: ComponentFactoryResolver,
              private title: Title,
              private meta: Meta,
  ) {
    this.title.setTitle('NEW TITLE');
    this.meta.addTags([
      {name: 'keywords', content: 'angular, google, app component'},
      {name: 'description', content: 'this is component'}
    ]);
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
